import fs from 'fs';
import path from 'path';


/**
 * Possible test files
 * @type {Object<string, string>}
 */
export const FilePaths = {
    TEST_INPUT_1: './day1/testInput.txt',
    TEST_INPUT_2: './day1/testInput2.txt',
    ACTUAL_INPUT: './day1/actualInput.txt'
};


/**
 * @type {Object<string, number>}
 */
export const Integers = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'zero': 0
}


/**
 * Returns whether something is a number or character
 * @param {string} value 
 * @returns {boolean} if the value is a number
 */
export const isNumber = function(value){
    const num = Number(value);
    return !isNaN(num);
};


/**
 * Read in the file to the specified path
 * @param {string} filePath 
 * @returns {string} the file contents
 */
export const readFile = function(filePath) {
    return fs.readFileSync(path.resolve(filePath), 'utf8');
};


/**
 * Take in a string and return an array of all the characters in the string
 * @param {string} value 
 * @returns {Array<string>}
 */
export const toCharArray = function(value) {
    return value.split('');
};


/**
 * Exchange a string for the equivalent number value
 * @param {Array<string>} initArr 
 */
export const stringArrToNumberArr = function(initArr) {
    const nums = Object.keys(Integers);
    const numArr = [];

    initArr.forEach((line) => {
        const charArr = toCharArray(line);
        let finalString = '';

        charArr.reduce((previousValue, currentValue) => {
            if (isNumber(currentValue)) {
                finalString += currentValue;
                previousValue = '';
            } else {
                previousValue += currentValue;
                nums.forEach((num) => {
                    if (previousValue.includes(num)) {
                        finalString += Integers[num];
                        previousValue = previousValue[previousValue.length - 1];
                    }
                })
                return previousValue;
            }
        }, '');

        numArr.push(finalString);
    })

    return numArr;
};


/**
 * Take in an array of characters and return an array 
 * @param {Array<string>} charArr 
 */
export const toNumStringOnlyArray = function(charArr) {
    const numStringArr = [];

    charArr.forEach((value) => {
        const charArray = toCharArray(value);
        const numOnlyArr = charArray.filter(char => isNumber(char));

        numStringArr.push(numOnlyArr.join(''));
    });

    return numStringArr
};


/**
 * Pick out the first and last number in each index of the array
 * @param {Array<string>} numStringArr [1232, 45, 756, 900, 00, 5]
 * @returns {Array<number>} [12, 45, 76, 90, 00, 55]
 */
export const toTwoDigitNumberArray = function(numStringArr) {
    const numArr = [];

    numStringArr.forEach((value) => {
        const numbers = toCharArray(value);
        let valueString = '00'; // if no numbers in a line make sure it's shown as 00
        let endValue;

        // either duplicate if there's only one input, or grab first and last.
        if (numbers.length == 1) {
            valueString = numbers[0] + numbers[0];
        } else if (numbers.length > 1) {
            valueString = numbers[0] + numbers[numbers.length - 1];
        }

        endValue = Number(valueString);
        numArr.push(endValue);
    });

    return numArr;
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