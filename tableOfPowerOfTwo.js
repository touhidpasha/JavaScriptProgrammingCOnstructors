
function findPowerOftwo(num){
let temp=0;
//console.log(num);
for(i=0;temp<num;i++){
temp=Math.pow(2,i);
console.log(temp);
}
}
const args=process.argv;
findPowerOftwo(args[2]);