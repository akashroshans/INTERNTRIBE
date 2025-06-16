let password = 'helloA2sd';

if (password.length < 8) {
    console.log('Weak Password');
}
else if (!/[a-z]/.test(password)) {
    console.log('Weak Password');
}
else if (!/[A-Z]/.test(password)) {
    console.log('Weak Password');
}
else if (!/[0-9]/.test(password)) {
    console.log('Weak Password');
}
else{
console.log('Strong Password');
}
