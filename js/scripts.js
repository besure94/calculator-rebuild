function add(number1, number2) {
	return number1 + number2;
}

function subtract(number1, number2) {
	return number1 - number2;
}

function multiply(number1, number2) {
	return number1 * number2;
}

function divide(number1, number2) {
	return number1 / number2;
}

function handleCalculation(event) {
	event.preventDefault();
	const number1 = parseInt(document.querySelector("input#input1").value);
	const number2 = parseInt(document.querySelector("input#input2").value);
	const operator = document.querySelector("input[name='operator']:checked").value;
}