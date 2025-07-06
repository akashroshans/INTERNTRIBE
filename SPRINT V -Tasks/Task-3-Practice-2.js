function flattenArray(nestedArr) {
    return nestedArr.reduce((flat, current) => flat.concat(current), []);
}

console.log(flattenArray([[1, 2, 3], [4, 5], [6, 7, 8, 9]]));

