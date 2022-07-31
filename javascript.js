//to show operation - while operation = "wtv operation" background color = white; color = orange
const num = document.querySelectorAll(".num");
const display = document.querySelector(".display");
const clear = document.querySelector("#clear");
const plus = document.querySelector("#plus");
const equal = document.querySelector("#equal");
const operation = document.querySelector(".operation");

let number = 0;
let number1 = 0;
let number2 = 0;
let sum = 0;

let add = 0;
let sub = 0;
let divide = 0;
let multiply = 0;

let clearChecker = 0;

function clearScreen(){
    if(clearChecker == 0){ 
    number = 0;
    number1 = 0;
    number2 = 0;
    display.textContent = number;
    }
    else if(clearChecker == 1)
    {
        number = 0;
        number2 = 0;
        display.textContent = number;
        clearChecker = 0;
    }
    clear.textContent = "AC";

}

function checkAddition(){
  
}

function showAddition(){
    add ++;
    if(add == 1){
        number = 0;
    }
    if(add == 2){
        sum = number1 + number2;
        display.textContent = sum;
        number1 = sum;
        number2 = 0;
        add = 1;
        number = 0;
    }
    //minus = 0;
    //divide = 0; etc...

    plus.style.cssText = "background-color: white; color: rgb(247,149,7)";
}

function showResult(){
    if(add == 1){
        sum = number1 + number2;
        display.textContent = sum;
        number1 = sum;
        number2 = 0;
        add = 1;
        number = 0;
    }
}


num.forEach((m) => {

    // and for each one we add a 'click' listener
    m.addEventListener('click', () => {
        if(add == 0){ //could change add to operation variable and then use other functions to do the work therefore less code
            number += m.textContent;
              display.textContent = (parseInt(number))
              
              number1 = (parseInt(number));
        }
        else if(add == 1){
            
            number += m.textContent;
              display.textContent = (parseInt(number));
              
              number2 = (parseInt(number));
        }
        plus.style.cssText = "background-color: rgb(247,149,7); color: white;"
        clearChecker = 1;
        clear.textContent = "C";
    });
  });

clear.addEventListener('click', clearScreen);   
plus.addEventListener('click', showAddition);
equal.addEventListener('click', showResult)

