

let computerSelection;
let comwin=0;
let playwin=0;
let playerSelection;

game();

function game(){
    
    console.log("0 for paper");
    console.log("1 for scissor");
    console.log("2 for rock");
    
    
    for(let i=0; i<5; i++){
        playRound();
    }

    if(comwin>playwin){
        console.log("Finally Computer WINS!!!");
    }
    else if(comwin<playwin){
        console.log("Finally You WON!!!");
    }
    else{
        console.log("Whole Match Tied");
    }
}
 
function playRound(){
    
    computerSelection = Math.floor(Math.random()*3);
    playerSelection = window.prompt('Type the number for your choice!!');
    console.log("computer's choice was "+computerSelection);
    console.log("your choice was "+playerSelection);

    if(computerSelection==playerSelection){
            console.log("Match Tied in this Round");
        }

    else if(computerSelection==0 && playerSelection==1){
        console.log("You Won!! scissor beats paper");
        playwin=playwin+1;
    }

    else if(computerSelection==0 && playerSelection==2){
        console.log("You Lose!! Paper beats Rock");
        comwin=comwin+1;}
    

    else if(computerSelection==1 && playerSelection==0){
        console.log("You Lose!! scissor beats paper");
        comwin=comwin+1;
    }

    else if(computerSelection==1 && playerSelection==2){
        console.log("You Won!! Rock beats Scissor");
        playwin=playwin+1;
    }

    else if(computerSelection==2 && playerSelection==0){
        console.log("You Won!! Paper beats Rock");
        playwin=playwin+1;
    }

    else if(computerSelection==2 && playerSelection==1){
        console.log("You Lose!! Rock beats Scissor");
        comwin=comwin+1;
    }

    else{
        
    }
    
    
    
}





