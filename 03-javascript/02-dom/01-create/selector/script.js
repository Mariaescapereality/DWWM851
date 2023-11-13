"use strict";
/*
document.getElementsByTagName()
il permet de récuperer tous les elements dont le nom de la balise vaut le parametre donne

si je veux tous les li de la page
*/
const lis = document.getElementsByTagName("li");
console.log(lis, lis[0]);
/*
peu importe qu il y a aucun, un ou plusieurs resultats, ce sera rangé dans un objet appele "HTMLCollection"
il fonctionnera un peu comme un tableau.
si je veux le premier element, je tape[0]

ici j'ai cherche dans tous mon document,
si je voudrais chercher par example, que dans le footer.
il me faudrait d'abbord selectionner le foter le footer 
const footer = document.getElementsByTagName("footer");
puis lui dire:
footer.getElementsByTagName("li");

*/
lis[0].textContent = "Marbre";

/*
document.getElementsByClassName(),
il fonctionnera axactement comme getElementsByTagName, si ce n est pas qu il selectionnera les elements via le nom de leurs classes
*/
const ps = document.getElementsByClassName("step");
const p1 = document.getElementsByClassName("marche1");
console.log(ps, p1);

/*
document.getElementsById()
il va recuperer l element HTML qui possede l'id donné en parametre.
Pas de HTMLCollection ici
*/
const h1 = document.getElementById("mainTitle");
console.log(h1);

/*
querySelector()
il va selectionner le premier element qui correspond à son parametre.

il prendra en parametre, un string, contanant n importe quel selecteur CSS
*/
const p2 = document.querySelector(".marche2");
//const p2 = document.querySelector("main >p:nth-of-type(2)");
//const p2 = document.querySelector("body main >p.marche2");
console.log(p2);
/*
querySelectorAll()
Il selectionnera tous les elements qui correspond à son parametre.

à la difference des autres méthodes de selection, on obtient pas un objet "HTMLCollection"
mais un tableau "NodeList"


*/

const lis2 = document.querySelectorAll("footer li");
console.log(lis2, lis2[0]);
/*
pareillement qu avec les precedents, je peux faire ma recherche dans un element precis:
*/
const header = document.querySelector('header');
const h = header.querySelector('h1');

//---------quelques selecteurs bonus-----------
//Selectionne le prochain élément frere en html ici le main
console.log(header.nextElementSibling);
//selectionne ce qui suit dans le html, ici le saut à la ligne et l'indentation.
console.log(header.nextSibling);
//selection l element HTML precedent, ici le second li.
console.log(lis2[2].previousElementSibling);
//retourne un objet HTMLCollection contenant tous les enfants directe
console.log(header.children)
//retourne le parent de l élément HTML
console.log(lis[2].parentElement, header.parentElement);
//retourne le parent le plus proche qui correspond au selecteur CSS
console.log(lis[2].closest("footer"));

/*
//---------Supprimer ou Déplacer---------------
//pour deplacer un element, il suffit de l'append ailleurs
header.append(lis2[0]);
// remove supprime l'element du HTML
lis2[2].remove();
//mais il existe toujours dans la variable JS
console.log(lis2[2]);

// il existe aussi pour supprimer:
// header.removeChild(h);

//lis2[1].parentElement.append(lis2[2]);
*/

// ------------EXO 1 ---------------
// Déplacer la modale dans le body.


const mt = document.querySelector('aside div');
document.body.append(mt);



// ----------- EXO 2 ---------------
// modifier le texte des 3 li du footer, si possible avec une boucle.

/*lis[0].textContent = "pizza";

lis[1].textContent = "chocolate";

lis[2].textContent = "cupcake";*/


/* in boucle
const li34 = document.querySelectorAll("footer li");
for (let i = 0; i < li34.length; i++)
{
   li34[i].textContent =  "hello";
}
//2

li34.forEach(textChange);
function textChange(el)
{
    el.textContent = "Change d'une autre maniere";
}

*/






// ------------ EXO 3 --------------
// Remplacer le texte des paragraphes pair.
/*const k1 = document.querySelector("main p:nth-child(2)");
k1.textContent =  "hello how are you uuuuuuuuuuuuuuuuuuuu";
const k2 = document.querySelector("main p:nth-child(4)");
k2.textContent =  "hello how are you uuuuuuuuuuuuuuuuuuuu aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";*/
//boucle sol 1
const pair = document.querySelectorAll("main p")
for (let i = 0; i > pair.length; i++)
{
    if(i%2)
    {
        pair[i].textContent = "ceci est un paragraphe pair";
    }
}
// sol 2
for(let i = 1; i < pair.length; i+=2)
{
    pair[i].textContent = "Solution 2";
}
// sol 3
const ppair = document.querySelectorAll("main p:nth-child(even)");
//ppair.












