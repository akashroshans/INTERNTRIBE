let num=7;
console.log(`The number is ${num}`)
fact=1;
for(let i=1;i<=num;i++){
    fact*=i;
}
console.log(`The factorial is ${fact}`);
 
let arr=[2,4,6,8,10];
let sum=0;
for (let j in arr){
    sum+=j;
}
let avg=sum/4;
console.log(`The array is ${arr}`);
console.log(`The average is ${avg.toFixed(2)}`);