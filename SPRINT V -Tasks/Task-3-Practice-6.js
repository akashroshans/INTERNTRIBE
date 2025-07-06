function findFirstEven(numbers) {
    return numbers.find(num => num % 2 === 0);
}


console.log(findFirstEven([1, 3, 7, 10, 2]));
