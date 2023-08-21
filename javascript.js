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
        return 2
        
    // player choice is rock 
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors"){
            return 1
        } else {return 0 }

    // player choice is paper
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return 1
        } else {return 0}
        
    // player choice is scissors
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return 1
        } else {return 0 }
    }
}

function messagePrint(playerSelection, computerSelection, result) {
    if (result == 2) {
        console.log("It's a draw")
    } else if (result = 1 && playerSelection != "scissors") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}` )
    } else if (result = 1 && playerSelection == "scissors") {
        console.log(`You win! ${playerSelection} beat ${computerSelection}` )
    } else if (result = 2 && computerSelection != "scissors") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}` )
    } else if (result = 2 && computerSelection =="scissors") {
        console.log(`You lose! ${computerSelection} beat ${playerSelection}` )
    }
}




function game() {
    for (let i = 0; i <= 4; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Chose your weapon: Rock, Paper, Scissors: ")
        let result = (gameRound(playerSelection, computerSelection));
        messagePrint(playerSelection, computerSelection, result);
    }
}


game();


// user input
// parametrs for wins to keep trak of it
// something to repeat it till then 