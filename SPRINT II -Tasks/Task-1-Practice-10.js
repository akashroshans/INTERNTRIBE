function fact(n){
    if(n==0){
        return 1;
    }
    else{
        return n*fact(n-1);
    }
}
num=10;
console.log('The number is ',num);
console.log('Factorial is ',fact(num));