function add(x, y){
    return (1*x + 1*y);
}

function subtract(x, y){
    return (x - y);
}

function multiply(x, y){
    return (x * y);
}

function divide(x, y){
    if (y == 0){
        return "CANNOT DIVIDE BY ZERO";
    }
    return (x / y);
}

function operate(x, y, symbol){
    if (symbol == "+"){
        return add(x, y);
    } else if (symbol == "-"){
        return subtract(x, y);
    } else if (symbol == "*"){
        return multiply(x, y);
    } else if (symbol == "/"){
        return divide(x, y);
    }
    return "INVALID OPERAND";
}

let num1 = "", num2 = "", operand = "", temp = "";

const display = document.querySelector("#display");

function updateDisplay(){
    display.textContent = temp;
}

function inputNumber(input){
    if (temp == "0"){
        temp = "";
    }
    temp += input;
}

function clearAll(){
    num1 = "";
    num2 = "";
    operand = "";
    temp = "0";
}

const numbers = document.querySelectorAll(".numbers");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        // alert(number.textContent);
        inputNumber(number.textContent);
        updateDisplay();
    });
});

const operands = document.querySelectorAll(".operands");

operands.forEach((operand) => {
    operand.addEventListener("click", () => {
        alert(operand.textContent);
    });
});

const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
    // alert(clear.textContent);
    clearAll();
    updateDisplay();
});

const equal = document.querySelector("#equal");

equal.addEventListener("click", () => {
    alert(equal.textContent);
});