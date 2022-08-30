console.log("Hello World");

// randomly returns 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// given the player choice and the computer choice, play a round of rock, paper, scissors and return
// a string that declars the winner
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();

    if (player == computerSelection) {
        return "It's a tie!"
    }
    else if (player == "rock") {
        if (computerSelection == "paper") {
            return "You lose! Paper beats Rock";
        }
        else {
            return "You win! Rock beats Scissors"
        }
    }
    else if (player == "paper") {
        if (computerSelection == "scissors") {
            return "You lose! Scissors beats Paper";
        }
        else {
            return "You win! Paper beats Rock"
        }
    }
    else if (player == "scissors") {
        if (computerSelection == "rock") {
            return "You lose! Rock beats Scissors";
        }
        else {
            return "You win! Scissors beats Paper"
        }
    }
    else {
        return "Sorry, that is not a valid choice"
    }
}

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissors');

rockBtn.onclick = () => {
    //console.log(playRound("rock", getComputerChoice()));
    calculateResults(playRound("rock", getComputerChoice()));
}
paperBtn.onclick = () => calculateResults(playRound("paper", getComputerChoice()));
scissorBtn.onclick = () => calculateResults(playRound("scissors", getComputerChoice()));

let round = 1;
let playerWins= 0;
let compWins = 0;
let ties = 0;

const resultsSection = document.querySelector('.results');

function calculateResults(roundResults) {

    while (resultsSection.firstChild) {
        resultsSection.removeChild(resultsSection.firstChild);
    }

    let roundCount = document.createElement('p');
    roundCount.innerHTML = `Round ${round}`;
    roundCount.style.fontWeight = "bold";
    resultsSection.appendChild(roundCount);

    if (roundResults.includes("win")) {
        playerWins++;
    }
    else if (roundResults.includes("lose")) {
        compWins++;
    }
    else if (roundResults.includes("tie")) {
        ties++;
    }
    else {
        // do nothing
    }

    round++;

    let resultsMessage = document.createElement('p');
    resultsMessage.innerHTML = roundResults;
    resultsSection.appendChild(resultsMessage);
    //console.log(roundResults);

    let scoreTitle = document.createElement('p');
    scoreTitle.innerHTML = "Score";
    scoreTitle.style.fontWeight = "bold";
    resultsSection.appendChild(scoreTitle);
    //console.log(`Score`);

    let scoreResults = document.createElement('p');
    scoreResults.innerHTML = `Player: ${playerWins} Computer: ${compWins} Ties: ${ties}`;
    resultsSection.appendChild(scoreResults);
    //console.log(`Player: ${playerWins} Computer: ${compWins} Ties: ${ties}`);

    // check if there is a winner (player or comp score > 5)
    let finalResults = document.createElement('p');

    if (playerWins >= 5) {
        finalResults.innerHTML = "Congradulations! You won the game!";
        finalResults.style.color = "green";
        resultsSection.appendChild(finalResults);

        playerWins = 0;
        compWins = 0;
        ties = 0;
        round = 1;
    } 
    else if (compWins >= 5) {
        finalResults.innerHTML = "Too bad, you lost the game :(";
        finalResults.style.color = "red";
        resultsSection.appendChild(finalResults);
        
        playerWins = 0;
        compWins = 0;
        ties = 0;
        round = 1;
    }
}


