const clearButton = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");
const digitButtons = document.querySelectorAll(".digit");
const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");

const setInputText = (str) => {
    userInput.value = str;
}
const getInputText = () => {
    return userInput.value;
}

const checkValid = (str) => {
    
}

digitButtons.forEach((button) => button.addEventListener("click", () => {setInputText(getInputText() + button.textContent)}));
