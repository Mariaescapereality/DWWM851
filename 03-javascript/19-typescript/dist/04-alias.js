"use strict";
/*
avec le mot clef "type" je peux declarer un type et l utiliser sur mes variables.
*/
let f = { nom: "Pomme", couleur: "Rouge" };
let aF = [f, { nom: "Banane", couleur: "Jaune" }];
let p = { nom: "Maurice", age: 54 };
let n = "George";
let fp = "age";
fp = "nom";
// document.body.textContent = `${fp} : ${p[fp]}`
/*
La propriete typeof permet de creer un type à partir déjà existant.
*/
let objet = { vieux: true, prenom: "Maurice", age: 78 };
let objet2 = { vieux: false, prenom: "Pierre", age: 23 };
//const test = "Bonjour";
//---------------------------------------GENERICS-----------------------------------------------------------
function useless(arg) {
    return arg;
}
let machine = useless("Salut");
/*
Par defaut, dans examples ci dessus, notre function ne fait que retourne son argument sans rien faire.
Mais typescript est incapable de faire le lien entre le type de l'argument et celui de la valeur de retour.
ma variable vaut donc "any"

avec les generics il est possible d inqidquer à notre fonction qu elle va recevoir un type "nomme" et que celui ci sera le meme que la valeur de retour.
ici mes variables son type de la argument donne a la fonction

il est possible de limiter les types possible avec:
<NomDuType = number|string>
*/
function useful(arg) {
    return arg;
}
let machine2 = useful("Bonjour");
let machine3 = useful(54);
/*
ici j indique que l argument est un tableau du type "nomme" et que la valeur de retour est non plus un tableau msiq uniquement le type contenu dans ce tableau.
*/
function lastOf(arr) {
    return arr[arr.length - 1];
}
let last = lastOf([34, 23, 91]);
let last2 = lastOf(["34", 23, "91"]);
/*
Ici ma fonction accapte n importe quel argument,
tant que cet argument possede la propriete "length" qui est un "number".
*/
function logSize(arg) {
    console.log(arg.length);
    return arg;
}
let s1 = logSize([45]);
let s2 = logSize("Chaussette");
//let s3 = logSize(42);
let s4 = logSize({ nom: "Maurice", length: 345 });
