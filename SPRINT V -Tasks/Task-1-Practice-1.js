function squareNormal(a) {
    let b = [];
    for (let i of a) {
        b.push(i * i);
    }
    return b;
}
squareArrow = (a) => {
    let b = [];
    for (let i of a) {
        b.push(i * i);
    }
    return b;
}

let a = [1, 2, 3, 4, 5];

console.log('Array is ', a);
console.log('Output array is ', squareNormal(a));
console.log('Output array is ', squareArrow(a));
