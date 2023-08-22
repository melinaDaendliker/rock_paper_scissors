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


function endScore(computerScore, playerScore) {
    if (playerScore > computerScore) {
        console.log("You Win!");
    } else if (playerScore < computerScore) {
        console.log("The Computer wins!");
    } else {
        console.log("It's draw!");
    }

    console.log(`Player ${playerScore} : Computer ${computerScore}`);
}


function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i <= 4; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Chose your weapon: Rock, Paper, Scissors: ")
        let result = gameRound(playerSelection, computerSelection);
        console.log(result[0]);

        if (result[1] == 1) {
            playerScore ++;
        } else if (result[1] == 0) {
            computerScore ++;
        }
        console.log(`Player ${playerScore} : Computer ${computerScore}`)
    }
    endScore(computerScore, playerScore);
}


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('pushed');
  }

function gamePlay(e) {
    let playerChoice = e.target.id;
    let computerChoice = getComputerChoice(); 

    // makes the button flashy
    const button = this.document.querySelector(`button#${playerChoice}`);
    button.classList.add('pushed');

    // start the game round 
    let result = gameRound(playerChoice, computerChoice);
    

    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1);
    computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1);
    // show what palyer and computer choice and win message
    selectionMessage.textContent = `Player : ${playerChoice}   vs   ${computerChoice} : Computer`;
    gameMessage.textContent = result[0];
    
}


window.addEventListener("click", gamePlay);
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
const gameMessage = document.querySelector('.game-message');
const selectionMessage = document.querySelector('.selection-message')


 
  

//game();
//let restart = prompt("Do you want to restart the game (Yes/No)?").toLowerCase();
//while (restart != "no") {
//    game();
//    restart = prompt("Do you want to restart the game (Yes/No)?").toLowerCase();
//}



// error handeling when user has wrong input??
