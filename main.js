const operatorSymbol = document.querySelector('.operator');
const previousInput = document.querySelector('.previousInput');
const equal = document.querySelector('.equal');
const currentInput = document.querySelector('.currentInput');
const addition = document.querySelector('.add');
const substraction = document.querySelector('.substr');
const multiplication = document.querySelector('.multi');
const division = document.querySelector('.division');
const clear = document.querySelector('.clear');
const equals = document.querySelector('body');

clear.onclick = () => {
    if (equal.textContent == '=') {
        operatorSymbol.textContent = '';
        previousInput.textContent = '';
        equal.textContent = '';
        currentInput.textContent = '0';
    }
    else if (equal.textContent == '') {
        if (operatorSymbol.textContent != '') {
            if (currentInput.textContent == '0') {
                operatorSymbol.textContent = '';
                currentInput.textContent = previousInput.textContent;
                previousInput.textContent = '';
            }
            else if (currentInput.textContent != '0') {
                currentInput.textContent = currentInput.textContent.slice(0, -1);
            }
        }

        else if (operatorSymbol.textContent == '') {
            currentInput.textContent = currentInput.textContent.slice(0, -1);
        }
    }
};
equals.onkeyup = function (event) {
    if (event.keyCode === 13) {
        if (operatorSymbol.textContent == '+') {
            currentInput.textContent = plus(previousInput.textContent, currentInput.textContent);
        }
        else if (operatorSymbol.textContent == '-') {
            currentInput.textContent = minus(previousInput.textContent, currentInput.textContent);
        }
        else if (operatorSymbol.textContent == '*') {
            currentInput.textContent = into(previousInput.textContent, currentInput.textContent);
        }
        else if (operatorSymbol.textContent == '÷') {
            currentInput.textContent = by(previousInput.textContent, currentInput.textContent);
        }
        equal.textContent = '=';
        previousInput.textContent = currentInput.textContent;
    }
}
/* document.addEventListener(
    "keyup",
    (event) => {
        const keyName = event.key;
        switch (keyName) {
            case '0':
                currentInput.innerHTML += '0';
                break;
            case '1':
                currentInput.innerHTML += '1';
                break;
            case '2':
                currentInput.innerHTML += '2';
                break;
            case '3':
                currentInput.innerHTML += '3';
                break;
            case '4':
                currentInput.innerHTML += '4';
                break;
            case '5':
                currentInput.innerHTML += '5';
                break;
            case '6':
                currentInput.innerHTML += '6';
                break;
            case '7':
                currentInput.innerHTML += '7';
                break;
            case '8':
                currentInput.innerHTML += '8';
                break;
            case '9':
                currentInput.innerHTML += '9';
                break;
        }
    }
); */
document.addEventListener('keyup', event => {
    if (event.key == '0' || event.key == '1'
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5'
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9') {
        currentInput.textContent += event.key;
    }
});
addition.onclick = () => {
    if (equal.textContent == '=') {
        equal.textContent = '';
        previousInput.textContent = currentInput.textContent;
        currentInput.textContent = '0';
        operatorSymbol.textContent = '+';
    }
    else {
        if (previousInput.textContent == '') {
            previousInput.textContent = currentInput.textContent;
            operatorSymbol.textContent = '+';
            currentInput.textContent = '0';
        }
        else {
            if (operatorSymbol.textContent == '-') {
                previousInput.textContent = minus(previousInput.textContent, currentInput.textContent);
                currentInput.textContent = '0';
                operatorSymbol.textContent = '+';
            }
            else if (operatorSymbol.textContent == '*') {
                previousInput.textContent = into(previousInput.textContent, currentInput.textContent);
                currentInput.textContent = '0';
                operatorSymbol.textContent = '+';
            }
            else if (operatorSymbol.textContent == '÷') {
                previousInput.textContent = by(previousInput.textContent, currentInput.textContent);
                currentInput.textContent = '0';
                operatorSymbol.textContent = '+';
            }
            else {
                previousInput.textContent = plus(previousInput.textContent, currentInput.textContent);
                currentInput.textContent = '0';
                operatorSymbol.textContent = '+';
            }

        }
    }
};
substraction.onclick = () => {
    if (equal.textContent == '=') {
        equal.textContent = '';
        previousInput.textContent = currentInput.textContent;
        currentInput.textContent = '0';
        operatorSymbol.textContent = '-';
    }
    else {
        if (previousInput.textContent == '') {
            previousInput.textContent = currentInput.textContent;
            operatorSymbol.textContent = '-';
            currentInput.textContent = '0';
        }
        else {
            if (operatorSymbol.textContent == '+') {
                previousInput.textContent = plus(previousInput.textContent, currentInput.textContent);
                currentInput.textContent = '0';
                operatorSymbol.textContent = '-';
            }
            else if (operatorSymbol.textContent == '*') {
                previousInput.textContent = into(previousInput.textContent, currentInput.textContent);
                currentInput.textContent = '0';
                operatorSymbol.textContent = '-';
            }
            else if (operatorSymbol.textContent == '÷') {
                previousInput.textContent = by(previousInput.textContent, currentInput.textContent);
                currentInput.textContent = '0';
                operatorSymbol.textContent = '-';
            }
            else {
                previousInput.textContent = minus(previousInput.textContent, currentInput.textContent);
                currentInput.textContent = '0';
                operatorSymbol.textContent = '-';
            }
        }
    }
};
multiplication.onclick = () => {
    if (equal.textContent == '=') {
        equal.textContent = '';
        previousInput.textContent = currentInput.textContent;
        currentInput.textContent = '0';
        operatorSymbol.textContent = '*';
    }
    else {
        if (previousInput.textContent == '') {
            previousInput.textContent = currentInput.textContent;
            operatorSymbol.textContent = '*';
            currentInput.textContent = '0';
        }
        else {
            if (operatorSymbol.textContent == '+') {
                previousInput.textContent = plus(previousInput.textContent, currentInput.textContent);
                currentInput.textContent = '0';
                operatorSymbol.textContent = '*';
            }
            else if (operatorSymbol.textContent == '-') {
                previousInput.textContent = minus(previousInput.textContent, currentInput.textContent);
                currentInput.textContent = '0';
                operatorSymbol.textContent = '*';
            }
            else if (operatorSymbol.textContent == '÷') {
                previousInput.textContent = by(previousInput.textContent, currentInput.textContent);
                currentInput.textContent = '0';
                operatorSymbol.textContent = '*';
            }
            else {
                previousInput.textContent = plus(previousInput.textContent, currentInput.textContent);
                currentInput.textContent = '0';
                operatorSymbol.textContent = '*';
            }
        }
    }
};
division.onclick = () => {
    if (equal.textContent == '=') {
        equal.textContent = '';
        previousInput.textContent = currentInput.textContent;
        currentInput.textContent = '0';
        operatorSymbol.textContent = '÷';
    }
    else {
        if (previousInput.textContent == '') {
            previousInput.textContent = currentInput.textContent;
            operatorSymbol.textContent = '÷';
            currentInput.textContent = '0';
        }
        else {
            if (operatorSymbol.textContent == '+') {
                previousInput.textContent = plus(previousInput.textContent, currentInput.textContent);
                currentInput.textContent = '0';
                operatorSymbol.textContent = '÷';
            }
            else if (operatorSymbol.textContent == '-') {
                previousInput.textContent = minus(previousInput.textContent, currentInput.textContent);
                currentInput.textContent = '0';
                operatorSymbol.textContent = '÷';
            }
            else if (operatorSymbol.textContent == '*') {
                previousInput.textContent = into(previousInput.textContent, currentInput.textContent);
                currentInput.textContent = '0';
                operatorSymbol.textContent = '÷';
            }
            else {
                previousInput.textContent = by(previousInput.textContent, currentInput.textContent);
                currentInput.textContent = '0';
                operatorSymbol.textContent = '÷';
            }
        }
    }
};


function plus(a, b) {
    let sum = Number(a) + Number(b);
    return String(sum);

};
function minus(a, b) {

    let left = Number(a) - Number(b);
    return String(left);

};
function into(a, b) {

    let multiple = Number(a) * Number(b);
    return String(multiple);

};
function by(a, b) {

    let reduced = Number(a) / Number(b);
    return String(reduced);

};