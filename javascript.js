let computer_choice = '0';
let player_choice = '0';
let winner = '0';

choices = ['Rock', 'Paper', 'Scissor'];

function getComputerChoice(choices){
    index = Math.floor(Math.random()*choices.length);
    return choices[index];
}

function singleRound(player_selection, computer_selection){
    player_selection = player_selection.toLowerCase();
    computer_selection = computer_selection.toLowerCase();

    if ((player_selection === 'paper') && (computer_selection === 'rock')){
      winner = player_selection;
      return "You Win ! Paper Beats Rock";
    }
    else if(player_selection === 'rock' && computer_selection === 'paper'){
      winner = computer_selection;
      return "You Lose ! Paper Beats Rock";
    }

    if (player_selection === 'scissor' && computer_selection === 'paper'){
      winner = player_selection;
      return "You Win ! Scissor Beats Paper";
      }
      else if(player_selection === 'paper' && computer_selection === 'scissor'){
      winner = computer_selection;
      return "You Lose ! Scissor Beats Paper";
      }
    
    if (player_selection === 'rock' && computer_selection === 'scissor'){
      winner = player_selection;
      return "You Win ! Rock Beats Scissor";
    }
    else if(player_selection === 'scissor' && computer_selection === 'rock'){
      winner = computer_selection;
      return "You Lose ! Rock Beats Scissor";
    }

    if (player_selection === computer_selection) {
        return 'Draw';
    }
}

function game(){
    let player_score = 0;
    let computer_score = 0;
    for (let i = 0; i < 5; i++){
        user_choice = prompt("Enter your choice: ");
        computer_choice = getComputerChoice(choices);
        let result = (singleRound(user_choice, computer_choice));
        console.log(result);
        if(result.includes("Win")){
          player_score += 1;
        } 
        else if (result.includes("Lose")){
          computer_score += 1;
        }
        else {
          player_score += 1;
          computer_score += 1;
        }
    }
    if (player_score > computer_score){
        return "==========\n You Win \n==========";
    }
    else if (player_score < computer_score){
        return "==========\n You Lose \n==========";
    }
    else {
        return "==========\n Draw \n==========";
    }
}

//Single Round Mode
// user_choice = prompt("Enter your choice: ");
// computer_choice = getComputerChoice(choices);
// console.log(singleRound(user_choice, computer_choice));

//Multiple Rounds Mode
console.log(game());