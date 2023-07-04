//GENERATING RANDOM CHOICE FOR COMPUTER

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  
  //PLAYERS ROUND AGAINST COMPUTER
  
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  
    if (playerSelection === computerSelection.toLowerCase()) {
      return "It's a tie! Both players chose " + computerSelection + ".";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'paper' && computerSelection === 'Rock') ||
      (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
      return "You win! " + playerSelection + " beats " + computerSelection + ".";
    } else {
      return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }
  }
  
  //CHECKING FOR WINNER ON FIVE ROUNDS
  
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
      const computerSelection = getComputerChoice();
  
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.includes("win")) {
        playerScore++;
      } else if (result.includes("lose")) {
        computerScore++;
      }
    }
  
    //ROUNDING UP GAME//
  
    
    if (playerScore > computerScore) {
      console.log("Congratulations! You won the game!");
    } else if (playerScore < computerScore) {
      console.log("Oops! You lost the game.");
    } else {
      console.log("It's a tie! The game ended in a draw.");
    }
  }
  
  game();
  