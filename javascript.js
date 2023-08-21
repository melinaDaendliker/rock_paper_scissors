function getComputerChoice() {
    const actions = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    return actions[randomNum];
}


function gameRound(playerSelection, computerSelection){
    // convert playerSelection to lower case
    playerSelection = playerSelection.toLowerCase();
    
    // check for draw
    if (playerSelection == computerSelection) {
        return [ "It's a draw!", 2];
    
        // player choice is rock 
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors"){
            return ["You win! Rock beats Scissors.", 1]
        } else {return ["You lose! Paper beats Rock.", 0]}

    // player choice is paper
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return ["You win! Paper beats Rock.", 1]
        } else {return ["You lose! Scissors beat Paper.", 0]}
        
    // player choice is scissors
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return ["You win! Scissors beat Paper", 1]
        } else {return ["You lose! Rock beats Scissors.", 0]}
    }
}

function game() {
    for (let i = 0; i <= 4; i++) {
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        let playerSelection = prompt("Chose your weapon: Rock, Paper, Scissors: ")
        console.log(playerSelection);
        let result = gameRound(playerSelection, computerSelection);
        console.log(result)
    }
}


game();


// way to handel erros when youser type in
// something else than rock paper scissors

// function for traking the score

// asking to restart the game 