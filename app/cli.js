// app/cli.js
var arg = require('commander')
var calc = require('./calc')

var numbersToAdd = [
    3,
    4,
    10,
    2
]

arg
    .option('-t, --text', 'text output')
    .option('-f, --fck', 'text output')
    .parse(process.argv);

var result = calc.sum(numbersToAdd)

if (arg.text) {
    console.log('The result is: nineteen')
} else {
    console.log('The result is:', result)
}