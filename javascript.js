// selection of all needed elements
const gameMessage = document.querySelector('.game-message');
const selectionMessage = document.querySelector('.selection-message')
const buttons = document.querySelectorAll('button');
let scorePlayerSpan = document.querySelector('.player-score');
let scoreComputerSpan = document.querySelector('.computer-score');

let scorePlayer = 0;
let scoreComputer = 0;

// starting the game 
window.addEventListener("click", gamePlay);
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

// make end  button interactable 


// functions 

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

function countScore(result){
    if (result==1){
        scorePlayer ++; 
    } else if (result==0) {
        scoreComputer ++
    }
}

function makeConfetti() {
    var myCanvas = document.createElement('canvas');
        document.body.appendChild(myCanvas);

        var myConfetti = confetti.create(myCanvas, {
            resize: true,
            useWorker: true
        });
        myConfetti({
            particleCount: 100,
            spread: 160,
            startVelocity: 35
        });
}

function endScore(computerScore, playerScore) {
    const gameScreen = document.querySelector('.game-screen');
    gameScreen.style.opacity = 0;
    
    // select div for end message
    const endScreen = document.querySelector('.end-screen');
    endScreen.classList.add('end-styling');
    
    // create play again button 
    const playAgainButton = document.createElement('button');
    playAgainButton.classList.add('playAgainButton');
    playAgainButton.textContent = "Play Again";
    endScreen.appendChild(playAgainButton);
    playAgainButton.addEventListener('click', restart);
   
    // create end message 
    const endMessage = document.createElement('p');
    endMessage.classList.add('endMessage');
    endScreen.appendChild(endMessage);
   

   
    if (playerScore > computerScore) {
        endMessage.textContent = "You Win!";
        makeConfetti();
    } else if (playerScore < computerScore) {
        endMessage.textContent = "The Computer wins!";
    } 

    // make button clickable 
    
}

function restart() {
    alert('test');
    // reset all the score variables
    // change styling back to normal 
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

    // count and display score
    countScore(result[1])
    scorePlayerSpan.textContent = scorePlayer;
    scoreComputerSpan.textContent = scoreComputer;

    // end the game
    if (scoreComputer == 1 || scorePlayer == 1) {
        endScore(scoreComputer, scorePlayer);
    
    }

}




 
  
