function logDetails(person) {
    const { name, age, city } = person;
    console.log(name);
    console.log(age);
    console.log(city);
}

logDetails({ name: 'Alice', age: 25, city: 'New York' });
