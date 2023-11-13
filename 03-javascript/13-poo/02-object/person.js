<<<<<<< HEAD
"use strict";
/*
La programmation orienté objet consiste à développer notre et nos fonctions à l interieur d objet.

La plupart des langages demandent à passer par des classes et des constructeurs, mais en Js, on peut créer nos objets manuellemnt.

On verra donc la POO classique dans un deuxieme temps.
*/
const Person ={
name:{
    prenom: "Maurice",
    nom: "Dupont"
},
age: 54,
/*
en POO, nous pouvons utiliser des "setter" et des "getter".
Ce sont des fonctions qui permettent de filter les données envoyés ou récup"re depuis notre objet.

Leur déclaration ressemble à une fonction, mais leur utilisation se fait telle une propriete.

Le setter se déclare précédé du mot clef "set" et prend obligatoirement un argument.
*/
set setAge(a)
{
    this.page = parseInt(a);
    if(isNaN(this.age))
     this.age = 0;
},
set nom(n)
{
    this.name.nom = n.toUpperCase();
},
set prenom(p)
 {
    this.name.prenom = p[0].toUpperCase() + p.slice(1).toLowerCase();
 },
 /*
 les getter se declarent  avec le mot clef "get" et "return" forcémént une valeur
 */
get fullName()
{
    return `${this.name.prenom} ${this.name.nom}`;
},
/*
nos objets peuvent aussi contenir des fonctions.
ici pas besoin de mot clef pour les déclarer.
!ATTENTION!
En POO, on ne parle pas de variable ou de fonction d u objet.
mais de propriete ou pethode d un objet
*/
salutation()
{
    console.log(`Bonjour, Je suis ${this.fullName} et j'ai ${this.age} ans`);
},
anniversaire()
{
    this.age++;
    this.salutation();
}
};
=======
"use strict";
/*
La programmation orienté objet consiste à développer notre et nos fonctions à l interieur d objet.

La plupart des langages demandent à passer par des classes et des constructeurs, mais en Js, on peut créer nos objets manuellemnt.

On verra donc la POO classique dans un deuxieme temps.
*/
const Person ={
name:{
    prenom: "Maurice",
    nom: "Dupont"
},
age: 54,
/*
en POO, nous pouvons utiliser des "setter" et des "getter".
Ce sont des fonctions qui permettent de filter les données envoyés ou récup"re depuis notre objet.

Leur déclaration ressemble à une fonction, mais leur utilisation se fait telle une propriete.

Le setter se déclare précédé du mot clef "set" et prend obligatoirement un argument.
*/
set setAge(a)
{
    this.page = parseInt(a);
    if(isNaN(this.age))
     this.age = 0;
},
set nom(n)
{
    this.name.nom = n.toUpperCase();
},
set prenom(p)
 {
    this.name.prenom = p[0].toUpperCase() + p.slice(1).toLowerCase();
 },
 /*
 les getter se declarent  avec le mot clef "get" et "return" forcémént une valeur
 */
get fullName()
{
    return `${this.name.prenom} ${this.name.nom}`;
},
/*
nos objets peuvent aussi contenir des fonctions.
ici pas besoin de mot clef pour les déclarer.
!ATTENTION!
En POO, on ne parle pas de variable ou de fonction d u objet.
mais de propriete ou pethode d un objet
*/
salutation()
{
    console.log(`Bonjour, Je suis ${this.fullName} et j'ai ${this.age} ans`);
},
anniversaire()
{
    this.age++;
    this.salutation();
}
};
>>>>>>> 6d95df47b5d49909ad9ff032b3bc391ca5fb1679
export default Person;