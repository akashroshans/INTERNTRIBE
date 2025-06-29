function findIndex(arr, value) {
    return {
      firstIndex: arr.indexOf(value),
      lastIndex: arr.lastIndexOf(value)
    };
  }
  
const numbers = [1, 2, 3, 2, 4, 2, 5];
console.log(findIndex(numbers, 2)); 
  