const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function baseValueOf(number) {
    let temp = number / 10;
    switch (temp) {


        case (3):
            console.log("base is 1000");
            break;
        case (2):
            console.log("base is 100");
            break;
        case (1):
            console.log("base is 10");
            break;
        default:
            console.log("range is big");
    }
}

rl.question("enter a number", num => { (baseValueOf(num)) }, rl.close());

