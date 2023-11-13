"use strict";
/*
//while
/*
While va verifier que ce qui se trouve entre parenthese est "true"
ou "false"
et repeter l action entre accolade "tant que" c'est "true".
!!!attention, de toujours avoir un moyen de sortir de votre boucle.
le navigateur pourra faciliment faire des certaines ou des milleurs de boucle mais il fait infinie, il plantera
*/
/* let a = true;
while (a){
    console.log("coucou");
    // si mon nombre aletoire est plus grand que 0.5, alors la boucle s'arretera
    a = Math.random()<0.5;
}
let b = 0;
while(true)
{
    b++
    // continue met fin à l iteration actuelle et passe à la suivante.
    if(b<10) continue;
    if(b ===20 )break;
    console.log("b vaut ", b);
}

//do while va effectuer son action une premiere fois, avant de verifier si il doit recommencer.
do
{
    console.log("do while : b vaut", b);
} while(b<5) */
//---------FOR--------
/*
for va prendre 3 instructions entre ses parethèses.
- la premiere est une declaration de variable lance avant le debut de la boucle.
- la seconde est une consition qui sera varifier
avant chaque iteration
- la troisieme, une modification de la variable lance à la fin de chaque iteration.
*/

/*for(let i = 0; i < 10; i++)
{
    console.log('i vaut ${i}');
}
let arr = ["pizza", "cannelé", "gratin dauphinois"];
let person = {nom: "Pierre", age: 55, yeux: "vert"}; 
*/
/*
"for in" va creer une iteration pour chaque valeur dans le tableau ou l objet suivant le mot clef "in".
à chaque iteration, la variable definie entre paranthese se verra attribue une nouvelle valeur.
pour un tableau, cela correspondra à chaque index du tableau.
pour un objet, cela correspondra à chaque nom des proprietes.
*/
/*

for(let food in arr)
{
    console.log(`food vaut${food} -> ${arr[food]}`);
}
for(let carac in person)
{
    console.log(`carac vaut${carac} -> ${person[carac]}`);
}
*/
/*
for of - fonctionnera de la meme façon que for in
si ce n'est qu'il recupere directement la valeur et non l'index.

il on fonctionne pas avec les object
*/
/*
for(let f of arr){
    console.log(`f vaut ${f}`);
}
*/
//ceci retourne une erreur
//for(let c of person){}


//----------boucle de tableau--------------
/*
il existe tout un tas de methode (fonction) specifique aux tableaux qui permettent de boucler dessus.
ici on va voir forEach et map, mais il en existe d autres comme reduce per example.
tableau.forEach(fonction);
tableau.map(fonction);
il existe plusieurs façon de donner une fonction en parametre d une autres.Mais on verra cela dans le cours sur les fonctions
forEach va produire une boucle pour chaque element du tableau.
à chaque boucle il appelera la fonction donnee en paramtre.
et placera l element du tableau en paramtre de cette fonction.
si on donne un second parametre a la fonction, il pourra aussi récuperer l index
*/
/*
arr.forEach((f)=>console.log(`forEach: f vaut ${f}`));
arr.forEach((f, i)=>console.log(`forEach: f vaut ${f} et i vaut ${i}`));
*/
/*
"map" va permettre de creer un nouveau tableau à partir d un ancien.
De meme que pour forEach, il va boucle sur chaque element du tableau.
Mais il se servira des valeaurs que l on aura modifie (ou non), pour creer un nouveau tableau.
*/
/*
let newArr = arr.map((f)=>f.toUpperCase());
console.log(arr, newArr);
*/


