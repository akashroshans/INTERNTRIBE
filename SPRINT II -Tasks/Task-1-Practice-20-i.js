let x = [23, 4, -6, 23, -9, 21, 3, -45, -8];
console.log('The array is ',x);
console.log('Positive numbers');
for (i of x){
    if (i>0){
        console.log(i);
    }
}
console.log('Negative numbers');
for (i of x){
    if (i<0){
        console.log(i);
    }
}