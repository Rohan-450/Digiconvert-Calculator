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