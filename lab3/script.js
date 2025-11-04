// --- 1. Select DOM Elements ---
// Select the display screen and the main buttons container 
const display = document.getElementById('display');
const buttons = document.getElementById('buttons');

// --- 2. Define Calculator State Variables ---
// Use 'let' for variables that will change [cite: 206]
let currentInput = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

// --- 3. Attach Event Listener ---
// Use event delegation by adding ONE listener to the parent 
buttons.addEventListener('click', function(event) {
    
    // Get the element that was clicked [cite: 339]
    const target = event.target;

    // Check if the clicked element is a button [cite: 369]
    if (target.nodeName !== 'BUTTON') {
        return; // Do nothing if it wasn't a button
    }

    // Get the button's value from its text content [cite: 370]
    const value = target.textContent;

    // --- 4. Handle Input Logic ---
    // Use if/else if conditionals [cite: 228]
    if (value === '+' || value === '-' || value === '×' || value === '÷') {
        handleOperator(value);
    } else if (value === '=') {
        handleEquals();
    } else if (value === 'AC') {
        handleClear();
    } else if (value === '.') {
        handleDecimal();
    } else if (value === '%') {
        handlePercent();
    } else {
        // This handles numbers (0-9) and '00'
        handleNumber(value);
    }

    // Update the display after every click
    updateDisplay();
});

// --- 5. Define Helper Functions ---

// Function declaration, as shown in the slides [cite: 278]
function handleNumber(value) {
    if (waitingForSecondOperand) {
        currentInput = value;
        waitingForSecondOperand = false;
    } else {
        // Use inline if (ternary operator) to replace '0' [cite: 308]
        currentInput = currentInput === '0' ? value : currentInput + value;
    }
}

function handleOperator(nextOperator) {
    // Convert string input to a number
    const inputValue = parseFloat(currentInput);

    if (operator && waitingForSecondOperand) {
        // Change operator if one is already pending
        operator = nextOperator;
        return;
    }

    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        // Perform calculation if we have a first operand and an operator
        const result = calculate();
        currentInput = String(result);
        firstOperand = result;
    }

    operator = nextOperator;
    waitingForSecondOperand = true;
}

function calculate() {
    const secondOperand = parseFloat(currentInput);
    
    // Use if statements for basic operations [cite: 217]
    if (operator === '+') {
        return firstOperand + secondOperand;
    }
    if (operator === '-') {
        return firstOperand - secondOperand;
    }
    if (operator === '×') {
        return firstOperand * secondOperand;
    }
    if (operator === '÷') {
        return firstOperand / secondOperand;
    }
    return secondOperand; // Return current value if no operator
}

function handleEquals() {
    if (operator && !waitingForSecondOperand) {
        const result = calculate();
        currentInput = String(result);
        firstOperand = null; // Reset for new calculation
        operator = null;
        waitingForSecondOperand = false;
    }
}

function handleClear() {
    currentInput = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
}

function handleDecimal() {
    // Add a decimal point only if one doesn't already exist
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
}

function handlePercent() {
    const inputValue = parseFloat(currentInput);
    currentInput = String(inputValue / 100);
}

function updateDisplay() {
    // Change the textContent of the display element 
    display.textContent = currentInput;
}