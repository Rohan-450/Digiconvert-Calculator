let mode = document.querySelectorAll('.Mode');                  //Selecting the different sets of buttons
let letters = document.querySelectorAll('.operatorA');
let numbers = document.querySelectorAll('.number');
let inputs = document.querySelectorAll('input');
let buttons = document.querySelectorAll('button');

mode[1].addEventListener('click',() =>{                 //When BIN button is clicked
    for(let i=0; i<=3;i++){
        inputs[i].disabled = false;
        inputs[i].classList.remove('disable-text');
    }
    inputs[1].focus();                              //Focus brought to the BIN textbox
    numbers.forEach((e)=>{
        e.classList.remove('disable');
        e.disabled = false;
    })
    letters.forEach((e)=>{                          
        e.classList.remove('disable');
        e.disabled = false;
    })
    letters.forEach((e)=>{              //Disabling the Letter buttons
        e.classList.add('disable');
        e.disabled = true;
    })
    numbers.forEach((e)=>{          //Disabling the numbers except 0, 1 and .
        if(e.innerText != 0 && e.innerText != 1 && e.innerText != "."){
            e.classList.add('disable');
            e.disabled = true;
        }
    })
    for(let i=0; i<=3;i++){     //Disabling rest of the text boxes
        if(i != 1){
            inputs[i].disabled = true;
            inputs[i].classList.add('disable-text');
        }
    }
});

mode[0].addEventListener('click',() =>{     //When DEC button is clicked
    for(let i=0; i<=3;i++){
        inputs[i].disabled = false;
        inputs[i].classList.remove('disable-text');
    }
    inputs[0].focus();       //Focus brought to the DEC textbox
    numbers.forEach((e)=>{
        e.classList.remove('disable');
        e.disabled = false;
    })
    letters.forEach((e)=>{
        e.classList.remove('disable');
        e.disabled = false;
    })
    letters.forEach((e)=>{          //Disabling the Letter buttons
        e.classList.add('disable');
        e.disabled = true;
    })
    for(let i=0; i<=3;i++){     //Disabling rest of the text boxes
        if(i != 0){
            inputs[i].disabled = true;
            inputs[i].classList.add('disable-text');
        }
    }
});

mode[2].addEventListener('click',() =>{     //When HEX button is clicked
    for(let i=0; i<=3;i++){
        inputs[i].disabled = false;
        inputs[i].classList.remove('disable-text');
    }
    inputs[2].focus();      //Focus brought to the HEX textbox
    numbers.forEach((e)=>{
        e.classList.remove('disable');
        e.disabled = false;
    })
    letters.forEach((e)=>{
        e.classList.remove('disable');
        e.disabled = false;
    })
    for(let i=0; i<=3;i++){         //Disabling rest of the text boxes
        if(i != 2){
            inputs[i].disabled = true;
            inputs[i].classList.add('disable-text');
        }
    }
});

mode[3].addEventListener('click',() =>{     //When OCT button is clicked
    for(let i=0; i<=3;i++){
        inputs[i].disabled = false;
        inputs[i].classList.remove('disable-text');
    }
    inputs[3].focus();      //Focus brought to the OCT textbox
    numbers.forEach((e)=>{
        e.classList.remove('disable');
        e.disabled = false;
    })
    letters.forEach((e)=>{
        e.classList.remove('disable');
        e.disabled = false;
    })
    letters.forEach((e)=>{
        e.classList.add('disable');     //Disabling the Letter buttons
        e.disabled = true;
    })
    numbers.forEach((e)=>{       //Disabling the 8 and 9 buttons
        if(e.innerText == 8 || e.innerText == 9){
            e.classList.add('disable');
            e.disabled = true;
        }
    })
    for(let i=0; i<=3;i++){     //Disabling rest of the text boxes
        if(i != 3){
            inputs[i].disabled = true;
            inputs[i].classList.add('disable-text');
        }
    }
});

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