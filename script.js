import * as filefunc from "./conversion.js";

let letters = document.querySelectorAll(".operatorA");
let numbers = document.querySelectorAll(".number");
let inputs = document.querySelectorAll("input");
let mode = document.querySelectorAll(".Mode"); //Selecting the different sets of buttons
let buttons = document.querySelectorAll(".button");
console.log(buttons);
let a;
mode[1].addEventListener("click", () => {
  //When BIN button is clicked

  for (let i = 0; i <= 3; i++) {
    inputs[i].disabled = false;
    inputs[i].classList.remove("disable-text");
  }
  a = inputs[1];
  inputs[1].focus(); //Focus brought to the BIN textbox
  numbers.forEach((e) => {
    e.classList.remove("disable");
    e.disabled = false;
  });
  letters.forEach((e) => {
    e.classList.remove("disable");
    e.disabled = false;
  });
  letters.forEach((e) => {
    e.classList.add("disable"); //Disabling the Letter buttons
    e.disabled = true;
  });
  numbers.forEach((e) => {
    if (e.innerText != 0 && e.innerText != 1 && e.innerText != ".") {
      //Disabling the numbers except 0, 1 and .
      e.classList.add("disable");
      e.disabled = true;
    }
  });
  for (let i = 0; i <= 3; i++) {
    //Disabling rest of the text boxes
    if (i != 1) {
      inputs[i].disabled = true;
      inputs[i].classList.add("disable-text");
    }
  }
});

mode[0].addEventListener("click", () => {
  //When DEC button is clicked
  for (let i = 0; i <= 3; i++) {
    inputs[i].disabled = false;
    inputs[i].classList.remove("disable-text");
  }
  a = inputs[0];
  inputs[0].focus(); //Focus brought to the DEC textbox
  numbers.forEach((e) => {
    e.classList.remove("disable");
    e.disabled = false;
  });
  letters.forEach((e) => {
    e.classList.remove("disable");
    e.disabled = false;
  });
  letters.forEach((e) => {
    //Disabling the Letter buttons
    e.classList.add("disable");
    e.disabled = true;
  });
  for (let i = 0; i <= 3; i++) {
    //Disabling rest of the text boxes
    if (i != 0) {
      inputs[i].disabled = true;
      inputs[i].classList.add("disable-text");
    }
  }
});

mode[2].addEventListener("click", () => {
  //When HEX button is clicked
  for (let i = 0; i <= 3; i++) {
    inputs[i].disabled = false;
    inputs[i].classList.remove("disable-text");
  }
  a = inputs[2];
  inputs[2].focus(); //Focus brought to the HEX textbox
  numbers.forEach((e) => {
    e.classList.remove("disable");
    e.disabled = false;
  });
  letters.forEach((e) => {
    e.classList.remove("disable");
    e.disabled = false;
  });
  for (let i = 0; i <= 3; i++) {
    //Disabling rest of the text boxes
    if (i != 2) {
      inputs[i].disabled = true;
      inputs[i].classList.add("disable-text");
    }
  }
});

mode[3].addEventListener("click", () => {
  //When OCT button is clicked
  for (let i = 0; i <= 3; i++) {
    inputs[i].disabled = false;
    inputs[i].classList.remove("disable-text");
  }
  a = inputs[3];
  inputs[3].focus(); //Focus brought to the OCT textbox
  numbers.forEach((e) => {
    e.classList.remove("disable");
    e.disabled = false;
  });
  letters.forEach((e) => {
    e.classList.remove("disable");
    e.disabled = false;
  });
  letters.forEach((e) => {
    //Disabling the Letter buttons
    e.classList.add("disable");
    e.disabled = true;
  });
  numbers.forEach((e) => {
    //Disabling the 8 and 9 buttons
    if (e.innerText == 8 || e.innerText == 9) {
      e.classList.add("disable");
      e.disabled = true;
    }
  });
  for (let i = 0; i <= 3; i++) {
    //Disabling rest of the text boxes
    if (i != 3) {
      inputs[i].disabled = true;
      inputs[i].classList.add("disable-text");
    }
  }
});

let point = document.querySelector("#point"); //makes the decimal being only available once
point.disabled = false;
point.addEventListener("click", () => {
  point.disabled = true;
});

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      inputs[0].value = parseFloat(string).toString(10);
      inputs[1].value = parseFloat(string).toString(2);
      inputs[2].value = parseFloat(string).toString(16);
      inputs[3].value = parseFloat(string).toString(8);
      if (string.includes(".")) point.disabled = true;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      inputs.forEach((input) => (input.value = string));
      point.disabled = false;
    } else if (e.target.innerHTML == "DEL") {
      if (string.charAt(string.length - 1) == ".") {
        point.disabled = false;
      }
      string = string.substring(0, string.length - 1);
      inputs.forEach((input) => (input.value = string));
      if (string != "") {
        inputs[0].value = parseFloat(string).toString(10);
        inputs[1].value = parseFloat(string).toString(2);
        inputs[2].value = parseFloat(string).toString(16);
        inputs[3].value = parseFloat(string).toString(8);
      } else {
        inputs.forEach((input) => (input.value = "0"));
      }
    } else if (e.target.innerHTML == ".") {
      string += ".";
      inputs.forEach((input) => (input.value += "."));
    } else {
      string += e.target.innerHTML;
      if (a == inputs[0]) {
        // string += e.target.innerHTML;
        inputs[0].value = string;
        inputs[1].value = parseFloat(string).toString(2); //converting decimal to binary
        inputs[2].value = parseFloat(string).toString(16); //converting decimal to hexadecimal
        inputs[3].value = parseFloat(string).toString(8); //converting decimal to octal
      } else if (a == inputs[1]) {
        // string += e.target.innerHTML;
        inputs[1].value = string;
        inputs[0].value = parseFloat(string).toString(10); //converting binary to decimal
        inputs[2].value = parseFloat(string).toString(16); //converting binary to hexadecimal
        inputs[3].value = parseFloat(string).toString(8); //converting binary to octal
      } else if (a == inputs[2]) {
        // string += e.target.innerHTML;
        inputs[2].value = string;
        inputs[0].value = parseFloat(string).toString(10); //converting hexadecimal to decimal
        inputs[1].value = parseFloat(string).toString(2); //converting hexadecimal to binary
        inputs[3].value = parseFloat(string).toString(8); //converting hexadecimal to octal
      } else if (a == inputs[3]) {
        // string += e.target.innerHTML;
        inputs[3].value = string;
        inputs[0].value = parseFloat(string).toString(10); //converting octal to decimal
        inputs[1].value = parseFloat(string).toString(2); //converting octal to binary
        inputs[2].value = parseFloat(string).toString(16); //converting octal to hexadecimal
      } else {
      }
    }
  });
});
// Colourpallete functionality
document.getElementById("light").addEventListener("click", function () {
  document.body.style.background = "rgba(255, 255, 255, 0.852)";
  var buttons = document.querySelectorAll("button");
  buttons.forEach(function (button) {
    button.style.color = "black";
  });
  document.body.style.color = "#333";
  document.body.style.fontFamily = "Arial, sans-serif";
  buttons.forEach(function (button) {
    button.style.border = "none";
    document.querySelector(".welcomesection").style.color = "black";
    document.querySelector(".colorpallet").style.background =
      "rgba(52, 51, 51, 0.1)";
  });
});

document.getElementById("violet").addEventListener("click", function () {
  document.body.style.background =
    "linear-gradient(to right, rgb(15, 23, 42), rgb(88, 28, 135), rgb(15, 23, 42))";
  var buttons = document.querySelectorAll("button"); // Select all buttons
  buttons.forEach(function (button) {
    button.style.color = "#fff"; // Change color to black
  });
  document.querySelector(".welcomesection").style.color = "white";
  document.querySelector(".colorpallet").style.background =
    "rgba(255, 255, 255, 0.1)";
});

document.getElementById("dark").addEventListener("click", function () {
  document.body.style.background =
    "linear-gradient(to left top, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))";
  var buttons = document.querySelectorAll("button"); // Select all buttons
  buttons.forEach(function (button) {
    button.style.color = "#fff"; // Change color to black
  });
  document.querySelector(".welcomesection").style.color = "white";
  document.querySelector(".colorpallet").style.background =
    "rgba(255, 255, 255, 0.1)";
});
/* Changing icons */
var icons = [
  "assets/icon1.png",
  "assets/icon2.png",
  "assets/icon3.png",
  "assets/icon4.png",
  "assets/icon5.png",
];
var iconIndex = 0;

setInterval(function () {
  iconIndex = (iconIndex + 1) % icons.length; // Cycle through the icons
  document.getElementById("welcome-icon").src = icons[iconIndex];
}, 5000); // Change every 5 seconds
