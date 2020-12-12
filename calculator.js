let digits = document.querySelectorAll('.digit')
let history = document.querySelector('.previous')
let screen = document.querySelector('.current')
let operators = document.querySelectorAll('.operator')
let clearBtn = document.querySelector('#all-clear')
let computeBtn = document.querySelector('#compute')

let operationHistory ='';
let currentVal ='';
let previousVal;
let operand;
let clicked;


//Functionality when clicking to compute
computeBtn.addEventListener('click', () => {
    let val = compute()
    updateScreen(val)
    currentVal = val
    
    history.innerText = operationHistory
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
    operationHistory += ` ${operand} `
}));

//Functionality when a numeral is clicked
digits.forEach(digit => digit.addEventListener('click', () => {
    if(digit.value == '.' && !currentVal){
        currentVal = '0'
    }
    numConcat(digit.value)
    updateScreen(currentVal)
    resetColors()
    operationHistory += digit.innerText 
}));

//Functionality when clearing calculator
clearBtn.addEventListener('click', () => {
    currentVal = ''
    updateScreen('0')
    resetColors()
    operationHistory = ''
    history.innerText = ''
})

//To update screen when current numeral is clicked
function updateScreen(val){
    screen.innerText = val
}


//To allow >single digit values ie: 4332
function numConcat(val){
    currentVal = currentVal + val
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
