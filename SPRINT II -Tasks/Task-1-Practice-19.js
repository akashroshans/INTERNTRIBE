console.log('Square Pattern');
for(let i=0;i<5;i++){
    console.log('* '.repeat(5));
}

console.log('Triangle Pattern');
for(let i=1;i<=5;i++){
    console.log('* '.repeat(i));
}

console.log('Diamond Pattern');
for (let i=0; i < 5; i++) {
    console.log(" ".repeat(4 - i) + "* ".repeat((2 * i) + 1));
}
for (let i=4; i >= 0; i--) {
    console.log(" ".repeat(4 - i) + "* ".repeat((2 * i) + 1));
}