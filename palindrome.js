function checkPalindrome(n1){
    let temp=0;
    let n=n1;
    while(n1>0){
        n2=n1%10;
        temp=temp*10+n2;
        n1=parseInt(n1/10);

    }
    console.log(temp);
    if(n==temp)
    console.log("palindrome");
    else
    console.log("not a palindrome");
}
checkPalindrome(121);