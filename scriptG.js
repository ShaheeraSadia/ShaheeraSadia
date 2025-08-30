const userChoiceElement = document.getElementById('user-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const outcomeElement = document.getElementById('outcome');

const choices = ['rock', 'paper', 'scissors'];

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

function playGame(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  const result = getResult(userChoice, computerChoice);

  userChoiceElement.textContent = `Your Choice: ${userChoice}`;
  computerChoiceElement.textContent = `Computer's Choice: ${computerChoice}`;
  outcomeElement.textContent = `Result: ${result}`;
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a draw!';
  }

  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You Win!';
  } else {
    return 'Computer Wins!';
  }
}
