LongWords=words=> {
    return words.filter(word => word.length > 5);
}
  
const words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];
console.log(LongWords(words)); 
  