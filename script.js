class Calculator{
    constructor(lastNumberDisplay, currentNumberDisplay){
        this.lastNumberDisplay = lastNumberDisplay;
        this.currentNumberDisplay = currentNumberDisplay;
        this.clear();
    }

    clear(){
        this.currentNumber = '';
        this.lastNumber = '';
        this.task = undefined
    }

    delete(){
        this.currentNumber = this.currentNumber.toString().slice(0,-1);
    }

    numberChoice(number){
        if(number === '.' && this.currentNumber.includes('.')) return
        this.currentNumber = this.currentNumber.toString() + number.toString();
    }

    taskChoice(task){
        if(this.currentNumber === '') return
        if(this.lastNumber !== ''){
            this.result();
        }
        this.task = task;
        this.lastNumber = this.currentNumber;
        this.currentNumber = '';
    }

    result(){
        let calculate;
        const last = parseFloat(this.lastNumber);
        const current = parseFloat(this.currentNumber);
        if(isNaN(last) || isNaN(current)) return
        switch(this.task){
            case '÷':
                calculate = last / current;
                break;
            case '*':
                calculate = last * current;
                break;
            case '+':
                calculate = last + current;
                break;
            case '-':
                calculate = last - current;
                break;
            default:
                return;
        }
        this.currentNumber = calculate;
        this.task = undefined
        this.lastNumber = '';
    }

    fetchDisplayNumber(number){
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let numbersDisplay;
        if(isNaN(integerDigits)){
            numbersDisplay = '';
        }
        else{
            numbersDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if(decimalDigits != null){
            return `${numbersDisplay}.${decimalDigits}`;
        }
        else{
            return numbersDisplay;
        }
    }

    updateDisplayPanel(){
        this.currentNumberDisplay.innerText = this.fetchDisplayNumber(this.currentNumber);
        if(this.task != null){
            this.lastNumberDisplay.innerText = `${this.fetchDisplayNumber(this.lastNumber)} ${this.task}`;
        }
        else{
            this.lastNumberDisplay.innerText = '';
        }
    }
}

const lastNumberDisplay = document.querySelector('[data-last-numerical-value]');
const currentNumberDisplay = document.querySelector('[data-current-numerical-value]');
const acButton = document.querySelector('[data-task-clear]');
const delButton = document.querySelector('[data-task-deletion]');
const numericalValuesButtons = document.querySelectorAll('[data-numerical-value]');
const taskButtons = document.querySelectorAll('[data-task]');
const equalsButton = document.querySelector('[data-task-equals]');

const calculator = new Calculator(lastNumberDisplay, currentNumberDisplay);

numericalValuesButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.numberChoice(button.innerText);
        calculator.updateDisplayPanel();
    });
})

taskButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.taskChoice(button.innerText);
        calculator.updateDisplayPanel();
    });
})

equalsButton.addEventListener('click', button => {
    calculator.result();
    calculator.updateDisplayPanel();
})

acButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplayPanel();
})

delButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplayPanel();
})