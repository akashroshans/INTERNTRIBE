const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operatorDisplay = document.getElementById("operate");
const resultDisplay = document.getElementById("res");

document.getElementById("add").onclick = () => setOperator("+");
document.getElementById("sub").onclick = () => setOperator("-");
document.getElementById("mul").onclick = () => setOperator("*");
document.getElementById("divide").onclick = () => setOperator("/");
document.getElementById("zero").onclick = () => appendToActiveInput("0");
document.getElementById("one").onclick = () => appendToActiveInput("1");
document.getElementById("two").onclick = () => appendToActiveInput("2");
document.getElementById("three").onclick = () => appendToActiveInput("3");
document.getElementById("four").onclick = () => appendToActiveInput("4");
document.getElementById("five").onclick = () => appendToActiveInput("5");
document.getElementById("six").onclick = () => appendToActiveInput("6");
document.getElementById("seven").onclick = () => appendToActiveInput("7");
document.getElementById("eight").onclick = () => appendToActiveInput("8");
document.getElementById("nine").onclick = () => appendToActiveInput("9");
document.getElementById("point").onclick = () => appendToActiveInput(".");

let currentOperator = "";
let activeInput = num1Input; 

function setOperator(op) {
    currentOperator = op;
    operatorDisplay.textContent = op;
    activeInput = num2Input; 
}

function appendToActiveInput(value) {
    activeInput.value += value;
}

document.getElementById("clear").onclick = () => {
    num1Input.value = "";
    num2Input.value = "";
    operatorDisplay.textContent = "";
    resultDisplay.textContent = "";
    currentOperator = "";
    activeInput = num1Input;
};

function Equals() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    let result;
    switch (currentOperator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num1 / num2; break;
        default: result = "Error";
    }

    resultDisplay.textContent = result;
}
