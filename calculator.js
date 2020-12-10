let digits = document.querySelectorAll('.digit')
let operations = document.querySelector('.previous')
let screen = document.querySelector('.current')
let operators = document.querySelectorAll('.operator')
let clearBtn = document.querySelector('#all-clear')
let computeBtn = document.querySelector('#compute')
let operation;
let currentVal ='';
let previousVal;
let operand;
let clicked;


//Functionality when clicking to compute
computeBtn.addEventListener('click', () => {
    let val = compute()
    updateScreen(val)
    currentVal = val
    updateOperation()

})

//functionality when a operator button is clicked
operators.forEach(operator => operator.addEventListener('click', ()=>{
    resetColors()
    operator.style.backgroundColor = '#FA7A35'
    operation = previousVal
    previousVal = currentVal
    currentVal = ''
    operand = operator.innerText
    clicked = true
}));

//Functionality when a numeral is clicked
digits.forEach(digit => digit.addEventListener('click', () => {
    if(digit.value == '.' && !currentVal){
        currentVal = '0'
    }
    numConcat(digit.value)
    updateScreen(currentVal)
    resetColors()
}));

//Functionality when clearing calculator
clearBtn.addEventListener('click', () => {
    currentVal = ''
    updateScreen('0')
    resetColors()
    operations.innerText = ''


})

//To update screen when current numeral is clicked
function updateScreen(val){
    screen.innerText = val
}

function updateOperation(){
    if (!operation){
        operations.innerText = previousVal + operand + currentVal
    } else {
        operations.innerText = operation
    }
}

//To allow >single digit values ie: 4332
function numConcat(val){
    currentVal = currentVal + val
}

function operationConcat(){
    operation = operation + operand + previousVal
}

//To clear the color of a clicked operator
function resetColors(){
    if(clicked === true){
        operators.forEach(operator => operator.removeAttribute("style"));
        clicked = false
    }   
}
//Computation logic
function compute(){
    let prev = parseFloat(previousVal)
    let current = parseFloat(currentVal)
    switch(operand){
        case '+':
             return( prev + current)
        case '-':
            return prev - current
        case 'x':
            return prev * current
        case '÷':
            return prev / current
        default:
            break
    }

}
