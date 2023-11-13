<<<<<<< HEAD
"use strict";
/*
JSON signifie JavaScript Object Notation
2 roles:
1. stocker des donnes complexes tel que des objets ou des tableaux sous forme string.
2. Pouvoir partager des donnes entre plusieurs langages à la syntaxe différente.
On pourra aussi creer des fichiers JSON qui seront donc lisible par n importe lequel de ces langages.

Ici on va recuperer les donnes d un formulaire, les stocker sous forme de json en localStorage, et les récuperer.
*/
const form = document.querySelector('form');

form.addEventListener("submit", saveData);
function saveData(e)
{
    e.preventDefault();// evite qu il y ai un refresh de page
    // je creer un objet FormData qui contiendra les donnes du formulaire donné en parametre
    const data = new FormData(form);
    // console.log(data)
    const user = {};
    //je boucle sur mon FormData pour obtenir les valeurs et noms des champs du formulaire
    data.forEach((value, name)=>{
        //console.log(value, name)
        //je rempli mon objet vide avec les donnes du formulaire
        user[name] = value;
    })
    //j'obtien un objet contanant toute les informations de nom formulaire.
    console.log(user);
    showUser(user);
    //je transformer mon objet en donnes JSON(sous forme de string)
    const strUser = JSON.stringify(user);
    console.log(strUser, typeof strUser);
//mon json étant un string, je peux le sauvegarder en localStorage
    localStorage.setItem("user", strUser);
}
/**
 * @param {object} u
 */

function showUser(u){
const h1 = document.querySelector('h1');
h1.textContent = `Je suis ${u.prenom}, ${u.age} ans !`
}
const userString = localStorage.getItem("user");
if(userString)
{
    console.log(userString, typeof userString);
    /*
    l objet json n'a que qeux methodes.
    -parse : convertit une chaine de caractere en objet javascript
    -stringfy: convertit un objet JS en chaine de caractere
    */
    const user = JSON.parse(userString);
    console.log(user, typeof user);
    showUser(user);
=======
"use strict";
/*
JSON signifie JavaScript Object Notation
2 roles:
1. stocker des donnes complexes tel que des objets ou des tableaux sous forme string.
2. Pouvoir partager des donnes entre plusieurs langages à la syntaxe différente.
On pourra aussi creer des fichiers JSON qui seront donc lisible par n importe lequel de ces langages.

Ici on va recuperer les donnes d un formulaire, les stocker sous forme de json en localStorage, et les récuperer.
*/
const form = document.querySelector('form');

form.addEventListener("submit", saveData);
function saveData(e)
{
    e.preventDefault();// evite qu il y ai un refresh de page
    // je creer un objet FormData qui contiendra les donnes du formulaire donné en parametre
    const data = new FormData(form);
    // console.log(data)
    const user = {};
    //je boucle sur mon FormData pour obtenir les valeurs et noms des champs du formulaire
    data.forEach((value, name)=>{
        //console.log(value, name)
        //je rempli mon objet vide avec les donnes du formulaire
        user[name] = value;
    })
    //j'obtien un objet contanant toute les informations de nom formulaire.
    console.log(user);
    showUser(user);
    //je transformer mon objet en donnes JSON(sous forme de string)
    const strUser = JSON.stringify(user);
    console.log(strUser, typeof strUser);
//mon json étant un string, je peux le sauvegarder en localStorage
    localStorage.setItem("user", strUser);
}
/**
 * @param {object} u
 */

function showUser(u){
const h1 = document.querySelector('h1');
h1.textContent = `Je suis ${u.prenom}, ${u.age} ans !`
}
const userString = localStorage.getItem("user");
if(userString)
{
    console.log(userString, typeof userString);
    /*
    l objet json n'a que qeux methodes.
    -parse : convertit une chaine de caractere en objet javascript
    -stringfy: convertit un objet JS en chaine de caractere
    */
    const user = JSON.parse(userString);
    console.log(user, typeof user);
    showUser(user);
>>>>>>> 6d95df47b5d49909ad9ff032b3bc391ca5fb1679
}