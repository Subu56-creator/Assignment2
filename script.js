function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Update images
  document.getElementById('player-img').src = `assets/${playerChoice}.png`;
  document.getElementById('computer-img').src = `assets/${computerChoice}.png`;


  // Update labels
  document.getElementById('player-label').innerText = capitalize(playerChoice);
  document.getElementById('computer-label').innerText = capitalize(computerChoice);

  // Determine result
  let result = '';
  if (playerChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!';
  } else {
    result = 'You lose!';
  }

  document.getElementById('battle-result').innerText = result;

  // Show battle screen
  showPage('battle');
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}


function randomPlay() {
  const options = ['rock', 'paper', 'scissors'];
  const random = () => options[Math.floor(Math.random() * 3)];

  const player = random();
  const computer = random();
  let result = '';

  if (player === computer) result = "It's a draw!";
  else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) result = 'Random Player wins!';
  else result = 'Computer wins!';

  document.getElementById('random-result').innerText =
    `Random chose ${player}, Computer chose ${computer}. ${result}`;
}
