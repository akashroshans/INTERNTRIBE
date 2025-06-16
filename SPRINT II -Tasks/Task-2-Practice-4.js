let arr = [1, 0, 2, 3, 0, 4, 5, 0];

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
        for (let j = arr.length - 1; j > i + 1; j--) {
            arr[j] = arr[j - 1];
        }
        if (i + 1 < arr.length) {
            arr[i + 1] = 0;
        }
    }
}
console.log(arr);

arr2 = [5, 10, 20, 2, 0, 33, 100, 90];
let newarr = [];
for (let i = 0; i < arr2.length; i++) {
    const num = arr2[i];
    newarr.push(num);
    if (num % 5 === 0) {
        newarr.push(Math.floor(num / 2));
    }
}
console.log(newarr);