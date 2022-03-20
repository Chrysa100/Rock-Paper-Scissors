//the global variables
let computerScore=0;
let playerScore=0;
let winner="";
let round=1;


const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', playerPlay);
paper.addEventListener('click', playerPlay);
scissors.addEventListener('click', playerPlay); 

function newGame(){
   
        const results = document.querySelector("#results");
        results.textContent = "REFRESH THE PAGE TO PLAY AGAIN.";
        //console.log("NEW GAME");
        //computerScore=0;
        //playerScore=0;
        //round=1;  
}

      
function playerPlay(){
    if(computerScore===5 || playerScore===5){
        newGame();
        /*const results = document.querySelector("#results");
        results.textContent = "NEW GAME";
        //console.log("NEW GAME");
        computerScore=0;
        playerScore=0;
        round=1;*/
    }else{ 
       const rounds = document.getElementById('rounds');
       rounds.textContent = `ROUND:   ${round}`;
       //console.log("ROUND: " , +round);
       round++ 
   
       let playerChoice = this.id;
       const player = document.getElementById('player');
       //player.setAttribute("style","borderColor : blue; background: pink;");
       player.textContent = `Your Choice:   ${playerChoice}`; 
       let pcChoice = setTimeout(computerPlay, 500, playerChoice);
    }
    //results1.textContent = `* in playerPlay**Your Choice:   ${playerChoice}`;     
    //player.textContent =  `Your Choice:   ${playerChoice}`;
    //return playerChoice;  
    //console.log("inside playerPlay the computerChoice: " + computerChoice);
    
    //console.log(`in playerPlay   ${computerChoice}`);
    //computerPlay();
    //playRound(playerChoice,computerChoice);
    //let playRound = setTimeout(playRound,2000,playerChoice,computerChoice);
}           

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
    const pc = document.getElementById('pc');
    //pc.setAttribute("style", "borderColor : green; background: yellow;");
    pc.textContent = `Computer's Choice:   ${computerChoice}`;
    let playround = setTimeout(playRound,500,playerSelection,computerChoice);

    //pc.textContent =  `**Computer's Choice: `  ${computerChoice}`;
    //console.log("computerChoice: " + computerChoice);
    //return computerChoice;
    //playRound(playerSelection,computerChoice);
} 

function playRound(playerSelection,computerSelection){
    const gameRound = document.getElementById('gameRound');
    //gameRound.setAttribute("style","color : white; background: blue;");
   
    if (playerSelection === computerSelection){
        gameRound.textContent = "It's a draw! Continue."; 
        //console.log("It's a draw! Continue.")
        }else if ((playerSelection === "rock" && computerSelection === "paper") 
            || (playerSelection==="paper" && computerSelection==="scissors")
            || (playerSelection==="scissors" && computerSelection==="rock")) {
                gameRound.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
             //console.log("You Lose! ", computerSelection, " beats ", playerSelection); 
            computerScore +=1;
              
        }else{
            gameRound.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
            //console.log("You Win! ",playerSelection, " beats ", computerSelection );
            playerScore +=1;

        };
   
    //console.log("playerScore is " ,playerScore);
    //console.log("computerScore is " ,computerScore);
    let check = setTimeout(scoreCheck, 1000, playerScore, computerScore);  
    //scoreCheck(playerScore,computerScore); 
} 

function scoreCheck(playerScore, computerScore){
    const scores = document.getElementById('scores');
    //scores.setAttribute("style", "background: purple; color:yellow; ");    
    scores.textContent = `Your score: ${playerScore} *** Computer's score: ${computerScore}`;
    if(playerScore===5){
        gameRound.textContent="The winner is YOU!";
        
    }else if(computerScore===5){
        gameRound.textContent="The winner is the COMPUTER!";
        
    }
}
/* one fellow student did this:

// Creating a button to refresh page
const newGame = document.createElement('div');
newGame.textContent = `Play again`;
newGame.classList.add('button', 'refresh');

//Refresh Page Button at the end of the game
newGame.addEventListener('click', refreshPage);


// Function to refresh page
function refreshPage() {
        window.location.reload(true);
}*/

/* another fellow student did this:

// Start Game when user clicks on an image
images.forEach((image) =>
  image.addEventListener('click', () => {
    if (playerScore >= 5 || computerScore >= 5) {
      return;
    }
    game(image.dataset.image);
  })
); */


//results.textContent = `in playround**Your Choice:   ${playerSelection}  ***   
    //*Computer's Choice:   ${computerSelection}`;
    //const pc = document.getElementById('pc');
    //pc.setAttribute("style", "background:light green;");
    //pc.textContent = `Computer's Choice:   ${computerSelection}`;
 
 // let round=0; 
//console.log("ROUND: " , +(round+1));
// round++ 
// console.log("playerScore is " ,playerScore);
//  console.log("computerScore is " ,computerScore);
//}


// function game(){
   
//     for(let round=0; round<5; round++ ){  // play only 5 rounds
//         console.log("ROUND: " , +(round+1));
//         //playerSelection=playerChoice;
//         computerSelection = computerPlay();
//         playRound(playerChoice, computerSelection);
//         console.log("playerScore is " ,playerScore);
//         console.log("computerScore is " ,computerScore);
//     }
//     let winner="";
//     if(playerScore===computerScore){
//         console.log("The winner is the developer of this game! ");
//     }else if (playerScore>computerScore){
//         console.log("The winner is you!");
//     }else{
//         console.log("The winner is the computer");
//     }
//}
