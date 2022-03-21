//initialize the global variables
let computerScore=0;
let playerScore=0;
let winner="";
let round=1;
//get the elements from html
const player = document.getElementById('player');
const pc = document.getElementById('pc');
const rounds = document.getElementById('rounds');
const gameRound = document.getElementById('gameRound');
const scores = document.getElementById('scores');
const results = document.querySelector("#results");

//get the buttons
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

//add EventListeners to the buttons
rock.addEventListener('click', playerPlay);
paper.addEventListener('click', playerPlay);
scissors.addEventListener('click', playerPlay); 

//When player clicks
function playerPlay(){
    if(computerScore===5 || playerScore===5){
        newGame();
    }else{ 
       pc.textContent=`Computer's Choice:   `;
       rounds.textContent = `ROUND:   ${round}`;
       round++ 
       let playerChoice = this.id;
       player.textContent = `Your Choice:   ${playerChoice}`; 
       let pcChoice = setTimeout(computerPlay, 500, playerChoice);
    }
}           

//This is the computer's turn
function computerPlay(playerSelection){
    let computerChoice = "";
    let zaria = Math.floor(Math.random() * 3); //returns a random integer from 0 to 2
    if (zaria===0){
        computerChoice="rock";
     }else if (zaria===1){
        computerChoice="paper";   
    }else {
        computerChoice="scissors";
    }
    pc.textContent = `Computer's Choice:   ${computerChoice}`;
    let playround = setTimeout(playRound,500,playerSelection,computerChoice);

} 
//Function to decide the winner of one round and display it
function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        gameRound.textContent = "It's a draw! Continue."; 
    }else if ((playerSelection === "rock" && computerSelection === "paper") 
            || (playerSelection==="paper" && computerSelection==="scissors")
                || (playerSelection==="scissors" && computerSelection==="rock")) {
        gameRound.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore +=1;
    }else{
        gameRound.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore +=1;
    };
    let check = setTimeout(scoreCheck, 1000, playerScore, computerScore);  
} 

//Function to show the score & check if there's a winner
function scoreCheck(playerScore, computerScore){
    scores.textContent = `Your score: ${playerScore} --- Computer's score: ${computerScore}`;
    if(playerScore===5){
        gameRound.textContent = "GAME OVER! The winner is YOU!";    
    }else if(computerScore===5){
        gameRound.textContent="GAME OVER! The winner is the COMPUTER!";  
    }
    
}
//Function to start a new Game
function newGame(){

    // Create a button to refresh page
    const newGame = document.createElement('button');
    newGame.textContent = `Play again`;
    newGame.classList.add('newPlay');
    results.appendChild(newGame);
    newGame.addEventListener('click', refreshPage);
    }
}

// Function to refresh page
function refreshPage() {
    window.location.reload(true);
}

