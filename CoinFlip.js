
function HeadOrTail(number){
    if(number%2==0)
     console.log("Head");
     else
     console.log("Tail");
}
HeadOrTail(Math.floor((Math.random() * 10) + 1));