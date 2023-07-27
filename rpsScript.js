const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const outcome = document.querySelector('.outcome'); 
const container = document.querySelector('.container');
const score = document.querySelector('.score');
const endgame = document.querySelector('.endgame');
const startOver = document.querySelector('.startover')

const h3 = document.createElement('h3');
const p = document.createElement('p');
const h1 = document.createElement('h1');
const restart = document.createElement('button');
restart.classList.add('restart')
restart.textContent = 'Play Again';

endgame.style.cssText = 'color: var(--base-color);'
h1.style.cssText = 'display: flex; justify-content: center;'
restart.style.cssText = 'display: flex; align-items: center; justify-content: center;'

startOver.style.cssText = 'display: flex; justify-content: center;'

let wins = 0;
let comWins = 0;

function getComputerChoice() {
    const rps = ['Rock', 'Paper', 'Scissors']
    random = Math.floor(Math.random() * rps.length)
    return rps[random]
}

p.textContent = 'Select a button:'
h3.textContent = `You: ${wins} | Computer: ${comWins}`
score.appendChild(h3)
outcome.appendChild(p)

function play(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase().replace(playerSelection[0], playerSelection[0].toUpperCase())

    if (playerSelection == 'Rock' && computerSelection == 'Paper') { 
        comWins += 1; 
        p.textContent = 'Paper beats Rock! You Lose :(';
        outcome.appendChild(p)
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') { 
        wins += 1; 
        p.textContent = 'Rock beats Scissors! You Win :D';
        outcome.appendChild(p)
    }

    else if (playerSelection == 'Paper' && computerSelection == 'Rock') { 
        wins += 1; 
        p.textContent = 'Paper beats Rock! You Win :D';
        outcome.appendChild(p)
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') { 
        comWins += 1; 
        p.textContent = 'Scissors beats Paper! You Lose :(';
        outcome.appendChild(p)
    }

    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') { 
        comWins += 1; 
        p.textContent = 'Rock beats Scissors! You Lose :(';
        outcome.appendChild(p)
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') { 
        wins += 1; 
        p.textContent = 'Scissors beats Paper! You Win :D';
        outcome.appendChild(p)
    }

    else { 
        p.textContent = 'It\'s a tie!';
        outcome.appendChild(p);
    }
    h3.textContent = `You: ${wins} | Computer: ${comWins}`
    score.appendChild(h3)
}

function game() {
    if (wins === 5) { 
        h1.innerHTML = 'You Win the Match!';
        endgame.classList.add('active')
        startOver.classList.add('active')
        endgame.appendChild(h1);
        startOver.appendChild(restart)
    }
    else if (comWins === 5) {      
        h1.innerHTML = 'Computer beats Human!';
        endgame.classList.add('active')
        startOver.classList.add('active')
        endgame.appendChild(h1);
        startOver.appendChild(restart)
    }
}

rock.addEventListener('click', () => {
    if (wins < 5 && comWins < 5) {
        play('rock', getComputerChoice());
        game()        
    }
})
paper.addEventListener('click', () => {
    if (wins < 5 && comWins < 5) {
        play('paper', getComputerChoice());
        game()        
    }
})
scissors.addEventListener('click', () => {
    if (wins < 5 && comWins < 5) {
        play('scissors', getComputerChoice());
        game()        
    }
})
restart.addEventListener('click', () => {
    h3.textContent = `You: 0 | Computer: 0`
    wins = 0;
    comWins = 0;
    endgame.classList.remove('active')
    startOver.classList.remove('active')
    p.textContent = 'Select a Button:'
    game()
})





