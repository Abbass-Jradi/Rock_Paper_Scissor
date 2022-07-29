var computer_choice = '0';
var player_choice = '0';

choices = ['Rock', 'Paper', 'Scissor'];

function getComputerChoice(choices){
    index = Math.floor(Math.random()*choices.length);
    return choices[index];
}

