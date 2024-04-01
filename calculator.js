// Initialize memory variable
let memory = '';

// Function to append value to the result input
function appendToResult(value) {
    document.getElementById('result').value += value;
}

// Function to calculate the result
function calculate() {
    let result;
    try {
        result = eval(document.getElementById('result').value);
    } catch (error) {
        result = 'Error';
    }
    document.getElementById('result').value = result;
}

// Function to clear the result input
function clearResult() {
    document.getElementById('result').value = '';
}

// Function to remove the last character from the result input
function backspace() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}

// Function to store the current result in memory
function storeMemory() {
    memory = document.getElementById('result').value;
}

// Function to recall the value stored in memory and append it to the result input
function recallMemory() {
    document.getElementById('result').value += memory;
}
