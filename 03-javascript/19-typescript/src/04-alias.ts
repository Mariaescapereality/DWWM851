"use strict";
/*
Un DW n aime pas se repeter .
Pour eviter de devoir rataper des types long,
TS permet de creer ses propres types.

*/
//for not do that again
//let f: {nom: string, couleur:string}
//let af: {nom: string, couleur:string}
//we do like that
type Fruit = {nom: string, couleur:string}
/*
avec le mot clef "type" je peux declarer un type et l utiliser sur mes variables.
*/
 let f: Fruit = {nom: "Pomme", couleur: "Rouge"};
 let aF: Fruit[] = [f,{nom: "Banane", couleur: "Jaune"}];
/*
Je peux declarer un type et utiliser ce type pour declarer un second type.
Ici je declarer le type "Age" et je utiliser dans declaration de type "Person"
*/
 type Age = number|string;
 type Person = {nom: string, age: Age};

 let p: Person = {nom: "Maurice", age:54};
/*
Ici j indique que le type "Name" doit être de même type que la propriete "nom" du type "Fruit".
*/
 type Name = Fruit["nom"];

 let n: Name = "George";
 /*
 keyof permet de creer un type qui n accepte que les proprietes d un objet sous forme de string.
 Ici mon type "Full" n'accepte que les strings "age" et "nom".
 */
type Full = keyof Person;

let fp: Full = "age";
fp = "nom";

// document.body.textContent = `${fp} : ${p[fp]}`

/*
La propriete typeof permet de creer un type à partir déjà existant.
*/
let objet = {vieux: true, prenom: "Maurice", age: 78};
type Item = typeof objet;

let objet2: Item = {vieux: false, prenom: "Pierre", age: 23};

//const test = "Bonjour";

//---------------------------------------GENERICS-----------------------------------------------------------
function useless(arg: any): any
{
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
function useful<Type1>(arg: Type1): Type1
{
    return arg;
}
let machine2 = useful("Bonjour");
let machine3 = useful(54);
/*
ici j indique que l argument est un tableau du type "nomme" et que la valeur de retour est non plus un tableau msiq uniquement le type contenu dans ce tableau.
*/
function lastOf<TypeArr>(arr: TypeArr[]):TypeArr
{
    return arr[arr.length-1]
}
let last = lastOf([34, 23, 91])
let last2 = lastOf(["34", 23, "91"]);

/*
Ici ma fonction accapte n importe quel argument,
tant que cet argument possede la propriete "length" qui est un "number".
*/
function logSize<TypeL extends {length:number}>(arg: TypeL)
{
    console.log(arg.length);
    return arg;
}
let s1 = logSize([45]);
let s2 = logSize("Chaussette");
//let s3 = logSize(42);
let s4 = logSize({nom: "Maurice", length: 345});


