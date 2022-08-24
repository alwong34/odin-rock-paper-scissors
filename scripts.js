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

// call the playRound function inside this one and play 5 rounds and keep score
function game() {
    console.log("Let's play 5 rounds of rock paper scissors")

    let round = 1;
    let playerWins= 0;
    let compWins = 0;
    let ties = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${round}`);

        let playerChoice = prompt("Type in your choice (rock, paper, scissors):");
        let computerChoice = getComputerChoice();

        let result = playRound(playerChoice, computerChoice);
        if (result.includes("win")) {
            playerWins++;
        }
        else if (result.includes("lose")) {
            compWins++;
        }
        else if (result.includes("tie")) {
            ties++;
        }
        else {
            // do nothing
        }
        
        console.log(result);
        console.log(`Score`);
        console.log(`Player: ${playerWins} Computer: ${compWins} Ties: ${ties}`);
    }
}