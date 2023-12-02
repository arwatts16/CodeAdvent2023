import fs from 'fs';
import path from 'path';

/**
 * Read in the file to the specified path
 * @param {string} filePath 
 * @returns {string} the file contents
 */
export const readFile = function(filePath) {
    return fs.readFileSync(path.resolve(filePath), 'utf8');
};