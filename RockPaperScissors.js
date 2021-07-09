console.log("Hello World");
//Generates a random option to act as the computer
function computerPlay(){
    let choice = Math.floor(Math.random()*3+1);
    //console.log(choice);
    if (choice == 1){
        return "Rock";

    }else if (choice == 2){
        return "Paper";

    }else{
        return "Scissors";
    }
}

//console.log(computerPlay());

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return "It's a Tie! You both chose the same";
    }else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        return "You Lose! Paper beats Rock";

    }else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors"){
        return "You Win! Rock beats Scissors";

    }else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors"){
        return "You Lose! Scissors beats Paper";

    }else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        return "You Win! Paper beats Rock";

    }else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        return "You Win! Scissors beats Paper";

    }else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
        return "You Lose! Rock beats Scissors";

    }else{
        return "Wrong Choice" 
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

function game(){
    for(let i = 0; i<5; i++){
        console.log(playRound(prompt("Please enter: Rock, Paper or Scissors"),computerPlay()));
    }
}

game();
