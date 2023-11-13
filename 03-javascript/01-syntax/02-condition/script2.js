"use strict";
//exercise
/*
let nbre = prompt("Choose number?");
if(nbre < 0) {
console.log(" Le nombre est inferier à 0");
}
else if(nbre > 0) {
console.log(" Le nombre est superier à 0"); 
}
else console.log("Le nombre vaut zéro.");
*/



/*
let a = prompt ("Choose the number :");
let b = prompt("Choose the number :");
let produit = a*b;
if ( (Math.sign(a) === -1 && Math.sign(b) === -1)){
    console.log("c'est positif");
}
else if((Math.sign(a) === 1 && Math.sign(b) === 1)) {
    console.log("c'est positif");
}
else if((Math.sign(a) === -1 || Math.sign(b) === -1)) {
    console.log("c'est negatif");
}
*/

/*
let d = prompt("choisi un noms :");
let e = prompt("choisi un 2eme noms :");
let f = prompt("choisi 3eme noms :");
let g = [d,e,f];
let h = [d,e,f];
let j = h.sort();
console.log(g);
console.log(j);

if (nom1 < nom2 && nom2 < nom3)
{
    console.log("rangé");
}
else 
{
    console.log("non rangé");
}
*/
let age = prompt("votre age");
switch(age)
{
    case "6":
    case "7":
        console.log("poussin");
        break;
    case "8":
    case "9":
        console.log("pouille");
        break; 
    case "10":
    case "11":
    console.log("Minime");
    break;
    default:
        if(age < 6) console.log("trop petit");
        else console.log("cadet");
}
// exo 4.2
/*let heure = prompt("donnez l'heaure");
let minute = prompt("donnez les minutes");

minute++;

if(minute == 60)
{
    heure++;
    minute -= 60;
}
if (heure ==  24)
{
    console.log('dans une minute il sera ${heure} : ${minute}');
}*/
/*if (++==60)
{
    s=0;
    if(++m=60) 
    {
     m=0;
     if (++h==24);
    }
}*/
// exo 4.4
let nbPhoto = prompt("nombre photocopie");
if(nbPhoto > 0 && nbPhoto < 10)
{
    console.log(nbPhoto*0.10 + "$");
}
else if (nbPhoto > 10 && nbPhoto < 20)
{
    console.log(nbPhoto*0.9 + "$");
}
else if (nbPhoto>30)
{
    prix += 10 * 0.10 + nbPhoto
}






