let num1 = "";
let num2 = "";
let result = 0;
let operator = "";
let displayValue = "0"

const numKeys = document.querySelector(".numKeys");
console.log(numKeys);

const funcKeys = document.querySelector(".funcKeys");
console.log(funcKeys);

const display = document.querySelector(".display");
display.innerText = "0";


numKeys.addEventListener("click", numKeysHandler);
funcKeys.addEventListener("click", funcKeysHandler);

function updateDisplay() {
    if (operator) {
        display.innerText = num2;
    } else {
        display.innerText = num1;
    }
}

function numKeysHandler(e) {
    if (operator) {
        if (e.target.dataset.keyvalue == "AC") {
            num2 = "";
            display.innerText = "0";
            return;
        }
        else {
            if (e.target.dataset.keyvalue == ".") {
                if (num2.includes(".")) return;
                if (num2 == "") num2 = "0";
            }
            num2 = num2 + e.target.dataset.keyvalue;
        }
    } else {
        if (e.target.dataset.keyvalue == "AC") {
            num1 = "";
            display.innerText = "0";
            return;
        } else {
            if (e.target.dataset.keyvalue == ".") {
                if (num1.includes(".")) return;
                if (num1 == "") num1 = "0";
            }
            num1 = num1 + e.target.dataset.keyvalue;
        }
    }
    updateDisplay();
}

function funcKeysHandler(e) {
    if (e.target.dataset.keyvalue == "=") {
        console.log("AUQUI")
        operate();
        return;
    }
    operator = e.target.dataset.keyvalue;
    display.innerText = "0";
}

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};


function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate() {
    console.log(operator)
    switch (operator) {
        case "+":
            num1 = parseFloat(num1) + parseFloat(num2);
            break;
        case "-":
            num1 = parseFloat(num1) - parseFloat(num2);
            break;
        case "*":
            num1 = parseFloat(num1) * parseFloat(num2);
            break;
        case "/":
            num1 = parseFloat(num1) / parseFloat(num2);
            break;

        default:
            break;
    }
    num2 = "";
    operator = "";
    updateDisplay();
}
