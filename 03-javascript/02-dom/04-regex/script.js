"use strict";

/* le regex ou expression regulier,
Permettent la recherche dans un string de caracteres.

Une regex commence et se termine par "/" (ou un flag, voir plus bas le cours)

*/
const r1 = /ou/;
const r2 = /[ou]/;
/*
En javascript, il existe plusieurs fonctions qui peuvent utiliser les regex,
la premiere que l on va voir, est "regex.test(string)"
qui retourne un boolean selon si la regex a ete trouve dans le string.
*/
//r1 recherche la presence "ou" dans le string
console.log(r1, r1.test("bonjour"), r1.test("salut"));
//r2 recherche la presence de "o" ou "u" dans la string
console.log(r2, r2.test("bonjour"), r2.test("salut"));

const r3 = /^ou/;
// r3 recherche un string qui commence par "ou"
console.log(r3, r3.test("Bonjour"), r3.test("outre"));
// r3 recherche un string qui termine par "ou"
const r4 = /ou$/;
console.log(r4, r4.test("Bonjour"), r4.test("mou"));

const r5 = /ou|oi/;
//r5 recherche la presence de "ou" ou "io"
console.log(r5, r5.test("Bonjour"), r5.test("Bonsoir"));

const r6 = /[a-z]/;
// r6 recherche la presence d une lettre minuscule de "a" à "z"
console.log(r6, r6.test("Bonjour"), r6.test("9874561230"));

const r7 = /[^a-z]/;
//r7 recherche non presence de lettre minuscule de "a" à "z"(une lettre majuscule dans un mot suffit à retourner true)
console.log(r7, r7.test("Bonjour"), r7.test("9874561230"));

const r8 = /(ou)?/;
// r8 recherche la presence ou non de "ou"
console.log(r8, r8.test("Bonjour"), r8.test("pizza"));

const r9 = /(ou)+/;
// r9 recherche la presence de "ou" une fois ou plus.
console.log(r9, r9.test("Bonjour"), r9.test("pizza"));

const r10 = /(ou)*/;
// r10 recherche la presence de "ou" autant de fois qu on le veut ou pas du tout.
console.log(r10, r10.test("Bonjour"), r10.test("pizza"));

const r11 = /(cou){2}/;
// r11 recherche la presence "cou" deux fois d'affilé.
console.log(r11, r11.test("coup"), r11.test("coucou"));

const r12 = /^(cou){2,4}$/;
// r12 recherche un string qui commence et termine par "cou" apparaissant entre 2 et 4 fois
console.log(r12, r12.test("coucoucou"), r12.test("coucoucoucoucou"));

const r13 = /^(cou){2,}$/;
// r13 recherche un string qui commence et termine par "cou" apparaissant entre 2 et autant de fois que l on veut.
console.log(r13, r13.test("coucoucou"), r13.test("coucoucoucoucou"));

const r14 = /\^/;
// r14 recherche la presence de "^" dans le string. (la caractere  suivant "/" sera echape, il perdra son sens premier pour la regex)
console.log(r14, r14.test("^^"), r14.test("Bonjour"));

const r15 = /\s/;
// r15 recherche un espace dans le string. (un "\" devant un caractere sans signification, peut lui en donner un)
console.log(r15, r15.test("Hello world"), r15.test("Bonjour"));

const r16 = /\d/;
// r15 recherche la presence d un chiffre dans le string (equivalent à [0-9])
console.log(r16, r16.test("Bonjour 8 fois"), r16.test("Bonjour à tous"));

const r17 = /(ou|oi).*\1/;
//r17 recherche la presence de "ou" ou "oi" suivi de n importe quel nombre de caracteres, suivi du meme resultat que la premier paranthese
console.log(r17, r17.test("Bonjour à tous"), r17.test("Bonsoir à tous"));

//-------------flags------------
/*
les flags sont des caractere qui se placent apres la fin de la regex.
Ils viennent lui donner de nouvelles capacities.

On va les tester avec la methode "string.match(regex)" qui retourne un tableau contenant les resultats de la regex.
*/
const phrase = "J'aime la pizza, les cannelés et les okonomiyaki";

console.log(phrase.match(/pizza/));
//par défaut la regex s'arrete au premier résulat trouveé:
console.log(phrase.match(/les/));
//le flag "g" indiquera à la regex de rechercher de façon global et donc ne pas s'arreter au premier résultat
console.log(phrase.match(/les/g));


const phrase2 = "Vive la regex et vive javascript !";
//Par defaut , une regex est sensible à la casse.
console.log(phrase2.match(/vive/g));
//Avec le flag "i", la regex va ignorer la casse.
console.log(phrase2.match(/les/gi));


const phrase3 = `1er : Maurice
2ème : Paul
3ème : Charlie`;
//le string commence par un chiffre, il nous est bien retourné, mais les sauts à la ligne ne sont pas de nouveaux string
console.log(phrase3.match(/^\d/g));
//avec la flag "m", chaque saut à la ligne est considéré comme une nouvelle phrase à traiter.
console.log(phrase3.match(/^\d/gm));
//cela fonctionne aussi avec les fins de ligne:
console.log(phrase3.match(/(\w+)$/gm));
//\w tient pour "word" (attention, il ne prend pas en compte les accents)

//chaque saut à la ligne mettant fin à la phrase, il ne trouve rien ici.
console.log(phrase3.match(/1.+3/gm));
//le flag "s" permet de prendre en compte les saut a la ligne dans la recherche.
console.log(phrase3.match(/1.+3/gms));


//?-------- autre fonctions et bonus -------------

// les lettre accentues sont des caracteres à part de la alphabet:
console.log(/^[a-z]+$/.test("paul"), /^[a-z]+$/.test("élodie"));
// si je veux prendre compte les lettres accentues.. pas trop le choix:
console.log(/^[a-zàéèûùâêï]+$/i.test("élodie"));
/*
il existe d autres fonctions qui acceptent les regec comme :
  string.replace(string|regex, string);

qui viendra remplacer dans le premier string, ce qui est trove par la regex(ou le string) par le dernier string
*/
console.log(phrase.replace("pizza", "salade"));
console.log(phrase.replace(/pizza/, "salade"));

// l avantage de la regex, cest qu elle pourra etre plus plus versatile qu un string
console.log(phrase.replace(/pizza|okonomoyaki|cannelé/gi, "salade"));
console.log(phrase.replace(/regex|javascript/gi, "*************"));
// "$&" permet de ne pas remplacer mais seulement d ajouter :
console.log(phrase.replace(/javascript/gi, "CSS et $& et PHP"));
/*
dans la table des caracteres "unicode" entre les majuscules et les minuscules se trouvent des caracteres speciaux.

ce test retourné donc true
*/
console.log(/[A-z]/.test("_"));
//on ecrira donc plus habituellement
console.log(/[A-Za-z]/.test("_"));