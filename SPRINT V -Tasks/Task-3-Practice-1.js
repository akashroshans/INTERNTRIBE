function findLongestString(arr) {
    return arr.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, '');
}

console.log(findLongestString(['apple', 'banana', 'cherry', 'date'])); 
