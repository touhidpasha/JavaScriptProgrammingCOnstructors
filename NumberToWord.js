const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function numberToWord(number){
    if(number==1)
     return "one";
     else if(number==2)
     return "two";
     else if(number==3)
     return "three";
     else if(number==4)
     return "four";
     else if(number==5)
     return "five";
     else if(number==6)
     return "six";
     else if(number==7)
     return "seven";
     else if(number==8)
     return "eight";
     else if(number==9)
     return "nine";
}
rl.question("enter year",(num)=> {console.log(numberToWord(num))});
