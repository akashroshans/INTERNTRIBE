function groupBy(arr, property) {
    return arr.reduce((grouped, obj) => {
        const key = obj[property];
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(obj);
        return grouped;
    }, {});
}

const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 21 },
    { name: 'David', age: 25 },
    { name: 'Eve', age: 22 }
];
console.log(groupBy(people, 'age'));
