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

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.textContent);
    });
});