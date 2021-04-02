// Randomly generate a number
function generateNumberToGuess(confirmIt) {
    var guesses = document.getElementById("output");
    guesses.value = '';
    numToGuess = Math.floor(Math.random()*10);
    guesses.value = "New number generated.\n";
}
//Generate  random num
window.onload = function(){
    generateNumberToGuess();
}

//persons guess value - doesnt work idk why 
function yourGuess() {
    // local variables
    var guess = document.getElementById("guess").value;
    var guesses = document.getElementById("output");

    // First, if the guess is the same, just show the answer.
    // Append onto the textarea the result.
    if (guess == numToGuess) {
        guesses.value = guesses.value + "\r" + "You have guessed correctly! ("+guess+")";
    } else if (guess > numToGuess) {
        guesses.value = guesses.value + "\r" + "You guessing too high!("+guess+")";
    } else {
        guesses.value = guesses.value + "\r" + "You guessing too low!("+guess+")";
    }
}

