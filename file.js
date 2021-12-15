let roundCounter =0;
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('input')

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


function disableGamePlay(){
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function updatePlayerScore(){
    const text = document.getElementById('playerscore');
    playerScore++;
    text.textContent = `${playerScore}`;

    // if (playerScore == 5){
    //     alert('Player won! Congrats, resetting game');
    //     playerScore = 0;
    //     computerScore =0;
    //     resetScoreboard();
    // }

}
function updateComputerScore(){
    const text = document.getElementById('computerscore');
    computerScore++;
    text.textContent = `${computerScore}`;
    
    // if (computerScore == 5){
    //     alert('Computer won! Better luck next time, resetting game');
    //     playerScore = 0;
    //     computerScore =0;
    //     resetScoreboard();
    // }
}

function playRound(playerSelection,computerSelection){
    roundCounter++;
    const possibleItems = ['rock','paper','scissor'];
    let santiziedPlayerSelectionInput = playerSelection.toLowerCase();

    // if player wins
    if ((santiziedPlayerSelectionInput === 'rock' && computerSelection === 'scissor') ||
    (santiziedPlayerSelectionInput === 'paper' && computerSelection === 'rock') ||
    (santiziedPlayerSelectionInput === 'scissor' && computerSelection === 'paper') ){
        //return "You won!, R
        insertIntoDiv(`Round ${roundCounter}: You won! ${santiziedPlayerSelectionInput} beats ${computerSelection} `);
        updatePlayerScore();
        if (playerScore >= 5){
            insertIntoDiv(`You has won this game!`);
            disableGamePlay();
            return;
        }
        return;
    } //tie
    else if (santiziedPlayerSelectionInput === computerSelection) {
        //return "Wow, it's a tie";
        insertIntoDiv(`Round:${roundCounter}: Wow, it's a tie`);
        return;
    } //computer has won
    else {
        insertIntoDiv(`Round ${roundCounter}: You lost! ${computerSelection} beats ${santiziedPlayerSelectionInput} `);
        updateComputerScore();
        if (computerScore >=5) {
            insertIntoDiv(`Better luck next time!`);
            disableGamePlay();
            return;
        }
    }
    return;

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



