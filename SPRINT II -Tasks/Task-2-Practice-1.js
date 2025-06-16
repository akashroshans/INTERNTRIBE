let arr1=[5, 2, -7, 3, -2, -1];
console.log('The array is ',arr1)
console.log
let b=[];
for(let i of arr1){
    if(i<0){
        b.push(i);
    }
}
console.log('The  o/p 1 array is ',b)

let arr2= [5, 10, 15, 20, 22, 23] ;
for(let i in arr2){
    if(arr2[i]%2==1){
        arr2[i]=0;
    }
}
console.log('The o/p 2 array is ',arr2)