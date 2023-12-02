# Day 2 - Cube Conundrum
https://adventofcode.com/2023/day/2 <br>
Stars Earned: 2

---

## Part 1
With a given game output, we have to calculate which games are possible to have been played when considering that a game
could only ever have `12 red, 13 green, and 14 blue` cubes. Then you take the id of all possible games and add them up to get
the result

### Example
```
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
```
Games Possible: `[1, 2, 5]`<br>
Total: `1 + 2 + 5` or `8`

Games `3` and `4` are not possible because one round exceeds the possible number of red (in the case of Game 3) or blue
(in the case of Game 4) cubes. Therefore they're not added to the calculation.

### Output
`Part One Total:  2239`

### Test Files
* testInput.txt
* actualInput.txt

---

## Part 2
This time, take all of the games and calculate the mininmum number of cubes for each color that would make the game possible. 
Once you have those numbers (`x blue, y red, and z green`) multiply them all together to get a number. Add the number up for each 
game and get the total.

### Example
```
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
```

Game 1 Minimums: `6 blue, 4 red, 2 green` becomes `6 * 4 * 2` or `48` <br>
Games 2-5: `12, 1560, 630, 36` respectively. 

Games 1-5 array of numbers: `[48, 12, 1560, 630, 36]` <br>
Total: `48 + 12 + 1560 + 630 + 36` or `2286`

### Output
`Part Two Total:  83435`

### Test Files
* testInput.txt
* actualInput.txt