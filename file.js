//global variable
var roundCounter = 0;
var playerScore = 0;
var computerScore = 0;
function getRandomElementRPS(){
    const possibleReturnResults = ['rock','paper','scissor'];
    return possibleReturnResults[Math.floor(Math.random() * possibleReturnResults.length)];
}

function insertIntoDiv(textContent){
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = textContent;
    container.appendChild(content);

}

function resetScoreboard(){
    document.getElementById('playerscore').textContent = `${playerScore}`;
    document.getElementById('computerscore').textContent = `${playerScore}`;
}

function updatePlayerScore(){
    const text = document.getElementById('playerscore');
    playerScore++;
    text.textContent = `${playerScore}`;

    if (playerScore >=5){
        alert('Player won! Congrats, resetting game');
        playerScore = 0;
        computerScore =0;
        resetScoreboard();
    }

}
function updateComputerScore(){
    const text = document.getElementById('computerscore');
    computerScore++;
    text.textContent = `${computerScore}`;
    
    if (computerScore >=5){
        alert('Computer won! Better luck next time, resetting game');
        playerScore = 0;
        computerScore =0;
        resetScoreboard();
    }
}

function playRound(playerSelection,computerSelection){
    roundCounter++;
    const possibleItems = ['rock','paper','scissor'];
    let santiziedPlayerSelectionInput = playerSelection.toLowerCase();

    //tie situation
    if (santiziedPlayerSelectionInput === computerSelection){ 
        //return "Wow, it's a tie";
        insertIntoDiv(`Round:${roundCounter}: Wow, it's a tie`);
        return;
    }
    // if player plays rock, two possible outcome computer select paper or scissor
    if (santiziedPlayerSelectionInput === 'rock' && computerSelection === 'scissor'){
        //return "You won!, Rock beats Scissor";
        insertIntoDiv(`Round ${roundCounter}: You won!, Rock beats Scissor`);
        updatePlayerScore();
        return;
    }
    else if (santiziedPlayerSelectionInput === 'rock' && computerSelection === 'paper') {
        insertIntoDiv(`Round ${roundCounter}: You lost! Paper beats Rock`);
        updateComputerScore();
        return;
    }
    
    // if player plays paper, two possible outcome computer select rock or scissor
    if (santiziedPlayerSelectionInput === 'paper' && computerSelection === 'rock'){
        insertIntoDiv(`Round ${roundCounter}: You won! Paper beats Rock`);
        updatePlayerScore();
        return;
    }
    else if (santiziedPlayerSelectionInput === 'paper' && computerSelection === 'scissor') {
        insertIntoDiv(`Round ${roundCounter}: You lost! Scissor beats Paper`);
        updateComputerScore();
        return;
    }
    // if player plays scissor, two possible outcome computer select rock or paper
    if (santiziedPlayerSelectionInput === 'scissor' && computerSelection === 'rock'){
        insertIntoDiv(`Round ${roundCounter}: You lost! Rock beats Scissor`);
        updateComputerScore();
        return;
    }
    else if (santiziedPlayerSelectionInput === 'scissor' && computerSelection === 'paper') {
        insertIntoDiv(`Round ${roundCounter}: You won! Scissor beats Paper`);
        updatePlayerScore();
        return;
    }
    insertIntoDiv("I'm not sure who won!");
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
    for (let i = 1; i <= n; i++){
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



