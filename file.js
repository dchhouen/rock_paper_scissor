
function getRandomElementRPS(){
    const possibleReturnResults = ['rock','paper','scissor'];
    return possibleReturnResults[Math.floor(Math.random() * possibleReturnResults.length)];
}

function playRound(playerSelection,computerSelection){ 
    const possibleItems = ['rock','paper','scissor'];
    let santiziedPlayerSelectionInput = playerSelection.toLowerCase();

    //tie situation
    if (santiziedPlayerSelectionInput === computerSelection){ 
        return "Wow, it's a tie";
    }
    // if player plays rock, two possible outcome computer select paper or scissor
    if (santiziedPlayerSelectionInput === 'rock' && computerSelection === 'scissor'){
        return "Player won!, Rock beats Scissor";
    }
    else if (santiziedPlayerSelectionInput === 'rock' && computerSelection === 'paper') {
        return "Computer won! Paper beats Rock";
    }
    
    // if player plays paper, two possible outcome computer select rock or scissor
    if (santiziedPlayerSelectionInput === 'paper' && computerSelection === 'rock'){
        return "Player won! Paper beats Rock";
    }
    else if (santiziedPlayerSelectionInput === 'paper' && computerSelection === 'scissor') {
        return "Computer won! Scissor beats Paper";
    }
    // if player plays scissor, two possible outcome computer select rock or paper
    if (santiziedPlayerSelectionInput === 'scissor' && computerSelection === 'rock'){
        return "Computer won! Rock beats Scissor";
    }
    else if (santiziedPlayerSelectionInput === 'scissor' && computerSelection === 'paper') {
        return "Player won! Scissor beats Paper";
    }
    return "I'm not sure who won!"
}

function randomPick(){
    return getRandomElementRPS()
}

function validateInput(input){
    if (input === null) {
        return false;
    }
    const santizedInput = input.toLowerCase();
    return (santizedInput == 'scissor' || santizedInput == 'rock' || santizedInput == 'paper')
}


function game(n){
    const gameCount = Number(window.prompt('How many games do you want to play', '5')); 
    if (gameCount >= 1) {
        for (let i = 1; i <= gameCount; i++){
            let flag = false;
            while (!flag) {
                const playerSelection = window.prompt('Rock, Paper or Scissor?', 'rock');
                let computerSelection = randomPick();
                if (validateInput(playerSelection)) {
                    console.log('game #' +i+ ' ' + playRound(playerSelection, computerSelection));
                    flag = true;
                }
                else {
                    alert('Invalid input, please try again');
                }
            }
        }
    }
    else {
        alert('Enter at least 1 game so we can play');
    }
}

