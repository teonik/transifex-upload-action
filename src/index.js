import { TransifexApiHelper } from './transifex-helper.js';
import { getRepoLanguageFiles, matchFiles, prepareEnvArrayValue, readFilesAsync } from './file-utils.js';
import { convertRepoNameToTransifexName, getNewFiles, getDeletedFiles } from './name-utils.js';

/**
 * Action entrypoint
 */

function validateEnvVariables() {
  const requiredVars = {
    'transifex_organization': process.env.transifex_organization,
    'transifex_token': process.env.transifex_token,
    'transifex_project': process.env.transifex_project,
    'transifex_name_pattern': process.env.transifex_name_pattern,
    'match_patterns': process.env.match_patterns,
  };
  
  for (const [name, value] of Object.entries(requiredVars)) {
    if (!value) {
      throw new Error(`Missing required environment variable: ${name}`);
    }
  }
}

async function main() {
  validateEnvVariables();
  
  // Check if force upload is enabled
  let force_upload = false;
  if (process.env.force_upload && (process.env.force_upload.toLowerCase() == 'true' || process.env.force_upload == '1')) {
    console.log("---Force Upload Enabled---");
    force_upload = true;
  }

  // Get input and enviroment variables from the Action's context
  const modifiedFiles = process.env.modified ? prepareEnvArrayValue(process.env.modified) : [];

  const transifexOrganization = process.env.transifex_organization;
  const transifexToken = process.env.transifex_token;
  const transifexProject = process.env.transifex_project;
  const file_extension = process.env.file_extension;
  const resourceNamePattern = process.env.transifex_name_pattern;

  // Setup Transifex helper and get project details
  const transifexHelper = await TransifexApiHelper.create(transifexToken, transifexOrganization, transifexProject);
  const transifexFiles = (await transifexHelper.getProjectFiles()).map(f => f.name);
  const sourceLanguage = await transifexHelper.getSourceLanguage();

  // Generate the final Transifex resource naming pattern
  const resolvedResourceNamePattern = resourceNamePattern.replace(/<lang>/g, sourceLanguage).replace("<ext>", file_extension);

  // Get the repo's language files
  const match_patterns = process.env.match_patterns.split(/\r?\n/).map(p => p.replace(/<lang>/g, sourceLanguage).replace("<ext>", file_extension));
  const repoFiles = getRepoLanguageFiles(match_patterns);

  // Get the language file modifications reported by git
  const gitModifiedFiles = matchFiles(modifiedFiles, match_patterns);

  // Create the final added,deleted,modified file lists
  const added = getNewFiles(transifexFiles, repoFiles, resolvedResourceNamePattern);
  const deleted = getDeletedFiles(transifexFiles, repoFiles, resolvedResourceNamePattern);
  const modified = force_upload ? repoFiles.filter(f => !added.includes(f)) : gitModifiedFiles.filter(f => !added.includes(f));

  // Read added/modified file contents
  const addedFilesPromises = readFilesAsync(added);
  const modifiedFilesPromises = readFilesAsync(modified)

  let createPromises = [];
  let updatePromises = [];
  let deletePromises = [];

  // Create new resource
  if (added.length > 0) {
    console.log("Creating resources:");
    console.log(added);

    try {
      const addedFiles = await Promise.all(addedFilesPromises);
      createPromises = addedFiles.map(addedFile =>
        transifexHelper.createResourceWithContent(convertRepoNameToTransifexName(addedFile.filename, resolvedResourceNamePattern), addedFile.contents));
    } catch (error) {
      throw new Error(`Failed to create resource from files: ${error.message}`);
    }
  }

  // Update modified resources
  if (modified.length > 0) {
    console.log("Updating resources:");
    console.log(modified);

    try {
      const modifiedFiles = await Promise.all(modifiedFilesPromises);
      updatePromises = modifiedFiles.map(modifiedFile =>
        transifexHelper.updateResource(convertRepoNameToTransifexName(modifiedFile.filename, resolvedResourceNamePattern), modifiedFile.contents));
    } catch (error) {
      throw new Error(`Failed to update resource from files: ${error.message}`);
    }
  }

  // Delete resources
  if (deleted.length > 0) {
    console.log("Deleting resources:");
    console.log(deleted);
    try {
      for (const d of deleted) {
        deletePromises.push(transifexHelper.deleteResource(d));
      };
    } catch (error) {
      throw new Error(`Failed to delete resource: ${error.message}`);
    }
  }

  // Wait for all requests to finish
  try {
    await Promise.all([
      ...createPromises,
      ...updatePromises,
      ...deletePromises
    ]);
  } catch (error) {
    throw new Error(`Failed to complete Transifex operations: ${error.message}`);
  }
}

(async () => {
  try {
    await main();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();