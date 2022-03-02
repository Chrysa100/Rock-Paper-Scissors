
 let computerScore=0;
 let playerScore=0;

 game();

function game(){
   
    for(let round=0; round<5; round++ ){  // play only 5 rounds
        console.log("ROUND: " , +(round+1));
        playerSelection=playerPlay();
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log("playerScore is " ,playerScore);
        console.log("computerScore is " ,computerScore);
    }

    let winner="";
    if(playerScore==computerScore){
        console.log("The winner is the developer of this game! ");
    }else if (playerScore>computerScore){
        console.log("The winner is you!");
    }else{
        console.log("The winner is the computer");
    }
}

function computerPlay(){ 
    let computerChoice="";
    let zaria=Math.floor(Math.random() * 3);//returns a random integer from 0 to 2
    if (zaria===0){
        computerChoice="rock";
     }else if (zaria===1){
        computerChoice="paper"   
    }else {
        computerChoice="scissors"
    }
    console.log("computerChoice: ",computerChoice);
    return(computerChoice); 
}

function playerPlay(){
    do{
        playerChoice=prompt("Write rock, paper or scissors", "").toLowerCase();
    }while (playerChoice !=="rock" &&
        playerChoice !=="paper" &&
        playerChoice !=="scissors");
    console.log("Your Choice: ", playerChoice);
    return playerChoice;
}

function playRound(playerSelection,computerSelection){
 //   while(computerScore <5 || playerScore<5){   //till someone gets score 5
        if (playerSelection===computerSelection){
         console.log("It's a draw! Continue.")
        }else if ((playerSelection==="rock" && computerSelection==="paper") 
            || (playerSelection==="paper" && computerSelection==="scissors")
            || (playerSelection==="scissors" && computerSelection==="rock")) {
            console.log("You Lose! ", computerSelection, " beats ", playerSelection); 
            computerScore +=1;
              
        }else{
            console.log("You Win! ",playerSelection, " beats ", computerSelection );
            playerScore +=1;
            
       // }if (computerScore>playerScore){
       //     return(computer)
        };
 //   }    
}   
