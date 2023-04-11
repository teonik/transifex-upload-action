import { transifexApi } from '@transifex/api';
import * as path from 'path';

export class TransifexApiHelper {
    #organization = null;
    #project = null;
    #resources = null;

    token;
    organization_name;
    project_name;
    language_code;

    //
    constructor(token, organization_name, project_name) {
        this.token = token;
        this.organization_name = organization_name;
        this.project_name = project_name;
    }

    static async create(token, organization_name, project_name) {
        const helper = new TransifexApiHelper(token, organization_name, project_name);
        await helper.initialize();
        return helper;
    }

    //
    async initialize() {
        // API token authentication
        transifexApi.setup({ auth: this.token });

        await this.#getOrganization();
        await this.#getProject();

        this.#resources = await this.#project.fetch("resources");
        await this.#resources.fetch();

        this.language_code = await this.getSourceLanguage();
    }

    //
    async getProjectFiles() {
        let resource_files = [];
        for (const r of this.#resources.data) {
            resource_files.push({ id: r.id, name: r.attributes.name, type: r.attributes.i18n_type });
        }

        return resource_files;
    }

    //
    async getSourceLanguage() {
        const src_lang = await this.#project.fetch("source_language");
        return src_lang.attributes.code;
    }

    //
    async #getOrganization() {
        for await (const org of transifexApi.Organization.all()) {
            if (org.attributes.name == this.organization_name) {
                this.#organization = org;
                break;
            }
        }

        if (!this.#organization) {
            throw new Error("Organization not found");
        }

        return this.#organization;
    }

    //
    async #getProject() {
        const projects = await this.#organization.fetch("projects");
        this.#project = await projects.get({ name: this.project_name });
        if (!this.#project) {
            throw new Error("Project not found");
        }
        return this.#project;
    }

    //
    async updateResource(resource_name, content) {
        const resource = await this.#resources.get({ name: resource_name });
        return transifexApi.ResourceStringsAsyncUpload.upload({
            resource,
            content,
        });
    }

    //
    async createResoure(resource_name) {
        const slug = path
            .basename(resource_name, path.extname(resource_name))
            .replace(/(\.|\s)/g, "_");

        return transifexApi.Resource.create({
            name: resource_name,
            slug,
            project: this.#project,
            relationships: {
                i18n_format: {
                    data: {
                        id: 'INI',
                        type: 'i18n_formats'
                    }
                }
            }
        });
    }

    //
    async createResoureWithContent(resource_name, content) {
        const new_resource = await this.createResoure(resource_name);
        // const sleep = ms => new Promise(r => setTimeout(r, ms));
        // await sleep(5000);
        try {
            return transifexApi.ResourceStringsAsyncUpload.upload({
                resource: new_resource,
                content,
            });
        }
        catch (e) {
            console.error(e);
        }
    }

    //
    async deleteResource(resource_name) {
        const res = await this.#resources.get({ name: resource_name });
        return res.delete();
    }
}
