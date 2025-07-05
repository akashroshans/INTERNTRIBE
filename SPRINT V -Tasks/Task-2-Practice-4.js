function divideNumbers(a, b) {
    try {
        if (b === 0) throw new Error('Division by zero is not allowed.');
        return a / b;
    } catch (error) {
        return error.message;
    }
}

console.log(divideNumbers(4, 2));
console.log(divideNumbers(4, 0));
