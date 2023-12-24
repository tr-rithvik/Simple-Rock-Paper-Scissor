const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }

    if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        return 'You win!';
    }

    return 'You lose!';
}

function makeChoice(userChoice) {
    const computerChoice = getComputerChoice();
    const resultElement = document.getElementById('result');
    const result = determineWinner(userChoice, computerChoice);

    resultElement.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
}