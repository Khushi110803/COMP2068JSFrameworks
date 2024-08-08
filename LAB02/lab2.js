//Name : Khushi Patel 

const prompt = require('prompt');

// Create a schema for the prompt
const schema = {
  properties: {
    choice: {
      description: 'Choose ROCK, PAPER, or SCISSORS',
      pattern: /^(ROCK|PAPER|SCISSORS)$/i, // Accepts ROCK, PAPER, or SCISSORS case-insensitively
      message: 'Please choose ROCK, PAPER, or SCISSORS',
      required: true,
    },
  },
};

// Start the prompt
prompt.start();

// Get user's selection
prompt.get(schema, (err, result) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  const userSelection = result.choice.toUpperCase(); //to avoid uppercase/lowercase-insensitivity
  console.log(`User chose: ${userSelection}`);

  // Generate a random number for computer's selection
  const randomValue = Math.random();
  let computerSelection;

  if (randomValue <= 0.34) {
    computerSelection = 'PAPER';
  } else if (randomValue <= 0.67) {
    computerSelection = 'SCISSORS';
  } else {
    computerSelection = 'ROCK';
  }

  console.log(`Computer chose: ${computerSelection}`);

  // Determine the outcome
  let outcome;

  if (userSelection === computerSelection) {
    outcome = "It's a tie";
  } else if (
    (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    outcome = 'User Wins';
  } else {
    outcome = 'Computer Wins';
  }

  console.log(`Outcome: ${outcome}`);
});
