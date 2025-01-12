const clearButton = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");
const digitButtons = document.querySelectorAll(".digit");
const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");


const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;



const setInputText = (str) => {
    userInput.value = str;
}
const getInputText = () => {
    return userInput.value;
}

const checkValid = (msg) => regex.test(msg);

const validate = () => {
    const inpt = userInput.value;
    if(inpt === "") {
        alert("Please provide a phone number");
        return;
    }
    resultDiv.innerHTML += checkValid(inpt) ? `
    <p class="log-res">Valid US number: ${inpt}</p>
    <hr class="hr-result">` :`
    <p class="log-res">Invalid US number: ${inpt}</p>
    <hr class="hr-result">`;

    userInput.value = "";
}

const clearResults = () => {
    resultDiv.innerHTML = "";
}

digitButtons.forEach((button) => button.addEventListener("click", () => {setInputText(getInputText() + button.textContent)}));
checkButton.addEventListener("click", validate);
clearButton.addEventListener("click", clearResults);
userInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        validate();
    }
})