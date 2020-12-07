let digits = document.querySelectorAll('.digit')
let screen = document.querySelector('.screen')
let operators = document.querySelectorAll('.operator')
let clearBtn = document.querySelector('#all-clear')
let computeBtn = document.querySelector('#compute')
let currentVal ='';
let previousVal;
let operand;
let clicked;

computeBtn.addEventListener('click', function(){
    let val = compute()
    screen.innerText = val
    currentVal = val
})

operators.forEach(operator => operator.addEventListener('click', function(){
    operator.style.backgroundColor = '#FA7A35'
    previousVal = currentVal
    currentVal = ''
    operand = this.innerText
    clicked = true
    console.log(currentVal)
    console.log(previousVal)
    console.log(operand)
}));


digits.forEach(digit => digit.addEventListener('click', function(){
    numConcat(this.value)
    updateScreen()
    resetColors()
    console.log(currentVal)
    console.log(previousVal)
}));

clearBtn.addEventListener('click',function(){
    currentVal = '0'
    screen.innerText = '0'
    resetColors()

})

function updateScreen(){
    screen.innerText = currentVal
}

function numConcat(val){
    currentVal = currentVal + val
}

function resetColors(){
    if(clicked === true){
        operators.forEach(operator => operator.removeAttribute("style"));
        clicked = false
    }   
}

function compute(){
    let prev = parseFloat(previousVal)
    let current = parseFloat(currentVal)
    switch(operand){
        case '+':
             return( prev + current)
             break
        case '-':
            return prev - current
            break
        case 'x':
            return prev * current
            break
        case '÷':
            return prev / current
            break   
    }

}