'use strict';

//when user clicks
//generate a random choice of the computer languages
//it should compare the com choice with user choice
//it should show a message about
//it should update the score

let gameRules = {
    'Rock' : {
        'Rock' : 'draw',
        'Scissors' : 'Win',
        'Paper' : 'lose'
    },
    'Paper' : {
        'Paper' : 'draw',
        'Rock' : 'Win',
        'Scissors' : 'lose'
    },
    'Scissors' : {
        'Scissors' : 'draw',
        'Paper' : 'Win',
        'Rock' : 'lose'
    }
}



function clicked(input) 
{
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.trunc(Math.random() * 3);
    let computer_choice = choices[randomNumber];
    document.getElementById('user_choice').innerHTML = `Computer choose <span>${computer_choice.toUpperCase()}</span>`;
    document.getElementById('computer_choice').innerHTML = `You Choose <span>${input.toUpperCase()}</span>`;


    switch(gameRules[input[computer_choice]]) {
        case 'win':
            result.innerHTML = 'You win';
            break;
        case 'lose':
            result.innerHTML = 'You lose';
            break;
        case 'draw':    
            result.innerHTML = 'You draw';
            break;
    }
}