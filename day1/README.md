# Day 1 - Trebuchet?!
https://adventofcode.com/2023/day/1 <br>
Stars Earned: 2

---

## Part 1
Using one of the input files below, for each line of the file find the first and the last number in the array, concat them to make a two digit number, then add each of these numbers to create the total output at the end.

### Example
For the test input:
```
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
```
Each line would have the following numbers associated with them: `[12, 38, 12345, 7]`. <br>
And from there the two digit numbers would be: `[12, 38, 15, 77]`. <br>
The total, or output, of this would be `12 + 38 + 15 + 77` or `142`.

## Output
`Part One Total:  55538`

### Test Files
* testInput.txt
* actualInput.txt

---

## Part 2
This time, the same general task as part one applies, but you have to not only consider number characters (0, 1, 2 ...9) but also characters that are spelled out ('zero', 'one', 'two', .... 'nine'). 

### Example
For the test input:
```
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
```
Each line would have the following numbers associated with them: `[219, 823, 123, 2134, 49872, 18234, 76]`. <br>
And from there the two digit numbers would be: `[29, 83, 13, 24, 42, 14, 76]`. <br>
The total, or output, of this would be `29 + 83 + 13 + 24 + 42 + 14 + 76` or `281`.

## Output
`Part Two Total:  54875`

### Test Files
* testInput2.txt
* actualInput.txt