<<<<<<< HEAD
"use strict";
const h1 = document.querySelector('#mainTitle');
console.log(h1);
//---atribute--
/*
sur tout les nos elements html nous pourront trouver une propriete "style".
en modifiant les proprietes de style, nous pourront integrer du css directement sur notre balise.
!! attetion, les proprietes css qui s ecrivement habitulement with tire sont remplece par version camelCase
ex: background-color devient backgroundColor


*/
h1.style.backgroundColor = "rgb(123, 45, 98)";
h1.style.fontStyle = "italic";
h1.style.textShadow = "5px 5px rgba(0,0,0,0.3)";
h1.style.fontSize = "5rem";

//  si on se trompe sur le nom de la propriete, aucune erreur n est envoyer:
h1.style.couleur = "red";//mais evidement ça ne fonctionne pas 
// de meme si la valeur est fausse :
h1.style.color = "rgba(255, 255,255,0.8)";

//----classe----
/*
changer le style peut être pratique mais tres verbeux.
on peut aussi choisir de changer une classe, et donc avoir toute les proprietes de cette classe qui s applequent ou non.

pour cela deux possibilite,
soit className qui permet de recuperer ou changer toute les classes d un coup sous forme de string.

*/
/*
console.log(h1.className);
//je change toute les classes par "banane".
h1.className = "banane";
// je supprime toute les classe
h1.className = "";
//if i want i add single class without delete precedent 
h1.className += "banane";
/*
soit classList return objet "DOMTokenList" contenant toute les classe sous forme de table
*/
/*
console.log(h1.classList)
//supprimer classe
h1.classList.remove("banane");
//ajouter class
h1.classList.add('banane');
// ajouter ou suppr selon si classe est deja presente ou non
h1.classList.toggle("banane");
//retourne true si la classe est presente, ou false dans le cas contraire.
console.log(h1.classList.contains("banane")); */

//--------les autres attributs---------
/*
pour la plupart des autres attribut,
il est possible soit de les appelers directement via leurs noms, soit via les méthods "getAttribute" et "setAttribute"

ici les deux solution ont le meme effet
*/
/*
console.log(h1.id, h1.getAttribute("id"));
//h1.setAttribute("id", h1.getAttribute("id")+"2");
h1.id += "2";

const a = document.querySelector('footer ul li a');
console.log(a);
*/
// setAttribute prend en premier parametre l attribute à changer, et en second, la valeur a lui donner.
//a.setAttribute("target", "_blank");
// getAttribute prend en parametr, l attribut à recuperer
//console.log(a.getAttribute("href"));

/*
On peut selectionner et modifier les  data-attributeq via ".dataset" suivi du nom du data-attribut

*/
/*
console.log(a.dataset.color);
a.dataset.color = "je ne suis pas une couleur!";
//modifier un element qui n existe pas, l'ahouter:
a.dataset.bidule = "je ne sert à rien";
*/
//exc
/* 
    Exercice 1 :
    Changer la taille de chaque paragraphe du main.
    chaque paragraphe doit être plus gros que le précédent.
    
*/
const mainP = document.querySelectorAll("main p");
for(let i=0; i<mainP.length; i++)
{
    mainP[i].style.fontSize = `${1.05*(i+1)}rem`;
}
/*
const taillePolice = ["12px", "16px", "20px", "24px", ]
//
const pp1 = document.querySelector(".marche1");
console.log(pp1);
pp1.style.fontSize = "1em";

const pp2 = document.querySelector(".marche2");
console.log(pp2);
pp2.style.fontSize = "2em";

const pp3 = document.querySelector(".marche3");
console.log(pp3);
pp3.style.fontSize = "3em";

const pp4 = document.querySelector(".marche4");
console.log(pp4);
pp4.style.fontSize = "4em";

const pp5 = document.querySelector(".marche4");
console.log(pp5);
pp5.style.fontSize = "5em";
*/

/*

*/
/* 
    Exercice 2 :
    Faite apparaître la modale via une transition depuis la gauche. 
*/
const ad = document.querySelector('aside');
ad.style.left = "3%";
ad.style.transitionProperty = "left";
ad.style.transitionDuration = "10s";
/* 
    Exercice 3 :
    Faite que la couleur de fond de la modale soit aléatoire à chaque rechargement de la page.
*/
/*sol 1
const div = document.querySelector("div");
f = Math.floor(Math.random()*255);
f1 = Math.floor(Math.random()*255);
f2 = Math.floor(Math.random()*255);
div.style.backgroundColor = 'rgb(${f},${f1},${f2})'; */
/*sol2
let randomC = Math.floor(Math.random()*16777215).toString(16);
div.style.backgroundColor = "#"+randomC;*/
/*
sol3
div.style.backgroundColor = 'rgb(${randomNumber(255)}'
*/
=======
"use strict";
const h1 = document.querySelector('#mainTitle');
console.log(h1);
//---atribute--
/*
sur tout les nos elements html nous pourront trouver une propriete "style".
en modifiant les proprietes de style, nous pourront integrer du css directement sur notre balise.
!! attetion, les proprietes css qui s ecrivement habitulement with tire sont remplece par version camelCase
ex: background-color devient backgroundColor


*/
h1.style.backgroundColor = "rgb(123, 45, 98)";
h1.style.fontStyle = "italic";
h1.style.textShadow = "5px 5px rgba(0,0,0,0.3)";
h1.style.fontSize = "5rem";

//  si on se trompe sur le nom de la propriete, aucune erreur n est envoyer:
h1.style.couleur = "red";//mais evidement ça ne fonctionne pas 
// de meme si la valeur est fausse :
h1.style.color = "rgba(255, 255,255,0.8)";

//----classe----
/*
changer le style peut être pratique mais tres verbeux.
on peut aussi choisir de changer une classe, et donc avoir toute les proprietes de cette classe qui s applequent ou non.

pour cela deux possibilite,
soit className qui permet de recuperer ou changer toute les classes d un coup sous forme de string.

*/
/*
console.log(h1.className);
//je change toute les classes par "banane".
h1.className = "banane";
// je supprime toute les classe
h1.className = "";
//if i want i add single class without delete precedent 
h1.className += "banane";
/*
soit classList return objet "DOMTokenList" contenant toute les classe sous forme de table
*/
/*
console.log(h1.classList)
//supprimer classe
h1.classList.remove("banane");
//ajouter class
h1.classList.add('banane');
// ajouter ou suppr selon si classe est deja presente ou non
h1.classList.toggle("banane");
//retourne true si la classe est presente, ou false dans le cas contraire.
console.log(h1.classList.contains("banane")); */

//--------les autres attributs---------
/*
pour la plupart des autres attribut,
il est possible soit de les appelers directement via leurs noms, soit via les méthods "getAttribute" et "setAttribute"

ici les deux solution ont le meme effet
*/
/*
console.log(h1.id, h1.getAttribute("id"));
//h1.setAttribute("id", h1.getAttribute("id")+"2");
h1.id += "2";

const a = document.querySelector('footer ul li a');
console.log(a);
*/
// setAttribute prend en premier parametre l attribute à changer, et en second, la valeur a lui donner.
//a.setAttribute("target", "_blank");
// getAttribute prend en parametr, l attribut à recuperer
//console.log(a.getAttribute("href"));

/*
On peut selectionner et modifier les  data-attributeq via ".dataset" suivi du nom du data-attribut

*/
/*
console.log(a.dataset.color);
a.dataset.color = "je ne suis pas une couleur!";
//modifier un element qui n existe pas, l'ahouter:
a.dataset.bidule = "je ne sert à rien";
*/
//exc
/* 
    Exercice 1 :
    Changer la taille de chaque paragraphe du main.
    chaque paragraphe doit être plus gros que le précédent.
    
*/
const mainP = document.querySelectorAll("main p");
for(let i=0; i<mainP.length; i++)
{
    mainP[i].style.fontSize = `${1.05*(i+1)}rem`;
}
/*
const taillePolice = ["12px", "16px", "20px", "24px", ]
//
const pp1 = document.querySelector(".marche1");
console.log(pp1);
pp1.style.fontSize = "1em";

const pp2 = document.querySelector(".marche2");
console.log(pp2);
pp2.style.fontSize = "2em";

const pp3 = document.querySelector(".marche3");
console.log(pp3);
pp3.style.fontSize = "3em";

const pp4 = document.querySelector(".marche4");
console.log(pp4);
pp4.style.fontSize = "4em";

const pp5 = document.querySelector(".marche4");
console.log(pp5);
pp5.style.fontSize = "5em";
*/

/*

*/
/* 
    Exercice 2 :
    Faite apparaître la modale via une transition depuis la gauche. 
*/
const ad = document.querySelector('aside');
ad.style.left = "3%";
ad.style.transitionProperty = "left";
ad.style.transitionDuration = "10s";
/* 
    Exercice 3 :
    Faite que la couleur de fond de la modale soit aléatoire à chaque rechargement de la page.
*/
/*sol 1
const div = document.querySelector("div");
f = Math.floor(Math.random()*255);
f1 = Math.floor(Math.random()*255);
f2 = Math.floor(Math.random()*255);
div.style.backgroundColor = 'rgb(${f},${f1},${f2})'; */
/*sol2
let randomC = Math.floor(Math.random()*16777215).toString(16);
div.style.backgroundColor = "#"+randomC;*/
/*
sol3
div.style.backgroundColor = 'rgb(${randomNumber(255)}'
*/
>>>>>>> 6d95df47b5d49909ad9ff032b3bc391ca5fb1679
