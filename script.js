const choices = {
    rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
    paper: { name: 'Paper', defeats: ['rock', 'spock'] },
    scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
    lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
    spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

// DOM Elements
const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoise');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoise');
const resultText = document.getElementById('resultText');
//player choices
const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');
//computer choices
const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');
let computerChoice = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;

// reset score 
function resetScore() {

    playerScoreNumber = 0;
    computerScoreNumber = 0;

    playerScoreEl.textContent = 0;
    computerScoreEl.textContent = 0;
    playerChoiceEl.textContent = '';
    computerChoiceEl.textContent = '';
    resetSelected()
}

//Reset all selected Icons
function resetSelected() {
    allGameIcons.forEach((icon) => {
        icon.classList.remove('selected')
    })
}

//Random Computer Choice
function computerRandomChoice() {
    const computeChoiceNumber = Math.random();
    if (computeChoiceNumber < 0.2) {
        computerChoice = 'rock';
    } else if (computeChoiceNumber <= 0.4) { computerChoice = 'paper' } else if (computeChoiceNumber <= 0.6) { computerChoice = 'scissors' } else if (computeChoiceNumber <= 0.8) {
        computerChoice = 'lizard'
    } else {
        computerChoice = 'spock'
    }

}

// Add selected styling & player chocie
function displayComputerChoise() {
    switch (computerChoice) {
        case 'rock':
            computerRock.classList.add('selected');
            computerChoiceEl.textContent = '---rock'
            break;
        case 'paper':
            computerPaper.classList.add('selected');
            computerChoiceEl.textContent = '---paper'
            break;
        case 'scissors':
            computerScissors.classList.add('selected');
            computerChoiceEl.textContent = '---scissors'
            break;
        case 'lizard':
            computerLizard.classList.add('selected');
            computerChoiceEl.textContent = '---lizard';
            break;
        case 'spock':
            computerSpock.classList.add('selected')
            computerChoiceEl.textContent = '---spock';
            break;


        default:
            break;
    }
}

// Check Result increase scores upodte text result
function updateScore(playerChoice) {
    if (playerChoice === computerChoice) {
        resultText.textContent = 'its a Draw'
    } else {
        const choice = choices[playerChoice];
        if (choice['defeats'].indexOf(computerChoice) > -1) {
            resultText.textContent = 'You Won'
            playerScoreNumber++;
            playerScoreEl.textContent = playerScoreNumber
        } else {
            resultText.textContent = 'You Lost'
            computerScoreNumber++;
            computerScoreEl.textContent = computerScoreNumber



        }
    }
}

// call functions to process turn
function checkResult(playerChoice) {
    resetSelected();

    computerRandomChoice();
    displayComputerChoise();

    updateScore(playerChoice);

}

// passing player selection value and style icons
function select(playerChoice) {
    checkResult(playerChoice);

    // Add selected styling & player chocie
    switch (playerChoice) {
        case 'rock':
            playerRock.classList.add('selected');
            playerChoiceEl.textContent = '---rock'
            break;
        case 'paper':
            playerPaper.classList.add('selected');
            playerChoiceEl.textContent = '---paper'
            break;
        case 'scissors':
            playerScissors.classList.add('selected');
            playerChoiceEl.textContent = '---scissors'
            break;
        case 'lizard':
            playerLizard.classList.add('selected');
            playerChoiceEl.textContent = '---lizard';
            break;
        case 'spock':
            playerSpock.classList.add('selected')
            playerChoiceEl.textContent = '---spock';
            break;


        default:
            break;
    }
}