let currentDisplay = '';
document.querySelector('#display').value = currentDisplay;

// Calculator functions
function appendToDisplay(value) {
    currentDisplay += value;
    document.querySelector('#display').value = currentDisplay;
}

function clearDisplay() {
    currentDisplay = '';
    document.querySelector('#display').value = currentDisplay;
}

function deleteLast() {
    currentDisplay = currentDisplay.slice(0, -1);
    document.querySelector('#display').value = currentDisplay;
}

function calculate() {
    try {
        currentDisplay = eval(currentDisplay.replace('×', '*').replace('÷', '/'));
        document.querySelector('#display').value = currentDisplay;
    } catch (error) {
        document.querySelector('#display').value = "Error";
    }
}

// BMI Calculator functions
function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (height > 0 && weight > 0) {
        const bmi = weight / ((height / 100) ** 2);
        const category = getBMICategory(bmi);
        document.getElementById("bmi-result").textContent = `BMI: ${bmi.toFixed(1)} - ${category}`;
    } else {
        document.getElementById("bmi-result").textContent = "Please enter valid height and weight!";
    }
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi < 24.9) return "Normal weight";
    else if (bmi < 29.9) return "Overweight";
    else return "Obesity";
}
