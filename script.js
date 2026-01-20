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
    if (display.innerText == "") {
        display.innerText = "0";
    }
}

function inputNumber(val) {
    if (operator) {
        if (val == "AC") {
            num2 = "";
            display.innerText = "0";
            return;
        }
        else {
            if (val == ".") {
                if (num2.includes(".")) return;
                if (num2 == "") num2 = "0";
            }
            num2 = num2 + val;
        }
    } else {
        if (val == "AC") {
            num1 = "";
            display.innerText = "0";
            return;
        } else {
            if (val == ".") {
                if (num1.includes(".")) return;
                if (num1 == "") num1 = "0";
            }
            num1 = num1 + val;
        }
    }
    updateDisplay();
}

function numKeysHandler(e) {
    if (e.target.dataset.keyvalue == null)
        return;
    inputNumber(e.target.dataset.keyvalue);
}

function inputFunc(val) {
    if (val == "Backspace") {
        if (operator) {
            num2 = num2.slice(0, -1);
        } else {
            num1 = num1.slice(0, -1);
        }
        updateDisplay();
        return;
    }
    if (val == "Enter") {
        console.log("AUQUI")
        operate();
        return;
    }
    if (operator != "") {
        operate();
        operator = val;
        return;
    }
    if (num1 == "") num1 = "0";
    operator = val;
    display.innerText = "0";
}

function funcKeysHandler(e) {
    if (e.target.dataset.keyvalue == null)
        return;
    inputFunc(e.target.dataset.keyvalue);
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
    switch (operator) {
        case "+":
            num1 = String(parseFloat(num1) + parseFloat(num2));
            break;
        case "-":
            num1 = String(parseFloat(num1) - parseFloat(num2));
            break;
        case "*":
            num1 = String(parseFloat(num1) * parseFloat(num2));
            break;
        case "/":
            if (num2 == "0") {
                display.innerText = "Não se pode dividir por 0";
                num1 = "";
                num2 = "";
                operator = "";
                return;
            }
            num1 = String(parseFloat(num1) / parseFloat(num2));
            break;

        default:
            break;
    }
    num2 = "";
    operator = "";
    updateDisplay();
}

document.addEventListener('keydown', function (e) {
    const allowedNumKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    const allowedFuncKeys = ["+", "-", "*", "/", "Backspace", "Enter"];

    if (allowedNumKeys.includes(e.key)) {
        inputNumber(e.key);
        return;
    }


    console.log(e.key)
    if (allowedFuncKeys.includes(e.key)) {
        inputFunc(e.key);
    }

});
