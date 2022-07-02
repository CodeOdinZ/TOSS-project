
computerSelection = Math.floor(Math.random()*3);

console.log("0 for paper");
console.log("1 for scissor");
console.log("2 for rock");
const playerSelection = window.prompt('Type the number for your choice!!');
 
function playRound(cselect,pselect){
    
    
    if(cselect==0 && pselect==2){
        console.log("You Lose!! Paper beats Rock");
    }
    else if(cselect==2 && pselect==0){
        console.log("You won!! Paper beats Rock");
    }

    else {
    
    
        if(cselect>pselect){
        
            if(pselect==0){
            console.log("You Lose!! Scissor beats Paper");
            }
            else (pselect==1)
            console.log("You Lose!! Rock beats Scissor");
        
        
            }

        else {
        
            if(cselect==0){
            console.log("You Won!! Scissor beats Paper");
            }
            else (cselect==1)
            console.log("You Won!! Rock beats Scissor");
        }

    }

    }

playRound(computerSelection,playerSelection);
console.log("computer's choice was "+computerSelection);