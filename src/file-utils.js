import { globSync } from 'glob';
import { minimatch } from 'minimatch';
import * as fs from 'fs';

export function getRepoLanguageFiles(patterns) {
  try {
    return patterns.reduce((matched, pattern) => 
      matched.concat(globSync(pattern, { ignore: ['node_modules/**', 'vendor/**'] })), 
    []
    );
  } catch (error) {
    throw new Error(`Failed to find files matching patterns: ${error.message}`);
  }
}

export function matchFiles(files, patterns) {
  try {
    return files.filter(f => patterns.find(p => minimatch(f, p)), []).filter(m => m != null);
  } catch (error) {
    throw new Error(`Failed to match files against patterns: ${error.message}`);
  }
}

export function prepareEnvArrayValue(env_var) {
  if (!env_var) return [];
  return env_var.split(",").filter(item => item != '');
}

export function readFilesAsync(filenames) {
  return filenames.map(filename => 
    new Promise(async (resolve, reject) => {
      try {
        const contents = (await fs.promises.readFile(filename)).toString();
        resolve({
          filename,
          contents
        });
      } catch (error) {
        reject(new Error(`Failed to read file ${filename}: ${error.message}`));
      }
    })
  );
}
