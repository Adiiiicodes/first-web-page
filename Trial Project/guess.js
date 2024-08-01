document.addEventListener('DOMContentLoaded', () => {
    const maxNumber = 99;
    let targetNumber = Math.floor(Math.random() * (maxNumber + 1));
    let attempts = 0;

    // Function to handle the guess
    function handleGuess() {
        const userInput = document.getElementById('guess-input').value;
        const userGuess = parseInt(userInput, 10);
        attempts++;

        let message = '';

        if (isNaN(userGuess)) {
            message = 'Please enter a valid number!';
        } else if (userGuess === targetNumber) {
            message = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
            // Reset the game
            targetNumber = Math.floor(Math.random() * (maxNumber + 1));
            attempts = 0;
        } else if (userGuess < targetNumber) {
            message = 'Too low! Try again.';
        } else {
            message = 'Too high! Try again.';
        }

        document.getElementById('game-status').textContent = message;
        document.getElementById('user-guess').textContent = `Your Guess: ${userGuess}`;
    }

    // Event listener for the guess button
    document.getElementById('guess-button').addEventListener('click', handleGuess);
});
