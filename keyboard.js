const decimalAdded = false;
let keys = document.querySelectorAll('.button');
let operators = ['+', '-', 'x', '÷', '^'];

for(let i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		let input = document.querySelector('.outputPanel');
		let inputVal = input.innerHTML;
		let btnVal = this.innerHTML;
    
		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		
		else if(btnVal == '=') {
			let equation = inputVal; 
			let lastChar = equation[equation.length - 1]; 
     	
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '\*\*');
			
			
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
      
			
      
			if(equation)
				input.innerHTML = eval(equation);	
			  decimalAdded = false;
		}
		
		

   
		else if(operators.indexOf(btnVal) > -1) {
			
			let lastChar = inputVal[inputVal.length - 1];
			
			
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
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

document.onkeydown = function(event) {

	let key_press = String.fromCharCode(event.key);
	let key_code = event.keyCode;
	let input = document.querySelector('.outputPanel');
	let inputVal = input.innerHTML;
	let btnVal = this.innerHTML;
  let lastChar = inputVal[inputVal.length - 1];
  let equation = inputVal;
	equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');


  
  if(key_press==1) {
    input.innerHTML += key_press;
}
  if(key_press==2) {
    input.innerHTML += key_press; 
}
  if(key_press==3) {
    input.innerHTML += key_press; 
}
  if(key_press==4) {
    input.innerHTML += key_press; 
}
  if(key_press==5) {
    input.innerHTML += key_press; 
}
  if(key_press==6 && event.shiftKey == false) {
    input.innerHTML += key_press; 
}
  if(key_press==7) {
    input.innerHTML += key_press; 
}
  if(key_press==8 && event.shiftKey == false) {
    input.innerHTML += key_press; 
}
  if(key_press==9) {
    input.innerHTML += key_press; 
}
  if(key_press==0) {
    input.innerHTML += key_press;
}
  
  
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 187 && event.shiftKey) || (key_code == 107) || (key_code == 61 && event.shiftKey)) {
      document.querySelector('.outputPanel').innerHTML += '+';
  }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 189 && event.shiftKey) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 107)) {
      document.querySelector('.outputPanel').innerHTML += '-';
  }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 56 && event.shiftKey) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 106)) {
      document.querySelector('.outputPanel').innerHTML += 'x';
  }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 191) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 111)) {
      document.querySelector('.outputPanel').innerHTML += '÷';
  }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 54 && event.shiftKey)) {
      document.querySelector('.outputPanel').innerHTML += '^';
  }
    if(key_code==13 || key_code==187 && event.shiftKey == false) {
      input.innerHTML = eval(equation);
      decimalAdded =false;
  }
    if(key_code==8 || key_code==46) {
			input.innerHTML = '';
			decimalAdded = false;
  }
}