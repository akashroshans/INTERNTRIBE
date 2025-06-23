
let jsonString = `{
        "name": "Akash Roshan",
        "email": "akash@gmail.com",
        "skills": ["JavaScript", "Python", "HTML"]
    }`;

let obj = JSON.parse(jsonString);

console.log("Name:", obj.name);
console.log("Email:", obj.email);
console.log("Skills:", obj.skills);
