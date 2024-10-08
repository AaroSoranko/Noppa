'use strict'

const diceImage = document.getElementById('diceImage');


function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
    diceImage.src = `./img/${randomNumber}.png`; // Update the image src attribute
}


diceImage.addEventListener('click', rollDice);
