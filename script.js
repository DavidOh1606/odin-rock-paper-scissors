playGame();


function getComputerChoice() {
    let choiceInt = Math.floor(Math.random() * 3);

    if (choiceInt === 0) {
        return "rock";
    }

    else if (choiceInt === 1) {
        return "paper";
    }

    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors: ");

    return choice;
}

function playGame() {
    const NUM_ROUNDS = 5;
    
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < NUM_ROUNDS; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }

    if (humanScore === computerScore) {
        console.log("You drew with the computer!");
    }

    else if (humanScore > computerScore) {
        console.log("You won!!");
    }

    else {
        console.log("You lost :(");
    }



    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            return "You tie! Computer also played " + computerChoice;
        }

        if (computerChoice === "rock") {
            if (humanChoice === "paper") {
                return playerWon(humanChoice, computerChoice);
            }

            return playerLost(humanChoice, computerChoice);
        }

        else if (computerChoice === "paper") {
            if (humanChoice === "scissors") {
                return playerWon(humanChoice, computerChoice);
            }

            return playerLost(humanChoice, computerChoice);
        }

        else if (computerChoice === "scissors") {
            if (humanChoice === "rock") {
                return playerWon(humanChoice, computerChoice);
            }

            return playerLost(humanChoice, computerChoice);
        }
    }

    function playerWon(humanChoice, computerChoice) {
        humanScore++;
        return "You won! " + humanChoice + " beats " + computerChoice;
    }

    function playerLost(humanChoice, computerChoice) {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
}