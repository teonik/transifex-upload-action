import { globSync } from 'glob';
import { minimatch } from 'minimatch';
import { TransifexApiHelper } from './transifex_helper.js';
import * as path from 'path';
import * as fs from 'fs';

/**
 * Helper functions
 */

// Returns matched filenames based on the given list of glob patterns
const getRepoLanguageFiles = patterns => patterns.reduce((matched, pattern) => matched.concat(globSync(pattern, { ignore: ['node_modules/**', 'vendor/**'] })), []);

// Match a list of filenames against a list of glob patterns
const matchFiles = (files, patterns) => files.filter(f => patterns.find(p => minimatch(f, p)), []).filter(m => m != null);

// Prepares array values (a comma separated string) from env variables
const prepareEnvArrayValue = env_var => env_var.split(",").filter(env_var => env_var != '');

// Converts a filename to it's Transifex project resource name
function convertRepoNameToTransifexName(repo_filename, tfx_name_pattern) {
  const directory = path.dirname(repo_filename);
  const extension = path.extname(repo_filename);

  const filename_regex = '(?<filename>[a-zA-Z0-9_\\.\\-\\s]+)';

  const resource_name_regex_str = tfx_name_pattern
    .replace(/\./g, "\\.")
    .replace("<filename>", filename_regex)
    .replace("<ext>", extension)
    .replace("<directory>", directory);

  const resource_name_regex = new RegExp(resource_name_regex_str);
  const match = tfx_name_pattern.includes("<directory>") ? repo_filename.match(resource_name_regex) : path.basename(repo_filename).match(resource_name_regex);
  if (match) {
    return tfx_name_pattern
      .replace("<filename>", match.groups.filename)
      .replace("<ext>", extension)
      .replace("<directory>", directory);
  }
  else {
    // Should never get here
    throw new Error("No match found for " + repo_filename + " and tfx_name_pattern: " + tfx_name_pattern);
  }
}

//
const extraFilesOnRepo = (transifexFiles, repoFiles, name_pattern) => repoFiles.filter(f => !transifexFiles.includes(convertRepoNameToTransifexName(f, name_pattern)));

//
const extraFilesOnTransifex = (transifexFiles, repoFiles, name_pattern) => transifexFiles.filter(f => !repoFiles.map(f_ => convertRepoNameToTransifexName(f_, name_pattern)).includes(f));


/**
 * Action entrypoint
 */
async function main() {
  // Check if force upload is enabled
  let force_upload = false;
  if (process.env.force_upload.toLowerCase() == 'true' || process.env.force_upload == '1') {
    console.log("---Force Upload Enabled---");
    force_upload = true;
  }

  // Get input and enviroment variables from the Action's context
  const commit_changes = {
    added: prepareEnvArrayValue(process.env.added),
    modified: prepareEnvArrayValue(process.env.modified),
    deleted: prepareEnvArrayValue(process.env.deleted),
    copied: prepareEnvArrayValue(process.env.copied),
    renamed: prepareEnvArrayValue(process.env.renamed),
  };

  const tfx_org = process.env.transifex_organization;
  const tfx_token = process.env.transifex_token;
  const tfx_project = process.env.transifex_project;
  const file_extension = process.env.file_extension;
  const tfx_name_pattern = process.env.transifex_name_pattern;
  // const tfx_file_type = process.env.transifex_file_type;


  // Setup Transifex helper and get project details
  const tfxHelper = await TransifexApiHelper.create(tfx_token, tfx_org, tfx_project);
  const transifexFiles = (await tfxHelper.getProjectFiles()).map(f => f.name);
  const transifex_source_lang = await tfxHelper.getSourceLanguage();

  // Generate the final Transifex resource naming pattern
  const tfx_resource_name_pattern = tfx_name_pattern.replace(/<lang>/g, transifex_source_lang).replace("<ext>", file_extension);

  // Get the repo's language files
  const match_patterns = process.env.match_patterns.split(/\r?\n/).map(p => p.replace(/<lang>/g, transifex_source_lang).replace("<ext>", file_extension));
  const repoFiles = getRepoLanguageFiles(match_patterns);

  // Get the language file modifications reported by git
  const matchedModified = matchFiles(commit_changes.modified, match_patterns);
  // const matchedAdded = matchFiles(commit_changes.added, patterns);
  // const matchedDeleted = matchFiles(commit_changes.deleted, patterns);
  // const matchedCopied = matchFiles(commit_changes.copied, patterns);
  // const matchedRenamed = matchFiles(commit_changes.renamed, patterns);

  // Create the final added,deleted,modified file lists
  const added = extraFilesOnRepo(transifexFiles, repoFiles, tfx_resource_name_pattern);
  const deleted = extraFilesOnTransifex(transifexFiles, repoFiles, tfx_resource_name_pattern);
  const modified = force_upload ? repoFiles.filter(f => !added.includes(f)) : matchedModified.filter(f => !added.includes(f));

  // Helper function to read multiple files asynchronously
  const readFilesAsync = filenames => filenames.map(f => new Promise(async resolve => {
    const contents = (await fs.promises.readFile(f)).toString();
    resolve({
      filename: f,
      contents
    });
  }));

  // Read added/modified file contents
  const added_files_read_promises = readFilesAsync(added);
  const modded_files_read_promises = readFilesAsync(modified)

  let added_request_promises = [];
  let modded_request_promises = [];
  let deleted_request_promises = [];

  // Create new resource
  if (added.length > 0) {
    console.log("Creating resources:");
    console.log(added);

    const added_files = await Promise.all(added_files_read_promises);
    added_request_promises = added_files.map(added_file =>
      tfxHelper.createResoureWithContent(convertRepoNameToTransifexName(added_file.filename, tfx_resource_name_pattern), added_file.contents));
  }

  // Update modified resources
  if (modified.length > 0) {
    console.log("Updating resources:");
    console.log(modified);

    const modded_files = await Promise.all(modded_files_read_promises);
    modded_request_promises = modded_files.map(modded_file =>
      tfxHelper.updateResource(convertRepoNameToTransifexName(modded_file.filename, tfx_resource_name_pattern), modded_file.contents));
  }

  // Delete resources
  if (deleted.length > 0) {
    console.log("Deleting resources:");
    console.log(deleted);
    for (const d of deleted) {
      deleted_request_promises.push(tfxHelper.deleteResource(d));
    };
  }

  // Wait for all requests to finish
  await Promise.all([
    ...added_request_promises,
    ...modded_request_promises,
    ...deleted_request_promises
  ]);
}

try {
  main();
}
catch (e) {
  console.error(e.message);
}