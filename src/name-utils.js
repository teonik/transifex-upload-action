import * as path from 'path';

export function convertRepoNameToTransifexName(repo_filename, tfx_name_pattern) {
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
  } else {
    throw new Error(`No match found for ${repo_filename} and tfx_name_pattern: ${tfx_name_pattern}`);
  }
}

export function getNewFiles(transifexFiles, repoFiles, name_pattern) {
  return repoFiles.filter(f => !transifexFiles.includes(convertRepoNameToTransifexName(f, name_pattern)));
}

export function getDeletedFiles(transifexFiles, repoFiles, name_pattern) {
  return transifexFiles.filter(f => !repoFiles.map(f_ => convertRepoNameToTransifexName(f_, name_pattern)).includes(f));
}
