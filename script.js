// script.js
function calculateModulus() {
    // Get input values
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    
    // Check if the input is valid
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
        return;
    }

    // Calculate modulus
    const modulus = number1 % number2;

    // Display result
    document.getElementById('result').innerText = `The result of ${number1} % ${number2} is ${modulus}.`;
}
