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
    updateDisplay();
}

function clearAll(){
    num1 = "";
    num2 = "";
    operand = "";
}

function inputClear(){
    clearAll();
    temp = "0";
    updateDisplay();
}

function solve(){
    num2 = temp;
    temp = operate(num1, num2, operand);
    clearAll();
    num1 = temp;
    updateDisplay();
    temp = "";
}

function inputEqual(){
    if (operand != ""){
        solve();
    }
}

function inputOperand(op){
    if (operand != ""){
        if (temp != ""){
            solve();
        }
    } else {
        if (temp != ""){
            num1 = temp;
            temp = "";
        } else {
            if (num1 == ""){
                num1 = 0;
            }
        }
    }
    operand = op;
}

const numbers = document.querySelectorAll(".numbers");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        inputNumber(number.textContent);
    });
});

const operands = document.querySelectorAll(".operands");

operands.forEach((op) => {
    op.addEventListener("click", () => {
        inputOperand(op.textContent);
    });
});

const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
    inputClear();
});

const equal = document.querySelector("#equal");

equal.addEventListener("click", () => {
    inputEqual();
});