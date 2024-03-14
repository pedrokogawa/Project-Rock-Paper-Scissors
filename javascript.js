function getComputerChoice() {
    var options = ["Rock", "Scissors", "Paper"];
    var pcChoice = options[Math.floor((Math.random()*3))];
    return pcChoice
}

function playRound (playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if ((playerSelection == "rock" && computerSelection== "paper") || (playerSelection == "paper" && computerSelection== "scissors") || (playerSelection == "scissors" && computerSelection== "rock")){
        return "You lose. - " + playerSelection + " x " + computerSelection  
    }

    else if ((playerSelection == "rock" && computerSelection== "rock") || (playerSelection == "paper" && computerSelection== "paper") || (playerSelection == "scissors" && computerSelection== "scissors")){
        return "It was a tie. - " + playerSelection + " x " + computerSelection; 
    }
    else{
        return "You won. - " + playerSelection + " x " + computerSelection;
    }
}

function playGame(){

    const playerSelection = prompt("Choose your janken: ");
    const computerSelection = getComputerChoice();
    // console.log(playRound(playerSelection, computerSelection));
    return playRound(playerSelection, computerSelection);

}

console.log(playGame());
