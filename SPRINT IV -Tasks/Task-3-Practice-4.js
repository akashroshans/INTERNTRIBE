const jsonString = `
[
  { "name": "Akash", "age": 22, "city": "Chennai" },
  { "name": "Abinesh", "age": 25, "city": "Mumbai" },
  { "name": "John", "age": 30, "city": "Delhi" }
]
`;

const users = JSON.parse(jsonString);

for (let i = 0; i < users.length; i++) {
    console.log("Name:", users[i].name);
    console.log("Age:", users[i].age);
    console.log("City:", users[i].city);
  }