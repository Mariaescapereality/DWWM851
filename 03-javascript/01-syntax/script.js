"use strict";
//commentaire
/*
comment sur plusieurs lignes
"use strict", les navigateurs sont capable de corriger cartaines petites erreurs de syntaxe.
faire commncer son script par "use strict",
indique au navigateur de ne pas corriger ces erreurs.
not finish by ; 
*/
/*
-----declaration des variables--------
existe 3 mots cles for declare une variable.
can have lettre, number and other but cant begin from number
let est le mot clef de declaration de variable le plus conseillé.
*/

let banane;
console.log("banane :", banane);
//"var" déclare une variable avec une plus grande portée.
var tomate = 3;
//je peux definir une variable au moment de sa déclaration, ou plus tard.
console.log("tomate :", tomate);
//"const" permet de declare une "constante"
const cerise = 5;
console.log("cerise :", cerise);
/*
Une constante est une variable qui une fois definie, ne peut pas changer. On est d'alleurs obligé de la definir au moment de la déclaration.
sinon, const utilise les meme regles de portée que "let".

quelques erreurs de declaration et definition
*/
//cerise = 2; changer la valeur d un const n'est pas possible 
//let banane; rédéclarer un let n'est pas possible.
//je peux déclarer plusieurs variables avec un seul mot clef, en les séparants d'une virgule.
let a, b=8, c;
// ------------La portée des variables---------
/*
Lorsque l'on code, on va créer des "bloques" souvebt representer par {},
que ce soit des conditions, des fonctions, ou meme en JS juste un "bloc" separe du reste.
C'est là qu'entre en jeu, la portée des variables.
"var" à une portee dite "global", elle sera accesible et modifiable depuis bien plus d'endroit que "let".
Ce dernier a ete cree pour eviter les erreurs de modification d une variable par accident.
*/
let gLet = 1;
var gVar = 1;

{
    let hLet = 2;
    var hVar = 2;
    console.log(gLet, gVar, hLet, hVar);

//un let declare dans un bloc, n'existe que dans celui ci ou ses descents.
{
console.log(gLet, gVar, hLet, hVar)
}
}
    //Aucune erreurs à redeclarer une variable si elle est dans un bloc diférent.
{
    let gLet = 5;
    var gVar = 5;
    console.log("Dans un bloc :", gLet, gVar);
}
/*Les deux "let" portant le meme nom, sont deux variables differents dans le bloc et hors du bloc.
Alors que les 2 var sont le bien meme variables. le "1" a disparu pour laisser place à 5*/
console.log("hors du bloc :", gLet, gVar)
{
    gLet = 9;
    gVar = 9;
    console.log("Dans un bloc :", gLet, gVar)
}
console.log("Hors du bloc :", gLet, gVar);
// -----types des variables-----
let num = 5,
    str = "Coucou",
    bol = true,
    arr = [],
    obj = {},
    und;
    console.log("num", typeof num); // type number
    console.log("str", typeof str); // type string
    console.log("bol", typeof bol); // type boolean
    console.log("arr", typeof arr); // type obj
    console.log("obj", typeof obj); // type obj
    console.log("und", typeof und); // type undefinied
    /*
    il y a donc 5 types principeaux à JS.
    les tableaux et les objects sont de type "object"
    JS language non type, no need type of variable, peut changer à la volee :
    */
   /*
   chaines de caracteres (string)
   pour definir un string, nous pouvons utiliser 3 caractere differents:
   "" '' ¨
   Les guillemets et appostrophes n'ont pas aucune difference dans leurs utilisations.
   Mais le backtick lui apporte des fonctionnalites
   */
  let s1 = "Coucou", s2 = 'Coucou', s3 = `Coucou`;
  s1 = "L'apostrophe ne pose aucun problème";


  /*
  \ avant caractere permet d indiquer à JS d echaper ce dernier, afin qu il ne soit pas prit en compte
  en programmation, nous avons parfois basoin de fusionner plusieurs string ensemble, ou alors une variable avec string.
  Cela se nomme la "concatenation",
  en JS, nous utiliser le symbole + pour faire cela
  */
s1 = "Karl";
s2 = "Bonjour " + s1 + " Comment vas tu?";
console.log(s2)
/* 
Other possibility integer une variable dans un string
interpolation not work with``
${variable}
*/
s3 = `Bonjour ${s1} Comment vas tu?`;
console.log(s3);
// avec les "" ou les '', je ne peuxpas sauter à la ligne :
//s1 = "" not working for that use \n
console.log("Coucou \n tout le monde")
// mais on peut aussi utiliser ``;
s3 = `Vive les sauts
à la ligne`;
console.log(s3);
//--------les nombres---------
/*
les grandes nombres peuvent etre exrit avec un "_" pour plus de lisibilite.
*/
console.log(9999999, 9_999_999);
// mais attention, JS pers en precision avec tres grand nombre :
console.log(999999999999999999999999999, 9_999_999_999_999_999);
//JS peux avoir quelques problemes avec les nombres à virgule parfois :
console.log(0.2 + 0.1);
//les operations mathematiques disponibles sont :
console.log(
5+5,
5-5,
5*5,
5/5,
5%5,
5**5
);
// % le modulo est le reste d une division
// ** est la puissance.
console.log(
    5 + "5",
    5 - "5"
);
console.log(
    5 + "5",
    5 - "5",
    5 + "Banane",
    5 - "Banane"
);
// NaN est un nombre. (Not a Number)
console.log(typeof NaN);
// BANANA!
console.log(("b"+"a"+ +"a"+"a").toLowerCase());
// il existe une fonction qui permet de verifier si un calcul retourne "NaN"
console.log(isNaN(5-"chaoussette"), isNaN(5-"1"));
// Infinity represent la plus grande valeur utilisable en JS
console.log(Infinity, -Infinity);
// Les operateurs d'affectation permettent un calcul tout en changeant la valeur d une variable.
let n = 0;
n = n +2;
//ceux deux lignes ont le meme effet.
n+=2;
n-=4;
n*=3;
n/=6;
n%=2;
n**5;
console.log(n);
// il arrive souvent que l'on veuille augumenter ou reduire de 1, et écrire n+=1 c est encore trop long.
/*
et ecrire n+=1 c est encore trop long
*/
n++;
n--;
++n;
--n;
console.log(n);//0
console.log("n++", n++);// 0
console.log(n);// 1
console.log("++n", ++n);// 2
console.log("n", n);// 2


n = 17;
// .toString() permet de transformer un nombre en string.
console.log(n, n.toString(), n);
// On peut optionnellement ajouter un parametre pour changer la base mathematique.
console.log(n, n.toString(2));
//string in number with parseInt()
let s = "10011101";
console.log(s, parseInt(s),s);
// il peut aussi prendre un parametre supplemantaire pour changer la base mathematique
console.log(s, parseInt(s, 2));
//virgule and can use parseFloat()
s = "3.14";
console.log(s, parseInt(s), parseFloat(s));
//differents method fonctions de la console
// vous pouvez provoquer votre propre error
console.error("je suis une erreur");
console.warn("Attention à ce que tu fais");
console.info("%c Coucou tout le monde !", "background:red;");
// -----les tableaux------
/*
un Tableau est une liste d'element.
elle peut etre declare de deux façon differantes:

*/
let a1 = [5, "truc", true],
    a2 = new Array(5, "truc", true);

console.log(a1, a2);
/*
Pour acceder à un element precis du tableau,
il me faut faire suivre la variable contenant celui ci,
de crochets "[]" dans lesquels j'indique l index que je souhaite voir
*/
console.log(a1[1]);
//length la taille du tableau
console.log(a1.length);
// have taille of last element of tableau of taille variable

console.log(a1[a1.length-1]);
//from 2022 Ecmascript 2022, il est aussi possible de faire ceci :
console.log(a1.at(-1));

// Cela fonctionne aussi avec un string :
console.log("salut".at(-1), "Salut"[2]);
//pour ajouter un element à la fin du tableau:
a1.push("Bidule");
console.log(a1);
// Pour retirer un element un element à la fin du tableau :
a1.pop();
console.log(a1);
// retirer un element au debut du tableau :
a1.shift();
console.log(a1);
// ajouter un element au debut du tableau :
a1.unshift(42);
console.log(a1);
//supprimer l'index indique et ce qui suis :
a1.splice(1);
console.log(a1);
//supprimer a partir de index indique, le nombre  element choisi.
a2.splice(1,1);
console.log(a1);
// on rempli un peu notre tableau
a2.push(1, 2,3,4);
console.log(a1);
// on suprime à partir de in dex indique, le nombre d elements choisi et les remplace par ce qui suis.
a2.splice(1, 1, "chaussette", "banane");
console.log(a2);
// can say nothing to delete
a2.splice(2, 0, "cerise");
console.log(a2);

let a3 = [4, 1, 12, 42, 8, 14];
//.sort() permet de trier par ordre alphabetique... meme les nombres.
a3.sort();
console.log(a3);
// il sera possible d ameliorer sort, mais on verra cela dans le cours sur les fonctions.

//il est assi possible d ajouter un element au tableau en lui indiquant l'index à prendre.
a1[8] = "pomme";
//mais si l index n est pas le dernier, il crera des "empty slot" pour comber
console.log(a1);
// on prefera dans ce cas lui dire :
a2[a2.length]= "pomme";
console.log(a2);
// si on souhaite faire une copie d'un tableau :
let a4 = a2;
console.log(a4);
a4[0] = "saperlipopette";
console.log(a4, a2);
/*
ici mes deux tableau sont modifies.
car pour les object et les tableaux,
ce qui se trouve dans la variable, n'est pas une valeur, mais une adresse vers la position du tableau dans le memoire de l ordi. En modifiant l un, on modifier la tableau qui se triuve à cette meme adresse.
pour aviter cela decompose tableau grace a 
u spread operator,
par "..."
*/
console.log(a2, ...a2);
a4 = [...a2];
a4.push("coucou");
console.log(a2,a4);
