/**
 * Possible test files
 * @type {Object<string, string>}
 */
export const FilePaths = {
    TEST_INPUT_1: './day2/testInput.txt',
    TEST_INPUT_2: './day2/testInput2.txt',
    ACTUAL_INPUT: './day2/actualInput.txt'
};


/**
 * The max number of a color of cube in a game
 */
export const MaxNum = {
    RED: 12,
    GREEN: 13,
    BLUE: 14
}


/**
 * Converts an array of game strings into a map representation. That looks like this:
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
 * @param {Array<string>} inputArr ['Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green', ...]
 * @returns {Object<Object<string, number>>}
 */
export const createGameMap = function(inputArr) {
    const gameMap = {};
    
    inputArr.forEach((game) => {
        const gameRegex = /Game (?<gameId>[0-9]+): /gid
        const gameId = gameRegex.exec(game)?.groups?.gameId;

        const rounds = game.split(`Game ${gameId}: `)[1].split(';');
        gameMap[gameId] = [];

        rounds.forEach((round) => {
            const redRegex = /(?<red>[0-9]+) red/gid
            const blueRegex = /(?<blue>[0-9]+) blue/gid
            const greenRegex = /(?<green>[0-9]+) green/gid

            const numRed = redRegex.exec(round)?.groups?.red || 0;
            const numBlue = blueRegex.exec(round)?.groups?.blue|| 0;
            const numGreen = greenRegex.exec(round)?.groups?.green || 0;

            gameMap[gameId].push({
                red: Number(numRed),
                blue: Number(numBlue),
                green: Number(numGreen)
            });
        });
    });

    return gameMap;
}


export const getPossibleGames = function(gameMap) {
    const gameIds = Object.keys(gameMap);
    const possibleGames = [];

    gameIds.forEach((gameId) => {
        const game = gameMap[gameId];

        const gamePossible = game.every((round) => {
            return isGamePossible(round.red, round.green, round.blue);
        });

        if (gamePossible) {
            possibleGames.push(Number(gameId))
        };
    });

    return possibleGames;
}


/**
 * Checks the number of cubes found in a game against the number possible for each color. Returns
 * whether it is possible for a game to have happened.
 * @param {number} red 
 * @param {number} green 
 * @param {number} blue 
 * @returns {boolean} whether the game is possible
 */
export const isGamePossible = function(red, green, blue) {
    return red <= MaxNum.RED && green <= MaxNum.GREEN && blue <= MaxNum.BLUE;
}