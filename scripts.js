// Variables para guardar la operación actual
let currentInput = '';
let previousInput = '';
let operation = null;

// Función para actualizar el display
function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentInput || previousInput || '0';
}

// Función para agregar valores al display
function appendToDisplay(value) {
    if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput) {
            previousInput = currentInput;
            currentInput = '';
        }
        operation = value;
    } else {
        currentInput += value; // Se concatenan los números
    }
    updateDisplay();
}

// Función para calcular el resultado
function calculate() {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result = 0;

    if (!isNaN(num1) && !isNaN(num2)) {
        if (operation === '+') result = num1 + num2;
        if (operation === '-') result = num1 - num2;
        if (operation === '*') result = num1 * num2;
        if (operation === '/') result = num2 !== 0 ? num1 / num2 : 'Error';
    } else {
        result = 'Error'; // Si falta algún número
    }

    currentInput = result.toString();
    previousInput = '';
    operation = null;
    updateDisplay();
}

// Función para limpiar el display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
}

// Función para calcular la raíz cuadrada
function calculateSquareRoot() {
    if (currentInput) {
        const num = parseFloat(currentInput);
        currentInput = num >= 0 ? Math.sqrt(num).toString() : 'Error';
        updateDisplay();
    }
}

// Función para borrar el último dígito
function deleteLastDigit() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

// Inicializo el display en 0
updateDisplay();
