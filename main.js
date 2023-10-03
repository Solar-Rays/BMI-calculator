const WEIGHT_METRIC = document.querySelector('#weight-metric');
const HEIGHT_METRIC = document.querySelector('#height-metric');
const WEIGHT_INPUT = document.querySelector('#weight');
const HEIGHT_INPUT = document.querySelector('#height');
const RESULT = document.getElementById('result');
const YEAR = document.getElementById('year')

document.getElementById('calc-btn').addEventListener('click', handleCalc)


function handleCalc() {
    // Check what metric system is selected
    var heightMetric = HEIGHT_METRIC.value;
    var weightMetric = WEIGHT_METRIC.value;

    // Get value inputted 
    var weightInput = parseFloat(WEIGHT_INPUT.value);
    var heightInput = parseFloat(HEIGHT_INPUT.value);

    // Check for validity of the input and handle errors
    if (isNaN(heightInput) || isNaN(weightInput)) {
        WEIGHT_INPUT.value = "Please input a number!";
        HEIGHT_INPUT.value = "Please input a number!";
        WEIGHT_INPUT.classList.add("danger");
        HEIGHT_INPUT.classList.add("danger");
        document.getElementById('weight').addEventListener('click', resetWeight, { once: true });
        document.getElementById('height').addEventListener('click', resetHeight, { once: true });
    } else {
        var weight = convertToKg(weightInput, weightMetric);
        var height = convertToMeters(heightInput, heightMetric);

        var result = bmiCalc(weight, height);

        // Feed the BMI into the html
        displayResults(result)
    }
}


function resetWeight() {
    WEIGHT_INPUT.value = "";
    WEIGHT_INPUT.classList.remove("danger")
    RESULT.classList.add('show')
}

function resetHeight() {
    HEIGHT_INPUT.value = "";
    HEIGHT_INPUT.classList.remove("danger")
    RESULT.classList.add('show')
}

// Convert weight to kg and height to meters 

function convertToKg(weightInput, weightMetric) {
    if (weightMetric === "lbs") {
        return weight = (weightInput / 2.2046);
    } else if (weightMetric === "kg") {
        return weight = weightInput;
    }
}

function convertToMeters(heightInput, heightMetric) {
    if (heightMetric === "centimeters") {
        return height = (heightInput / 100);
    } else if (heightMetric === "feet") {
        return height = (heightInput / 3.281);
    } else if (heightMetric === "inches") {
        return height = (heightInput / 39.37);
    } else if (heightMetric === "meters") {
        return height = heightInput;
    }
}

// Calculate the bmi 
function bmiCalc(weight, height) {
    return (weight / (height * height)).toFixed(1);
}

function displayResults(result) {

    if (result < 18.5) {
        condition = "Underweight"
    } else if (result >= 18.5 && result <= 24.9) {
        condition = "Normal weight"
    } else if (result >= 25 && result <= 29.9) {
        condition = "Overweight"
    } else if (result >= 30 && result <= 34.9) {
        condition = "Obese"

    } else if (result > 35) {
        condition = "Extremely obese"
    }

    RESULT.textContent = "Your BMI score is " + result + ". This means you are " + condition;
}

// Toggle button

document.getElementById('modeToggle').addEventListener('click', toggleMode)

function toggleMode () {
    document.querySelector('body').classList.toggle('dark-mode')
    document.getElementById('toggle-light').classList.toggle('active');
    document.getElementById('toggle-dark').classList.toggle('active');
}
//The year for the footer

YEAR.textContent = new Date().getFullYear();