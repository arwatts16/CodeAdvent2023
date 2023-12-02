import {FilePaths, toNumStringOnlyArray, toTwoDigitNumberArray, stringArrToNumberArr} from './util.mjs';
import {readFile, addArrayNumbers} from '../util.mjs'

// ------------------- PROLOGUE ------------------- //

// Read in the file, split it up into each new line, and intialize the array for the numbers of each line
const testInput = readFile(FilePaths.ACTUAL_INPUT);

// Put each line of text into a different index in the array
const inputArr = testInput.split('\n');

// ------------------- PROLOGUE ------------------- //



// ------------------- PART ONE ------------------- //

// For each line, filter out the characters and add the numbers to a string, then add each to the numStringArr
const numStringArr1 = toNumStringOnlyArray(inputArr);

// For each array of numbers, grab the first and the last to create a two digit number
const numArr1 = toTwoDigitNumberArray(numStringArr1);

// Add up all the numbers in the array
const total1 = addArrayNumbers(numArr1);

// Print out the result
console.log('Part One Total: ', total1);

// ------------------- PART ONE ------------------- //



// ------------------- PART TWO ------------------- //

// Convert all number strings to numbers
const numStringArr2 = stringArrToNumberArr(inputArr);

// For each array of numbers, grab the first and the last to create a two digit number
const numArr2 = toTwoDigitNumberArray(numStringArr2);

// Add up all the numbers in the array
const total2 = addArrayNumbers(numArr2);

// Print out the result
console.log('Part Two Total: ', total2);

// ------------------- PART TWO ------------------- //
