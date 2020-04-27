/*
Tomas Gonzalez Moron
ABRIL - 2020
https://github.com/tomigm
 */

let displayValue, num1, operator, result;
const numbersTest = /^\d+$/;

// Operation chooser
function operate (a, operator, b) {
    
    return result= (operator == 'add') ?  (a + b).toFixed(2) :
                    (operator == 'sub') ? (a - b).toFixed(2) :
                    (operator == 'mul') ? (a * b).toFixed(2) :
                    (operator == 'div') ? (a / b).toFixed(2) :
                    false;
    
    
}
function resetValues (){
    displayValue = num1 = operator = result = undefined;
    display.textContent = 0;
}
// Buttons actions

const buttons = document.querySelectorAll('div.button');
const display = document.querySelector('div.display')
buttons.forEach((div) => {
    div.addEventListener('click', (e) => {
        // Number pressed        
        if (numbersTest.test(div.id) || div.id == '.') {
            if (displayValue == undefined) {displayValue = ''; result = undefined} // No values attached
            else if (operator !== undefined && num1 == undefined) {num1 = displayValue; displayValue = ''} // asign first value
            if (operator == "div" && (div.id == '0' || div.id == '00')) {document.getElementById('infinity').play(); resetValues(); return alert('INFINITY')} // if user want to divide with 0
            if (div.id == '.' && display.textContent.includes('.')) {return} // dont let to enter more than 1 point
            displayValue += div.id;
            display.textContent = displayValue;
       }
       // operator pressed
        else if (div.id == 'add' || div.id == 'sub' || div.id == 'div' || div.id == 'mul') {
            if (result !== undefined) {displayValue = result; result = undefined}
            
            // CASE B user press NUM + OP + NUM + OP
            if (displayValue !== undefined && operator !== undefined && num1 !== undefined){
                operate (parseFloat(num1), operator, parseFloat(displayValue));
                displayValue = display.textContent = result;                
                result = num1 = operator = undefined;
            }
            operator = div.id;
        }
        //equal pressed
        else if (div.id == 'equal') {
            if (operator == undefined) {return display.textContent}
            operate (parseFloat(num1), operator, parseFloat(displayValue));
            display.textContent = result;
            operator = displayValue = num1 = undefined;
            
        }
        // AC key
        else if (div.id == 'AC') { 
            resetValues();
        }
        // DEL key
        else if (div.id == 'DEL') { 
            if (display.textContent == displayValue)
            display.textContent = display.textContent.slice(0, -1)
            displayValue = displayValue.slice(0, -1)
            
        }
        
    })
})
// add keyboard support
window.addEventListener('keydown', (e) => {
    const key = document.querySelector(`div[data-key="${e.key}"]`);
    if (!key) return;
    key.click();
  })

  console.log('%cTomas Gonzalez Moron \nabril 2020 \nhttps://github.com/tomigm', 'background: plum; font-size: medium')