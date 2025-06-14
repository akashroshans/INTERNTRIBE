let a = 5;
console.log(`a=${a}`);
a++;
console.log(`a=${a}`);
a--;
console.log(`a=${a}`);

let b = 9;
let c = '5';
console.log(`a = ${a} and b = ${b}`);
console.log(`a = ${a} and b = ${b} (==)`, a == b);
console.log(`a = ${a} and b = ${b} (!=)`, a != b);
console.log(`a = ${a} and b = ${b} (<=)`, a <= b);
console.log(`a = ${a} and b = ${b} (>=)`, a >= b);

console.log(`a = ${a} , b = ${b} , c = ${c} a===b`, a === b);
console.log(`a = ${a} , b = ${b} , c = ${c} a===c`, a === c);

console.log(`a = ${a} , b = ${b} , c = ${c} a!==b`, a !== b);
console.log(`a = ${a} , b = ${b} , c = ${c} a!==c`, a !== c);
