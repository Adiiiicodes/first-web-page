document.addEventListener('DOMContentLoaded', () => {
    const choices = ['stone', 'paper', 'scissors'];
    let playerScore = 0;
    let computerScore = 0;

    // Function to get the computer's choice
    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Function to update the display of choices and scores
    function updateDisplay(playerChoice, computerChoice) {
        document.getElementById('player-choice').textContent = `Player chose: ${playerChoice}`;
        document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;
        document.getElementById('player-score').textContent = `Player Score: ${playerScore}`;
        document.getElementById('computer-score').textContent = `Computer Score: ${computerScore}`;
    }

    // Function to handle a round of the game
    function playRound(playerChoice) {
        const computerChoice = getComputerChoice();
        if (playerChoice === computerChoice) {
            updateDisplay(playerChoice, computerChoice);
            return 'It\'s a tie!';
        }

        if (
            (playerChoice === 'stone' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'stone') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            playerScore++;
            updateDisplay(playerChoice, computerChoice);
            return 'You win this round!';
        } else {
            computerScore++;
            updateDisplay(playerChoice, computerChoice);
            return 'Computer wins this round!';
        }
    }

    // Event listeners for game buttons
    document.getElementById('stone-button').addEventListener('click', () => {
        alert(playRound('stone'));
    });

    document.getElementById('paper-button').addEventListener('click', () => {
        alert(playRound('paper'));
    });

    document.getElementById('scissors-button').addEventListener('click', () => {
        alert(playRound('scissors'));
    });
});
