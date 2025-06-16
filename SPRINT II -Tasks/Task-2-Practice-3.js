console.log('The sum of the current number and the previous number');
for(let i=1;i<=10;i++){
    console.log(i+i-1);
}
console.log('Count how many even and odd numbers');
let even=0;
let odd=0;
for(i=10;i<=55;i++){
    if(i%2==0){
        even++;
    }
    else{
        odd++;
    }
}
console.log('The no of odd numbers is ',odd);
console.log('The no of even numbers is ',even);

