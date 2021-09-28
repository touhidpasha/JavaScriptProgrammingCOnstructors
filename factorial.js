
function factorial(num) {
    let t = 1;
    //console.log(num);
    for (i = 1; i <= num; i++) {
        t = t * i;

    }
    console.log(t);
}
const args = process.argv;
factorial(args[2]);