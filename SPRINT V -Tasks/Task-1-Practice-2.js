const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

merge = (a, b, c) => { return { ...a, ...b, ...c }; }

console.log(merge(obj1, obj2, obj3));
