const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function baseValueOf(number) {
    if (number / 10 == 3)
        return ("base is 1000");
    else if (number / 10 == 2)
        return ("base is 100");
    else if (number / 10 == 1)
        return ("base is 10");
}

rl.question("enter a number", num => { console.log(baseValueOf(num)) },rl.close());

