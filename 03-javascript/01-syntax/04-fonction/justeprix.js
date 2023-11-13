"use strict";
/*var cible = Math.floor(Math.random() * 1000) + 1;
var nombre, compteur;
for (compteur=1; compteur<=10; compteur+=1) {
    nombre = parseInt(prompt("donnez un chiffre:"),10);
    if (nombre === cible) {alert("Bravo");
        break;
    }
    if (nombre > cible) {
        alert("trop grand");
    }
    if (nombre < cible) {
        alert("trop petit");
    }

    else { 
        alert("ce n'est pas un chiffre");
        compteur-=1;
}
}
alert("c'est fini. le chiffre cherche est : " + cible);*/
function guessNumber() {

    // generating a random integer from 1 to 10
    const random = Math.floor(Math.random() * 10) + 1;

    // take input from the user
    let number = parseInt(prompt('Guess a number from 1 to 10: '));

    // take the input until the guess is correct
    while(number !== random) {
        number = parseInt(prompt('Guess a number from 1 to 10: '));
    }

    // check if the guess is correct
    if(number == random) {
        console.log('You guessed the correct number.');
    }

  }

// call the function
guessNumber();
