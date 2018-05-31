var winCount = 0;
var lossesCount = 0;
var guessCount = 0;

var computerChoices = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',
    'O','P','Q','R','S','T','U','V','W','X','Y','Z'];

document.onkeyup = function(event) {

    var userGuess = event.key.toUpperCase();

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    if (computerGuess === userGuess) {
        winCount++
        guessCount = 0;
    }
    else if (computerGuess !== userGuess) {
        guessCount++;
        if (guessCount > 9) {
            guessCount = 0;
            lossesCount++;
        }
    }
    var html =
        "<p>You chose: " + userGuess + "</p>" +
        "<p>The computer chose: " + computerGuess + "</p>" +
        "<p>wins: " + winCount + "</p>" +
        "<p>losses: " + lossesCount + "</p>" +
        "<p>guesses: " + guessCount + "</p>";
    
    var results = document.querySelector("#results");
    results.innerHTML = html;
};