import * as filefunc from "./conversion_updated.js";


let letters = document.querySelectorAll('.operatorA');
let numbers = document.querySelectorAll('.number');
let inputs = document.querySelectorAll('input');
let mode = document.querySelectorAll('.Mode');               //Selecting the different sets of buttons
let buttons = document.querySelectorAll('.button');
console.log(buttons);
let a;
mode[1].addEventListener('click', () => {              //When BIN button is clicked

    for (let i = 0; i <= 3; i++) {
        inputs[i].disabled = false;
        inputs[i].classList.remove('disable-text');
    }
    a = inputs[1];
    inputs[1].focus();              //Focus brought to the BIN textbox
    numbers.forEach((e) => {
        e.classList.remove('disable');
        e.disabled = false;
    })
    letters.forEach((e) => {
        e.classList.remove('disable');
        e.disabled = false;
    })
    letters.forEach((e) => {
        e.classList.add('disable');         //Disabling the Letter buttons
        e.disabled = true;
    })
    numbers.forEach((e) => {
        if (e.innerText != 0 && e.innerText != 1 && e.innerText != ".") {             //Disabling the numbers except 0, 1 and .
            e.classList.add('disable');
            e.disabled = true;
        }
    })
    for (let i = 0; i <= 3; i++) {             //Disabling rest of the text boxes
        if (i != 1) {
            inputs[i].disabled = true;
            inputs[i].classList.add('disable-text');
        }
    }
});

mode[0].addEventListener('click', () => {             //When DEC button is clicked
    for (let i = 0; i <= 3; i++) {
        inputs[i].disabled = false;
        inputs[i].classList.remove('disable-text');
    }
    a = inputs[0];
    inputs[0].focus();              //Focus brought to the DEC textbox
    numbers.forEach((e) => {
        e.classList.remove('disable');
        e.disabled = false;
    })
    letters.forEach((e) => {
        e.classList.remove('disable');
        e.disabled = false;
    })
    letters.forEach((e) => {              //Disabling the Letter buttons
        e.classList.add('disable');
        e.disabled = true;
    })
    for (let i = 0; i <= 3; i++) {             //Disabling rest of the text boxes
        if (i != 0) {
            inputs[i].disabled = true;
            inputs[i].classList.add('disable-text');
        }
    }
});

mode[2].addEventListener('click', () => {             //When HEX button is clicked
    for (let i = 0; i <= 3; i++) {
        inputs[i].disabled = false;
        inputs[i].classList.remove('disable-text');
    }
    a = inputs[2];
    inputs[2].focus();              //Focus brought to the HEX textbox
    numbers.forEach((e) => {
        e.classList.remove('disable');
        e.disabled = false;
    })
    letters.forEach((e) => {
        e.classList.remove('disable');
        e.disabled = false;
    })
    for (let i = 0; i <= 3; i++) {             //Disabling rest of the text boxes
        if (i != 2) {
            inputs[i].disabled = true;
            inputs[i].classList.add('disable-text');
        }
    }
});

mode[3].addEventListener('click', () => {             //When OCT button is clicked
    for (let i = 0; i <= 3; i++) {
        inputs[i].disabled = false;
        inputs[i].classList.remove('disable-text');
    }
    a = inputs[3];
    inputs[3].focus();              //Focus brought to the OCT textbox
    numbers.forEach((e) => {
        e.classList.remove('disable');
        e.disabled = false;
    })
    letters.forEach((e) => {
        e.classList.remove('disable');
        e.disabled = false;
    })
    letters.forEach((e) => {              //Disabling the Letter buttons
        e.classList.add('disable');
        e.disabled = true;
    })
    numbers.forEach((e) => {              //Disabling the 8 and 9 buttons
        if (e.innerText == 8 || e.innerText == 9) {
            e.classList.add('disable');
            e.disabled = true;
        }
    })
    for (let i = 0; i <= 3; i++) {             //Disabling rest of the text boxes
        if (i != 3) {
            inputs[i].disabled = true;
            inputs[i].classList.add('disable-text');
        }
    }
});

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            inputs.forEach(input => input.value = string);
        }

        else if (e.target.innerHTML == 'AC') {
            string = "";
            inputs.forEach(input => input.value = string);
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            inputs.forEach(input => input.value = string);
        }
        else{
            if (["+", "-", "*", "/"].includes(e.target.innerHTML)) { // if the input is an operator
                string += e.target.innerHTML;
                inputs.forEach(input => {
                    input.value = string; // update all inputs with the operator
                });
            }
            else if(a == inputs[0]){
                string += e.target.innerHTML;
                let operands = string.split(/[\+\-\*\/]/); // get all operands
                operands.forEach(operand => {
                    let decimalValue = isNaN(parseInt(operand)) ? operand.charCodeAt(operand.length - 1) : parseInt(operand);
                    if (/^[0-9]+$/.test(operand)) { // if the operand is a number
                        string = string.split(operand).join(decimalValue.toString());
                        inputs[0].value = string;
                        inputs[1].value = string.split(decimalValue.toString()).join(filefunc.dectobin(decimalValue));       //converting decimal to binary
                        inputs[2].value = string.split(decimalValue.toString()).join(filefunc.dectohex(decimalValue));       //converting decimal to hexadecimal
                        inputs[3].value = string.split(decimalValue.toString()).join(filefunc.dectooct(decimalValue));       //converting decimal to octal
                    }
                });
            }
            else if (a == inputs[1]) { // binary input
                let binaryValue = e.target.innerHTML;
                string += binaryValue;
                let operands = string.split(/[\+\-\*\/]/); // get all operands
                let lastOperand = operands[operands.length - 1]; // get the last operand
                let decimalValue = isNaN(parseInt(lastOperand, 2)) ? lastOperand.charCodeAt(lastOperand.length - 1) : parseInt(lastOperand, 2);
                if (/^[01]+$/.test(lastOperand)) { // if the operand is a binary number
                    inputs[1].value = string;
                    inputs[0].value = string.split(lastOperand).join(decimalValue.toString()); // convert to decimal
                    inputs[2].value = string.split(lastOperand).join(decimalValue.toString(16)); // convert to hexadecimal
                    inputs[3].value = string.split(lastOperand).join(decimalValue.toString(8)); // convert to octal
                }
            }
            else if (a == inputs[2]) { // hexadecimal input
                let hexValue = e.target.innerHTML;
                string += hexValue;
                let decimalValue = isNaN(parseInt(hexValue, 16)) ? hexValue.charCodeAt(hexValue.length - 1) : parseInt(hexValue, 16);
                if (/^[0-9A-Fa-f]+$/.test(hexValue)) { // if the operand is a hexadecimal number
                    inputs[2].value = string;
                    inputs[0].value = string.split(hexValue).join(decimalValue.toString()); // convert to decimal
                    inputs[1].value = string.split(hexValue).join(decimalValue.toString(2)); // convert to binary
                    inputs[3].value = string.split(hexValue).join(decimalValue.toString(8)); // convert to octal
                }
            } 
            else if (a == inputs[3]) { // octal input
                let octValue = e.target.innerHTML;
                string += octValue;
                let decimalValue = isNaN(parseInt(octValue, 8)) ? octValue.charCodeAt(octValue.length - 1) : parseInt(octValue, 8);
                if (/^[0-7]+$/.test(octValue)) { // if the operand is an octal number
                    inputs[3].value = string;
                    inputs[0].value = string.split(octValue).join(decimalValue.toString()); // convert to decimal
                    inputs[1].value = string.split(octValue).join(decimalValue.toString(2)); // convert to binary
                    inputs[2].value = string.split(octValue).join(decimalValue.toString(16)); // convert to hexadecimal
                }
            }
            else{
                ;
            }
        }
    })
});
// Colourpallete functionality
document.getElementById('light').addEventListener('click', function () {
    document.body.style.background = 'rgba(255, 255, 255, 0.852)';
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function (button) {
        button.style.color = 'black';
    });
    document.body.style.color = '#333';
    document.body.style.fontFamily = 'Arial, sans-serif';
    buttons.forEach(function (button) {

        button.style.border = 'none';
        document.querySelector('.welcomesection').style.color = 'black';
        document.querySelector('.colorpallet').style.background = 'rgba(52, 51, 51, 0.1)';
    });
});

document.getElementById('violet').addEventListener('click', function () {
    document.body.style.background = 'linear-gradient(to right, rgb(15, 23, 42), rgb(88, 28, 135), rgb(15, 23, 42))';
    var buttons = document.querySelectorAll('button'); // Select all buttons
    buttons.forEach(function (button) {
        button.style.color = '#fff'; // Change color to black
    });
    document.querySelector('.welcomesection').style.color = 'white';
    document.querySelector('.colorpallet').style.background = 'rgba(255, 255, 255, 0.1)';
});



document.getElementById('dark').addEventListener('click', function () {
    document.body.style.background = 'linear-gradient(to left top, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))';
    var buttons = document.querySelectorAll('button'); // Select all buttons
    buttons.forEach(function (button) {
        button.style.color = '#fff'; // Change color to black
    });
    document.querySelector('.welcomesection').style.color = 'white';
    document.querySelector('.colorpallet').style.background = 'rgba(255, 255, 255, 0.1)';
});
/* Changing icons */
var icons = ['assets/icon1.png', 'assets/icon2.png', 'assets/icon3.png', 'assets/icon4.png', 'assets/icon5.png'];
var iconIndex = 0;

    setInterval(function() {
         iconIndex = (iconIndex + 1) % icons.length; // Cycle through the icons
         document.getElementById('welcome-icon').src = icons[iconIndex];}, 5000); // Change every 5 seconds
/*calculation in octal*/
// Define the functions for octal arithmetic operations
function isOctal(str) {
    return /^[0-7]+$/.test(str);
}

function isHexadecimal(str) {
    return /^[0-9A-Fa-f]+$/.test(str);
}
function isBinary(str) {
    return /^[01]+$/.test(str);
}
function isDecimal(str) {
    return /^[0-9]+$/.test(str);
}


let calculationString = "";
let buttonArray = Array.from(buttons);

//Calculation In Different bases
buttonArray.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            // Split the calculationString into operands and operator
            let parts = calculationString.split(/(\+|\-|\*|\/)/);
            let a, b, operator = parts[1];

            // Check if the operands are in binary, octal, decimal, or hexadecimal format
            if (isBinary(parts[0]) && isBinary(parts[2])) {
                a = parseInt(parts[0], 2);
                b = parseInt(parts[2], 2);
            } else if (isOctal(parts[0]) && isOctal(parts[2])) {
                a = parseInt(parts[0], 8);
                b = parseInt(parts[2], 8);
            } else if (isDecimal(parts[0]) && isDecimal(parts[2])) {
                a = parseInt(parts[0], 10);
                b = parseInt(parts[2], 10);
            } else if (isHexadecimal(parts[0]) && isHexadecimal(parts[2])) {
                a = parseInt(parts[0], 16);
                b = parseInt(parts[2], 16);
            } else {
                // If operands are not in binary, octal, decimal, or hexadecimal format, parse them as decimal numbers
                a = parseInt(parts[0]);
                b = parseInt(parts[2]);
            }

            // Perform the corresponding operation
            if (operator == '+') {
                calculationString = (isBinary(parts[0]) && isBinary(parts[2])) ? (a + b).toString(2) : 
                                    (isOctal(parts[0]) && isOctal(parts[2])) ? (a + b).toString(8) : 
                                    (isDecimal(parts[0]) && isDecimal(parts[2])) ? (a + b).toString(10) : 
                                    (isHexadecimal(parts[0]) && isHexadecimal(parts[2])) ? (a + b).toString(16) : 
                                    (a + b).toString(10);
            } else if (operator == '-') {
                calculationString = (isBinary(parts[0]) && isBinary(parts[2])) ? (a - b).toString(2) : 
                                    (isOctal(parts[0]) && isOctal(parts[2])) ? (a - b).toString(8) : 
                                    (isDecimal(parts[0]) && isDecimal(parts[2])) ? (a - b).toString(10) : 
                                    (isHexadecimal(parts[0]) && isHexadecimal(parts[2])) ? (a - b).toString(16) : 
                                    (a - b).toString(10);
            } else if (operator == '*') {
                calculationString = (isBinary(parts[0]) && isBinary(parts[2])) ? (a * b).toString(2) : 
                                    (isOctal(parts[0]) && isOctal(parts[2])) ? (a * b).toString(8) : 
                                    (isDecimal(parts[0]) && isDecimal(parts[2])) ? (a * b).toString(10) : 
                                    (isHexadecimal(parts[0]) && isHexadecimal(parts[2])) ? (a * b).toString(16) : 
                                    (a * b).toString(10);
            }else if (operator == '/') {
                if (b != 0) {
                    calculationString = (isBinary(parts[0]) && isBinary(parts[2])) ? (a / b).toString(2) : 
                                        (isOctal(parts[0]) && isOctal(parts[2])) ? (a / b).toString(8) : 
                                        (isDecimal(parts[0]) && isDecimal(parts[2])) ? (a / b).toString(10) : 
                                        (isHexadecimal(parts[0]) && isHexadecimal(parts[2])) ? (a / b).toString(16) : 
                                        (a / b).toString(10);
                } else {
                    calculationString = "Error: Division by zero";
                }
            }

           // Convert the result to every base and display it in the corresponding input boxes
                    let result = parseInt(calculationString, 10);
                    inputs[0].value = result.toString(10); // Decimal
                    inputs[1].value = result.toString(2); // Binary
                    inputs[2].value = result.toString(16); // Hexadecimal
                    inputs[3].value = result.toString(8); // Octal
        }
        else if(e.target.innerHTML == 'AC'){
            calculationString = "";
            inputs.forEach(input => input.value = calculationString);
        }
        else if(e.target.innerHTML == 'DEL'){
            calculationString = calculationString.substring(0, calculationString.length-1);
        }
        else if(e.target.innerHTML == 'OCT'){
            isOctal = true; 
            isBinary=false;// Toggle octal mode when the OCT button is clicked
        }
        else if(e.target.innerHTML == 'BIN'){
            isBinary = true;
            isOctal=false; // Toggle binary mode when the BIN button is clicked
        }
        else {
            calculationString += e.target.innerHTML;
        }
    });
});


let m;
mode.forEach((modes) => {
    modes.addEventListener('click', (currentMode) => {
        if(m!=currentMode.target){
            // changing mode
            m = currentMode.target
            string = "";
            inputs.forEach(input => input.value = string);
        }
        else{
            // clicking on same mode
            // console.log(2)
        }
    })
})      