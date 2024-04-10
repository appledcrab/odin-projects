/*
Project for The Odin Project.
just relies on console and prompt.
*/
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
    // console.log(`player selected ${playerSelect}, comp selected ${compSelect}\n${whatBeats.get(playerSelect)} and ${whatBeats.get(compSelect)}`);
    
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
    points =0;
    for (let i =1; i <= roundNum; i++){
        console.log(`===========ROUND ${i}==========`);
        let input = (prompt("Rock, paper, or Scissors?\n").toLowerCase());
        const computerSelection = getComputerChoice();
        result = playRound(input,computerSelection);
        points += result;
    }
    console.log("=========End of game==========");
    let winner = 'No one! Its a Tie.';
    if (points>0){
        winner = 'Player!'
    }else if(points<0){
        winner = 'Computer!'
    }
    console.log(`The winner is......${winner}`);
    
}

// let input = (prompt("Rock, paper, or Sissors?\n").toLowerCase());
// let computerSelection = getComputerChoice();
// playRound(input,computerSelection);
playGame();
