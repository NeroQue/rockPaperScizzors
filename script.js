function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getPlayerChoice() {
    const playerChoice = prompt('Enter your choice: rock, paper, or scissors');
    return playerChoice;
}

function gameLoop() {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(`Player choice: ${playerChoice}, Computer choice: ${computerChoice}`);

    if (playerChoice === computerChoice) {
        console.log('It\'s a tie!');
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        console.log('Player wins!');
    } else {
        console.log('Computer wins!');
    }
}

function playGame() {
    gameLoop();
}
document.getElementById('startGame').addEventListener('click', playGame);
