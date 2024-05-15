/*
Project for The Odin Project.

Changing to have ui using previous code
*/
const button_container = document.querySelector("#button-container");
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');


const playButton = document.querySelector('#play-button');
playButton.addEventListener('click', playGame);
playButton.style.backgroundColor = "green";
playButton.style.color = "white";
playButton.style.padding = "10px";
playButton.style.fontSize = "20px";


const resultContainer = document.querySelector("#result-container");


function getComputerChoice(){
    choices = ["rock","paper","scissors"];
    return(choices[(getRandInt(choices.length))] );

}
function getRandInt(max){
    return Math.floor(Math.random()*max);
}

// getComputerChoice()
function playRound(playerSelect, compSelect){
    let whatBeats = new Map([['rock', 'paper'], ['paper', 'scissors'], ['scissors', 'rock']]);
    // values is what beats it
    
    if (whatBeats.get(playerSelect) == compSelect){
        console.log(`Computer chose ${compSelect}\n-Computer Wins`);
        return -1;
    }else if (whatBeats.get(compSelect) == playerSelect){
        console.log(`Computer chose ${compSelect}\n-Player Wins`);
        return 1;
    }else{
        console.log(`Computer chose ${compSelect}\n-No one won.`);
        return 0;
    }
}
function playGame(){
    const roundNum = 5; //change for diff round amounts
    let points =0;
    let round = 1;

    playButton.style.display = "none";

    // makes the buttons visible
    rockButton.style.display = "inline";
    paperButton.style.display = "inline";
    scissorsButton.style.display = "inline";

    

    const buttonHandler = (playerChoice) =>{
        console.log(`Round Number: ${round}`);
        if (round <= roundNum){
        const computerSelection = getComputerChoice();
        result = playRound(playerChoice,computerSelection);
        points += result;
        const winner = result > 0 ? 'Player' : result < 0 ? 'Computer' : 'No one';
        resultContainer.textContent = `Player: ${playerChoice} vs Computer: ${computerSelection}\n Round Winner: ${winner}`;
        }

        round++;
        if (round > roundNum){
            rockButton.style.display = "none";
            paperButton.style.display = "none";
            scissorsButton.style.display = "none";
            let winner = 'No one! It\'s a Tie.';
            console.log(points);
            if (points > 0) {
                winner = 'Player!';
            } else if (points < 0) {
                winner = 'Computer!';
            }
            resultContainer.innerHTML = `The overall winner is ${winner}`;
        }
    }   
    scissorsButton.addEventListener('click', () => {
        buttonHandler('scissors');
    });
    rockButton.addEventListener('click', () => {
        buttonHandler('rock');
    }
    );
    paperButton.addEventListener('click', () => {
        buttonHandler('paper');
    }
    );
    
   
    // for (let i =1; i <= roundNum; i++){
    //     console.log(`===========ROUND ${i}==========`);
    //     // let input = (prompt("Rock, paper, or Scissors?\n").toLowerCase());

    //     const computerSelection = getComputerChoice();
    //     result = playRound(input,computerSelection);
    //     points += result;
    // }
    
    
}



// let input = (prompt("Rock, paper, or Sissors?\n").toLowerCase());
// let computerSelection = getComputerChoice();
// playRound(input,computerSelection);

