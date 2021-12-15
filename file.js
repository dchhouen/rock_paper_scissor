//global variable
var roundCounter = 0;

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
        return;
    }
    else if (santiziedPlayerSelectionInput === 'rock' && computerSelection === 'paper') {
        insertIntoDiv(`Round ${roundCounter}: You lost! Paper beats Rock`);
        return;
    }
    
    // if player plays paper, two possible outcome computer select rock or scissor
    if (santiziedPlayerSelectionInput === 'paper' && computerSelection === 'rock'){
        insertIntoDiv(`Round ${roundCounter}: You won! Paper beats Rock`);
        return;
    }
    else if (santiziedPlayerSelectionInput === 'paper' && computerSelection === 'scissor') {
        insertIntoDiv(`Round ${roundCounter}: You lost! Scissor beats Paper`);
        return;
    }
    // if player plays scissor, two possible outcome computer select rock or paper
    if (santiziedPlayerSelectionInput === 'scissor' && computerSelection === 'rock'){
        insertIntoDiv(`Round ${roundCounter}: You lost! Rock beats Scissor`);
        return;
    }
    else if (santiziedPlayerSelectionInput === 'scissor' && computerSelection === 'paper') {
        insertIntoDiv(`Round ${roundCounter}: You won! Scissor beats Paper`);
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



