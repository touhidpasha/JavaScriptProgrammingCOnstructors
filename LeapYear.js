const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function isLeapYear( year){
if(year%4==0 && year%100!=0)
console.log(year+" is  a leap year");
else
console.log(year+" is not leap year");
}
rl.question("enter year",(year)=>{isLeapYear(year)});


