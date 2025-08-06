
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
let randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice(){
    let message = "Choose between rock, paper, scissors: "
    let choice = prompt(message)
    return choice
}


function playRound() {
    let humanChoice  = getHumanChoice()
    humanChoice = humanChoice.toLocaleLowerCase()
    let computerChoice = getComputerChoice()
    if (humanChoice === computerChoice) {
        return "Empate"
    } else if (    
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore += 1
        return "Winner"
    } else {
        computerScore += 1
        return "Loser!"
    }
}

function playGame(){

    repeat = 0
    while(repeat < 5){
        playRound()
        repeat += 1
    }

    if(humanScore > computerScore){
        console.log("You won!")
        
    } else if (humanScore < computerScore) {
        console.log("Computer won!");
    } else {
        console.log("It's a draw!");
    }   
    
    console.log("Your score: " + humanScore)
    console.log("Computer score: " + computerScore)
}

console.log(playGame())
