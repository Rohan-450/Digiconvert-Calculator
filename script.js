let inputs = document.querySelectorAll('input');
let buttons = document.querySelectorAll('button');


let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            inputs.forEach(input => input.value = string);
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            inputs.forEach(input => input.value = string);
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            inputs.forEach(input => input.value = string);
        }
        else{
            string += e.target.innerHTML;
            inputs.forEach(input => input.value = string);
        }
    })
});
// Colourpallete functionality
document.getElementById('light').addEventListener('click', function() {
    document.body.style.background = 'rgba(255, 255, 255, 0.852)';
    var buttons = document.querySelectorAll('button'); 
    buttons.forEach(function(button) {
        button.style.color = 'black'; 
    });
    document.body.style.color = '#333'; 
    document.body.style.fontFamily = 'Arial, sans-serif'; 
    buttons.forEach(function(button) {
        
        button.style.border = 'none'; 
        document.querySelector('.welcomesection').style.color = 'black'; 
        document.querySelector('.colorpallet').style.background = 'rgba(52, 51, 51, 0.1)';
    });
});

document.getElementById('violet').addEventListener('click', function() {
    document.body.style.background = 'linear-gradient(to right, rgb(15, 23, 42), rgb(88, 28, 135), rgb(15, 23, 42))';
    var buttons = document.querySelectorAll('button'); // Select all buttons
    buttons.forEach(function(button) {
        button.style.color = '#fff'; // Change color to black
    });
    document.querySelector('.welcomesection').style.color = 'white'; 
    document.querySelector('.colorpallet').style.background = 'rgba(255, 255, 255, 0.1)';
});



document.getElementById('dark').addEventListener('click', function() {
    document.body.style.background = 'linear-gradient(to left top, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))';
    var buttons = document.querySelectorAll('button'); // Select all buttons
    buttons.forEach(function(button) {
        button.style.color = '#fff'; // Change color to black
    });
    document.querySelector('.welcomesection').style.color = 'white';  
    document.querySelector('.colorpallet').style.background = 'rgba(255, 255, 255, 0.1)';
});
/* Changing icons */
var icons = ['assets/icon1.png', 'assets/icon2.png', 'assets/icon3.png','assets/icon4.png','assets/icon5.png']; 
var iconIndex = 0;

    setInterval(function() {
         iconIndex = (iconIndex + 1) % icons.length; // Cycle through the icons
         document.getElementById('welcome-icon').src = icons[iconIndex];}, 5000); // Change every 5 seconds