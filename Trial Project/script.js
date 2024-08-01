
function showGame(gameId) {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('stp-game').style.display = 'none';
    document.getElementById('guess-game').style.display = 'none';
    document.getElementById(gameId).style.display = 'block';
}

// Existing STP and Guess Game logic
function playSTP() {
    // Your STP game logic here
}

function playGuess() {
    // Your Guessing game logic here
}



// STP Game Logic
function playSTP() {
    const chars = ['Stone', 'Paper', 'Scissors'];
    let computerScore = 0;
    let playerScore = 0;
    
    const rounds = parseInt(document.getElementById('rounds').value);
    const bestOf = parseInt(document.getElementById('best-of').value);
    
    for (let i = 0; i < rounds; i++) {
        const computerChoice = chars[Math.floor(Math.random() * chars.length)];
        const playerChoice = prompt("Choose Stone, Paper, or Scissors: ").toLowerCase();
        
        document.getElementById('computer-choice').textContent = computerChoice;
        document.getElementById('player-choice').textContent = playerChoice;

        if (computerChoice.toLowerCase() === playerChoice) {
            continue;
        } else if ((computerChoice === 'Stone' && playerChoice === 'paper') ||
                   (computerChoice === 'Paper' && playerChoice === 'scissors') ||
                   (computerChoice === 'Scissors' && playerChoice === 'stone')) {
            playerScore++;
        } else {
            computerScore++;
        }
        
        document.getElementById('computer-score').textContent = `Computer: ${computerScore}`;
        document.getElementById('player-score').textContent = `You: ${playerScore}`;
        
        if (playerScore >= bestOf || computerScore >= bestOf) {
            break;
        }
    }
    
    if (playerScore > computerScore) {
        alert("You win!");
    } else {
        alert("Computer wins!");
    }
}

// Number Guessing Game Logic
let randomNumber = Math.floor(Math.random() * 100); // Generate random number between 0 and 99
let attempts = 0;

function playGuess() {
    const userGuess = parseInt(document.getElementById('guess-input').value);
    const gameStatus = document.getElementById('game-status');
    attempts++;

    if (userGuess === randomNumber) {
        gameStatus.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts!`;
        document.getElementById('guess-input').disabled = true;
    } else if (userGuess > randomNumber) {
        gameStatus.textContent = "Too high! Try again.";
    } else {
        gameStatus.textContent = "Too low! Try again.";
    }

    document.getElementById('user-guess').textContent = `Your Guess: ${userGuess}`;
}

const buttons = document.querySelectorAll('.game-button');

buttons.forEach(button => {
    button.addEventListener('mousemove', (event) => {
        // Get button dimensions and cursor position
        const buttonRect = button.getBoundingClientRect();
        const x = event.clientX - buttonRect.left; // Mouse X position relative to button
        const y = event.clientY - buttonRect.top;  // Mouse Y position relative to button
        const centerX = buttonRect.width / 2;
        const centerY = buttonRect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10; // Calculate rotation on X axis
        const rotateY = ((x - centerX) / centerX) * 10;  // Calculate rotation on Y axis

        // Apply rotation based on cursor position
        button.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.2)`;
    });

    button.addEventListener('mouseleave', () => {
        // Reset rotation and scale when cursor leaves
        button.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    });
});

document.querySelector('#stp-button').addEventListener('click', () => {
    window.location.href = 'stp.html'; // Navigate to Stone Paper Scissors page
});

document.querySelector('#guess-button').addEventListener('click', () => {
    window.location.href = 'guess.html'; // Navigate to Number Guessing Game page
});




