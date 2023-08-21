function getComputerChoice() {
    const actions = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    return actions[randomNum];
}


function gameRound(playerSelection, computerSelection){
    // convert playerSelection to lower case
    playerSelection = playerSelection.toLowerCase();
    let results = [];
    
    // check for draw
    if (playerSelection == computerSelection) {
        return "It a draw!"
        
        // player choice is rock 
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors"){
            return "You win! Rock beats Scissors."
        } else {return "You lose! Paper beats Rock."}

        // player choice is paper
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats Rock."
        } else {return "You lose! Scissors beat Paper."}
        
        // player choice is scissors
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return "You win! Scissors beat Paper"
        } else {return "You lose! Rock beats Scissors."}
    }
}


function game() {
    for (let i = 0; i <= 4; i++) {
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        let playerSelection = prompt("Chose your weapon: Rock, Paper, Scissors: ")
        console.log(playerSelection);
        console.log(gameRound(playerSelection, computerSelection));
    }

}


game();


// user input
// parametrs for wins to keep trak of it
// something to repeat it till then 