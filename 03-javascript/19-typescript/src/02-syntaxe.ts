"use strict";
/*
le principal apport de TypeScript, est le typage comme son nom l import.

c est à dire que comme dans de nombreux langages,
nous allons pouvoir indiquer le type de nos variables et arguments
*/
const mot: string = "Bonjour";
const chiffre: number = 45;
const bool: boolean = true;
const nu: null = null;
// on peut aussi indiquer ce que nos tabl
const arr1: string[] = ["truc", "bidule"];
/*
Dans de rare cas, une var doit pouvoir contenir n importe quel type de valeur.
on utilis alors le mots clef "any" 
*/
let truc: any = 5;
truc = "bidule";
const arr2: any[] = ["truc", 45, true];

/*
pourtyper un objet, je vais devoir indiquer chaque propriete et chaque valeur.
L'ajout d'un "?" sur une propriete, indique qu elle est optionnele.

*/
const person: {prenom:string, age?:number} = {prenom: "Maurice"};
//Si on objet peut avoir des proprietes suppl on peut lui indiquer ainsi:
const person2: {prenom:string, [key:string]:string} = {prenom: "Charles", nom:"Dupont"};
/*
j'ai indique ici que les possibles proprietes supplementaires ont des clefs sous la forme de string contenant elle même des strings.

dans le cas d une instanction de classe, on peut simpl utilis le nom de la classe en type
*/
const today: Date = new Date();
/*
plus rare, si on place une function dans une variables,
on peut le typer avec "function"
*/
const salut: Function = function(){};
/*
En parlent de fonction,
il est possible de typer les arguments,
ainsi que la valeur de retour, en plaçantles ":type" apres les parnthese des arguments
"void" est le mot clef indiquant que rien n est retourne
*/
function clickMe(e:PointerEvent):void{
    console.log("merci de clique sur", e.target);
}
/*
clickMe attend une event "PointerEvent"
seul eventement "pointer..." lui donnera ce type d event,
utiliser un autre type d event provoquera une erreur
*/
//document.addEventListener("click", clickMe);
document.addEventListener("pointerdown", clickMe);
/*
On peut aussi indiquer qu un argument d une function est en lecture seule.
c est dire qu il ne peut pas etre modifie
*/
function tri(arg: readonly any[]): any[]
{
    //impossible de trier la tableau en readonly
    //arg.sort();
    //mais je peux trier sa copie
    return [...arg].sort();
}
/*
la plupart du temps, indiquer le type d une variable, peut être optionnelle.
TS la declare lui meme selon sa premier valeur:
*/
let a = 5;
// a = "truc";
/*
mais parfois TS peut se tromper ou avoir des doutes,
par example si une fonction peut retourner plusieurs valeurs differentes.
*/
//const btn1 = document.querySelector("#compte");
//btn1.style.color = "red";
/*
ici deux erreurs:
si querySelector ne trouve pas d element, il retournera "null" et style n existe pas sur "null".
et si il trouve quelque chose, il retourne un "element"
il existe plusieurs façon de corriger cela.
pour  certaines d entre elles, attention que votre selectors CSS soit bon

ici on indiquer le result du query selecteur 

//const btn1 = document.querySelector("#compte") as HTMLButtonElement;
//btn1.style.color = "red";

meme result qu avec "as"

const btn1 = <HTMLButtonElement>document.querySelector("#compte") as HTMLButtonElement;
btn1.style.color = "red";
//
const btn1 = document.querySelector("#compte");
btn1.style.color = "red";

ici on indique que la valeur  de retour  ne sera pas "Element" mais "HTMLButtonElement"
Ne réglant ici aussi qu un des deux problemes

const btn1 = document.querySelector<HTMLButtonElement>("#compte");
btn1.style.color = "red";
*/
let y: string|number|boolean = 5;
y = "truc";
y = true;
// y = []






