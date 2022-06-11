
const numericalValuesButtons = document.querySelectorAll('[data-numerical-value]');
const taskButtons = ['+', '-', '*', '÷'];
const decimalAdded = false;


for(var i = 0; i < numericalValuesButtons.length; i++) {
  numericalValuesButtons[i].onclick = function(e) {
		var input = document.querySelector('.outputPanel');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
    
		if(btnVal === 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		else if(btnVal === '=') {
			var equation = inputVal; 
			var lastChar = equation[equation.length - 1]; 
     	
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '\*\*');

			if(taskButtons.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			if(equation)
				input.innerHTML = eval(equation);	
			    decimalAdded = false;
		}
		else if(taskButtons.indexOf(btnVal) > -1) {
			var lastChar = inputVal[inputVal.length - 1];

			if(inputVal != '' && taskButtons.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			if(taskButtons.indexOf(lastChar) > -1 && inputVal.length > 1) {
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			decimalAdded =false;
		}
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		else {
			input.innerHTML += btnVal;
		}
		e.preventDefault();
	} 
}

document.onkeydown = function(event){
	let key_press = String.fromCharCode(event.key);
	let key_code = event.key;
	let input = document.querySelector('.outputPanel');
	let inputVal = input.innerHTML;
	this.btnVal = this.innerHTML;
    let lastChar = inputVal[inputVal.length - 1];
    let equation = inputVal;
	equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');
  
    if(key_press == 1){
      input.innerHTML += key_press;
    }
    if(key_press ==2 ){
      input.innerHTML += key_press; 
    }
    if(key_press == 3 || key_code == 'Space') {
      input.innerHTML += key_press; 
    }
    if(key_press == 4){
      input.innerHTML += key_press; 
    }
    if(key_press == 5){
      input.innerHTML += key_press; 
    }
    if(key_press == 6 && event.shiftKey == false){
      input.innerHTML += key_press; 
    }
    if(key_press == 7){
      input.innerHTML += key_press; 
    }
    if(key_press == 8 && event.shiftKey == false){
      input.innerHTML += key_press; 
    }
    if(key_press == 9){
      input.innerHTML += key_press; 
    }
    if(key_press == 0){
      input.innerHTML += key_press;
    }
    if((inputVal != '' && 
        taskButtons.indexOf(lastChar) == -1 && key_code == 'Equal Sign' && event.shiftKey) || (key_code == 'Add') || (key_code == 'Equal Sign' && event.shiftKey)){
            document.querySelector('.outputPanel').innerHTML += '+';
    }
    if((inputVal != '' && taskButtons.indexOf(lastChar) == -1 && key_code == 'Dash' && event.shiftKey) || (inputVal != '' && taskButtons.indexOf(lastChar) == -1 && key_code == 'Add')){
            document.querySelector('.outputPanel').innerHTML += '-';
    }
    if((inputVal != '' && taskButtons.indexOf(lastChar) == -1 && key_code == '8' && event.shiftKey) || (inputVal != '' && taskButtons.indexOf(lastChar) == -1 &&key_code == 'Multiply')){
            document.querySelector('.outputPanel').innerHTML += 'x';
    }
    if((inputVal != '' && taskButtons.indexOf(lastChar) == -1 && key_code == 'Forward Slash') || (inputVal != '' && taskButtons.indexOf(lastChar) == -1 && key_code == 'Divide')){
            document.querySelector('.outputPanel').innerHTML += '÷';
    }
    if(key_code =='enter' || key_code =='Equal Sign' && event.shiftKey == false) {input.innerHTML = eval(equation);
            decimalAdded =false;
    }
    if(key_code =='Backspace' || key_code =='Delete'){
			input.innerHTML = '';
			decimalAdded = false;
    }
}