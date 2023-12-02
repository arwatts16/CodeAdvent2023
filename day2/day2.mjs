import {FilePaths, createGameMap, getMinRequired, getPossibleGames} from './util.mjs';
import {addArrayNumbers, multArrayNumbers, readFile} from '../util.mjs'

// ------------------- PROLOGUE ------------------- //

// Read in the file, split it up into each new line, and intialize the array for the numbers of each line
const testInput = readFile(FilePaths.ACTUAL_INPUT);

// Put each line of text into a different index in the array
const inputArr = testInput.split('\n');

/**
 * Put the games into a format that we can easily parse over and get data from
 * 
 * {
 *  id1: [{
 *   red: count,
 *   blue: count,
 *   green: count
 *  }],
 *  id2: [{
 *   red: count,
 *   blue: count,
 *   green: count
 *  }]
 * }
 */
const GameMap = createGameMap(inputArr);

// ------------------- PROLOGUE ------------------- //



// ------------------- PART ONE ------------------- //

// Get an array of game id's that are possible
const possibleGames = getPossibleGames(GameMap);

// Add up all of those numbers
const total1 = addArrayNumbers(possibleGames);

console.log('Part One Total: ', total1);

// ------------------- PART ONE ------------------- //



// ------------------- PART TWO ------------------- //

// Calculate the min number of cubes needed for each game, then multiply them together
const minRequired = getMinRequired(GameMap);

// Add up all those numbers in the array
const total2 = addArrayNumbers(minRequired);

console.log('Part Two Total: ', total2);

// ------------------- PART TWO ------------------- //
