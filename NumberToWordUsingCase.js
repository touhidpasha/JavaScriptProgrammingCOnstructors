const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function numberToWord(number){
    switch(number){
    case(1):
     return "one";
     case(2):
     return "two";
     case(3):
     return "three";
     case(4):
     return "four";
     case(5):
     return "five";
     case(6):
     return "six";
     case(7):
     return "seven";
     case(8):
     return "eight";
     case(9):
     return "nine";
    }
}
rl.question("enter year",(num)=> {console.log(numberToWord(num))});
