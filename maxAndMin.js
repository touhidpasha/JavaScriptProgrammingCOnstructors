// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

// let arr=[];
function max(n1, n2, n3) {
    if (n1 >= n2 && n1 >= n3)
        console.log("the largest number." + n1);

    else if (n2 >= n1 && n2 >= n3)
        console.log("largest number." + n2);

    else
        console.log("largest number." + n3);
}
function min(n1, n2, n3) {
    if (n1 <= n2 && n1 <= n3)
        console.log(" samllest number." + n1);

    else if (n2 <= n1 && n2 <= n3)
        console.log(" the smallest number." + n2);

    else
        console.log("the smallest number." + n3);
}
// function readValue(){
// for(j=0;j<3;j++)
// rl.question(" ",i=>{arr.append(i)});
// }
// readValue();
// max(arr[0],arr[1],arr[2]);
// min(arr[0],arr[1],arr[2]);
const args = process.argv;
max(args[2],args[3],args[4]);
min(args[2],args[3],args[4]);