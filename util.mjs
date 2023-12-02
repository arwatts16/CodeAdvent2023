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


/**
 * Add up all the numbers in the Array
 * @param {Array<number>} numArr
 * @returns {number}
 */
export const addArrayNumbers = function(numArr) {
    let total = 0;
    numArr.forEach((num) => {
        total += num;
    });

    return total;
};


/**
 * Multiply up all the numbers in the Array
 * @param {Array<number>} numArr
 * @returns {number}
 */
export const multArrayNumbers = function(numArr) {
   return numArr.reduce((acc, value) => acc * value, 1);
};