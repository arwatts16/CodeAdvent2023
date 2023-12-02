import {FilePaths, createGameMap, getPossibleGames} from './util.mjs';
import {addArrayNumbers, readFile} from '../util.mjs'

// ------------------- PROLOGUE ------------------- //

// Read in the file, split it up into each new line, and intialize the array for the numbers of each line
const testInput = readFile(FilePaths.ACTUAL_INPUT);

// Put each line of text into a different index in the array
const inputArr = testInput.split('\n');

/**
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

const possibleGames = getPossibleGames(GameMap);

const total1 = addArrayNumbers(possibleGames);

console.log('Part One Total: ', total1)