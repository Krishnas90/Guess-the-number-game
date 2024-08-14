let previousGuesses = document.querySelector(".guesses");
let lastResult = document.querySelector(".result");
let lowHigh = document.querySelector(".lowOrHigh");

let guessField = document.querySelector("#guess_Field");
let guessSubmit = document.querySelector(".guess_Submit");

let userCount = 1;
let randomNumber = Math.floor(Math.random()*100) + 1;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (userCount === 1) {
        previousGuesses.textContent = "Previous Guessed: ";
    }
    previousGuesses.textContent += userGuess + " ";

    if (userGuess === randomNumber){
        lastResult.textContent += "Result: " +"Congrats! you guessed correct"
        lastResult.style.backgroundColor = "green";
        lowHigh.textContent = "";
        setGameOver();
    } else if (userCount === 5) {
        lastResult.textContent = "!!! Game Over !!!";
        lastResult.style.backgroundColor = "red";
        lowHigh.textContent = '';
        setGameOver();
    } else {
        lastResult.style.backgroundColor = "red";
        lastResult.textContent = "Wrong !!"
        if (userGuess < randomNumber) {
            lowHigh.textContent = "Last guess was too low";
        } else if(userGuess > randomNumber) {
            lowHigh.textContent = "Last guess was too high";
        }
    }

    userCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener("click",checkGuess);

//set game over button 
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    document.body.appendChild(resetButton);
    resetButton.textContent = "Start New Game";
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    userCount = 1;
    let showResult = document.querySelectorAll(".showResults p");
    for (let sR of showResult){
        sR.textContent = '';
    }
    guessField.disabled = false;
    guessSubmit.disabled = false;
    resetButton.parentNode.removeChild(resetButton)
    guessField.value = '';
    guessField.focus();

}