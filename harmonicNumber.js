
function findNthHarmonic(num){
    let s="";
    //console.log(num);
    for(i=0;i<num;i++){
    //temp=Math.pow(2,i);
    s=s+"(1/"+i+")+";
    
    }
    console.log(s);
    }
    const args=process.argv;
    findNthHarmonic(args[2]);