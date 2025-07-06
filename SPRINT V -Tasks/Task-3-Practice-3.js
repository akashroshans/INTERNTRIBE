function countOccurrences(words) {
    return words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});
}


console.log(countOccurrences(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']));

