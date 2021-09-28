
function findPowerOftwo(num) {
    let temp = 0;
    //console.log(num);
    i = 0;
    while (temp < num) {
        i++;
        temp = Math.pow(2, i);
        console.log(temp);

    }
}
const args = process.argv;
findPowerOftwo(args[2]);