"use strict";
/*
Math.random() retourne un chiffre aleatoire entre à et 1
Math.floor() retourne le chiffre arrondi à l'inferieur
*/
let x = Math.floor(Math.random()*20);
console.log(x);

/*
une condition commencera obligatoirement par un if il sera suivi de pparanthese contenant la consition puis d'accolade contenant l instruction a realiser.
si la condition est true alors l instruons sera realiser
si elle est false, elle sera ignore.
*/
if(x < 10)
{
    console.log(x + " est plus petit que 10");
}
/*

*/
else if (x > 10)
{
    console.log(x + " est plus grand que 10");
}
/*
on peut optionnalement ajouter en else() qui ne prend aucune condition.
celui ci s effectuer si tout ce qui precede est faux.
*/
else 
{
    console.log("x vaut 10");
}
/* si la condition n'a qu une seule  instruction à effectuer 
alors les acoolades peuventetre oubliees

*/
if (x < 10) console.log(x + " est plus petit que 10");
else if (x > 10)
console.log(x + " est plus grand que 10");
else console.log("x vaut 10");
/*
on peut ecrire une suite de condition sur une seule ligne, cela se nomme une terminaire.

il vaut mieux utiliser cela dans le cas d une operation simple.
syntaxe :
condition ? true : false;
*/
let message = x<10 ? x + " est plus petit que 10": x + "est plus grand ou egale à 10";
console.log(message);
// attention de ne pas aller trop loin avec les ternaires au risque de perdre en lisibilite :
x<10 ?
x + " est plus petit que 10":
x>10 ?
 x+"est plus grand que 10":
 "x vaut 10";
 console.log(message);

 //---switch---
 //prompt afiiche une boite de dialogue où l utilisateur puet rentrer un texte.
 let ville = prompt("De quel ville venez-vous?");
 console.log(ville);

 // si utilisateur  appui sur "annule", la valeur retourne sera "null"
 if(ville == null) ville = "pas de reponse";
 /*
 switch permet de verifier plusieurs cas, il prendra une variable entre parenthese, puis autant de "case" que l on souhaite.
 chacun reprsentera un valeur possible de notre variable.
 il sera suivi des instructions voulu, puis d un "break" qui mettra fin au "case"
 */
/*switch(ville.toLocaleLowerCase())
{
    // plusieurs cas sans break pour les separer, entrainera lecture de tout le code jusqu'au prochaine break.
    case "londre":
    case "tokyo":
    case "paris":
        console.log("De la capital donc.");
        break;
    case "moscow":
        console.log("It's capital of Russia and beautiful city of the world.");
        break;
        // break;
    case "lille":
        console.log("êtes vous un ch'ti?");
        break;
    default:
        console.log("Je ne connais pas cette ville.");
} */







