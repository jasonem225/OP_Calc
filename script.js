function add(num1, num2){
    return (num1 + num2);
}

function subtract(num1, num2){
    return (num1 - num2);
}

function multiply(num1, num2){
    return (num1 * num2);
}

function divide(num1, num2){
    if (num2 == 0){
        return "ERROR";
    }
    return (num1 / num2);
}

function operate(num1, num2, operand){
    if (operand == "+"){
        return add(num1, num2);
    } else if (operand == "-"){
        return subtract(num1, num2);
    } else if (operand == "*"){
        return multiply(num1, num2);
    } else if (operand == "/"){
        return divide(num1, num2);
    }
    return "ERROR";
}

let num1 = "", num2 = "", operand = "", temp = "";

const numbers = document.querySelectorAll(".numbers");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        alert(number.textContent);
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
    alert(clear.textContent);
});

const equal = document.querySelector("#equal");

equal.addEventListener("click", () => {
    alert(equal.textContent);
});