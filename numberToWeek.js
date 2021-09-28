const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function numberToWeek(number){
    if(number==1)
     return "monday";
     else if(number==2)
     return "tuesday";
     else if(number==3)
     return "wed";
     else if(number==4)
     return "thurs";
     else if(number==5)
     return "friy";
     else if(number==6)
     return "saturday";
     else if(number==7)
     return "sunday";
     
}
rl.question("enter a number",(num)=> {console.log(numberToWeek(num))});
