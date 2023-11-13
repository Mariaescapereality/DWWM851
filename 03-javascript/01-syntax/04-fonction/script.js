"use strict";
/*
pour declarer une fonction, on utilisera le mot clef "function", suivi du nom de la fonction,
des parentheses qui accueillerons de possibles argumentes, puis anfin des accolades ontenant le corps de la fonction.
une fonction simplement declare, ne lancera aucun code.
pour lancer une fonction, il faut l appeller.
pour cela on ecrira son nom, suivi de parenthese.
js va lire une premiere fois le code, et declarer toute les fonctions,
puis relire le code et effectuer les actions demandes.
c est à dire l on appeler 
*/
salut();
function salut()
{
    console.log("salut : salut tout le monde !");
}
salut();
/*
il existe d autres façons de declarer une fonction à noter que toute ces autres façon, ne peuventetre appeles qu apres leurs declarations.

on peut ranger dans variables une fonction, un tableau ou objet, fonction "anonyme".
c'est à dire une fonction qui n a pas de nom.
pour l appeler on utilisera la variable ou l objet qui la contient.
*/
const salut2 = function()
{
    console.log("salut2: Bonjour les gens !")
}
salut2();

/*
plutot qu une fonction anonyme, on pourra utiliser une fonction fléchée.
c'est à dire une fonction dont le mot clef "fonction" disparait.
pour laisser place à une "=>" entre les parenthese les accolades
*/
/*const salut3 = {
    maFonction: () =>{
        console.log("salut3: Coucou le peuple !")
    }
}
salut3.maFonction(); */
const salut3 = ()=>{
    console.log("salut3: Coucou le peuple !");
}
salut3();
/*
if only one instruction fleche. we can passe des accolades
(cela implique return automatique)
*/
const salut4 = ()=>console.log("Salut: Hello World !");
salut4()
//-------les parametres(ou arguments)
/*
lorsque l on place un argument (une variable) dans le declaration d une fonction (entre ses parentheses)
lors de l appel de celle ci on pourra placer entre ses parentheses, des données qui seront  transmise a la fonction
*/
function bonsoir(nom)
{
    if(nom === undefined)
        console.error("Donne moi un fichu argument !");
    else
    console.log("Bonsoir" +nom);
}
//si on ne met aucune donéee, l argument sera undefined
bonsoir();
// ici "Thomas" est transmit a l argument "nom"
bonsoir("Thomas");
//si trop argument lui son donnees, les supplementaire seront ignores.
bonsoir("Maurice","Pierre");
//chaque nouvell argument est separe d une virgule, que ce soit pour l appel ou la declaration.
//le premier parametre de l appel, ira au premier de la declaration, et ainsi de suite
function bonneNuit(nom1, nom2)
{
    console.log(`%cBonneNuit ${nom1} et ${nom2}`, "background:blue; color:yellow;");
}
bonneNuit("Patrick", "Raphael");
/*

*/
function goodBye(nom1, nom2 = "les autres")
{
    console.log("Good bye "+nom1 + " et " + nom2);
}
goodBye("Kevin");
goodBye("Marie", "Alain");
/*
parfois on a besoin qu une fonction prenne un nombre infini de parametre.
(c est le as du console.log())
pour cela il suffit que le dernier parametre de la fonction, soit precede du "rest operateur" qui symbolise par "..."
cela va creer un tableau cont tous les parametrs supplementaire
*/
console.log(1,2,3,4,5,6,7,8,9);
function goodMorning(...noms)
{
    //console.log(noms);
    //console.log("Good morning" + noms.toString());
    //mais en cas de concaténation, cest géré par defaut:
    //console.log("Good morning" + noms);
    //si on souhaite autre chose que des "," comme séparateur:
    console.log("Good morning" + noms.join("et"));
}
goodMorning("Pierre");
goodMorning("Pirre","Ondine", "Giovanni");

//----mettre fin à une fonction, renvoyer une information----
/*
on peut avoir besoin de mettre fin à une fonction avant la fin de son code.
ou bien retourner une information que l on pourra utiliser ailleurs.
ces deux cas utilisent le meme mot clef, qui est "return";
*/
function insulte(nom)
{
    if(nom === undefined)
    {
        console.error("Donne moi un nom !");
        return;
        console.log("test");
    }
    //si le return est suivi d une valeur la fonction prendra fin en retournant cette valeur là où elle été appelle
    return nom + " Le Poltron !";
}
insulte();
//aucun log, rien est affiche
insulte("Charles");
// on place la valeur retourne par le fonction dans une variable au on log ensuite
let newName = insulte("Bob");
console.log(newName);
//on appelle directement la fonction dans le log.
console.log(insulte("Bil"), insulte());
/*

*/
const add = (a, b)=>a+b;
console.log(add(4,8), add('4',8));
//quand la function flechee ne prend qu un argument, les parentheses sont optionnelles:
const square = a=>a*a;
console.log(square(5));

//------Callback--------
/*
certaines function prennent en parametre, non pas un string, number ou autre, mais une autre fonction.
c est ce qu on appelle une finction callback.

un exemple que l on dega pu voit c est forEach

lorsque l on met une fonction en callback d une autres, on se content d ecrire son nom  sans parenthese
*/
const pr = ["Alice","Ariel","Mulan","Belle"];
pr.forEach(bonsoir);
//on peut utiliser une fonction anonyme.
pr.forEach(function(p){
 console.log("Bienvenue " + p);
});
// ou une fonction fleché:
pr.forEach(p=>console.log("Bonjour bonjour " +p));

/*
on peut creer notre propre fonction utilisent un callback, simplement en utilisant un argument tel une fonction.
*/
function compliment(salutation, nom)
{
    if(typeof salutation != "function") return;

    salutation(nom+" le magnifique");
}
compliment(bonsoir, " Greg");
compliment(n=>console.log("Guten tag "+n), "Hanz");
//---- fonction récurcives----
/*
une fonction recurcive est une fonction qui s appelle elee meme.
cela va provoquer une boucle, faire attention de prevoir une consition de sortie
*/
function countdown(x)
{
    console.log(x--);
    if (x < 0)return;
    countdown(x);
}
countdown(5);

/*
il est de bon ton, de décrire ses fonctions avec de la JS DOC,
cela permet d un coup d oeil de retrouver l utilite de la fonction
ainsi que les paramtres qu elle doit prendre.

cela sera aussi visible au survol ou remplissage de la fonction :
*/

/**
 * 
 * @param {string} nom 
 * @param {number} age 
 * @returns {string}
 */
function presentation(nom, age)
{
    return `Je suis ${nom} et j'ai ${age} ans`;
}
let p = presentation("Maria",44);
console.log(p);
/*
function sort(tab){
    for(var i = 0; i < tab.length; i++){
      //stocker l'index de l'élément minimum
      var min = i; 
      for(var j = i+1; j < tab.length; j++){
        if(tab[j] < tab[min]){
         // mettre à jour l'index de l'élément minimum
         min = j; 
        }
      }
      var tmp = tab[i];
      tab[i] = tab[min];
      tab[min] = tmp;
    }
    return tab;
  };
  var tab = [5, 8, 11, 6, 1, 9, 3];
  sort(tab);
  console.log(tab);

*/
/*
bubble

function bubbleSort(items) {
    var length = items.length;  
    for (var i = 0; i < length; i++) {
          for (var j = 0; j < (length - i - 1); j++) {
                   if(items[j] > items[j+1]) {
                           var tmp = items[j]; 
                items[j] = items[j+1]; 
                items[j+1] = tmp; 
            }
        }        
    }
}

var arr = [2020, 1998, 2018, 1986, 2006, 1993, 1975, 1988, 2005, 2000, 2001, 2009, 1990, 1954, 1959, 1945, 1, 9, 5, 4]; 
bubbleSort(arr);

console.log(arr);*/

/* champagne bubble
const unsortedArray = [2020, 1998, 2018, 1986, 2006, 1993, 1975, 1988, 2005, 2000, 2001, 2009, 1990, 1954, 1959, 1945, 1, 9, 5, 4]
const bubbleSort = array => {
  const arrayLength = array.length
  let isSwapped
  do {
    isSwapped = false
    for (let i = 0; i < arrayLength - 1; i++) {
      if (array[i] > array[i + 1]) {
        const tempLeftValue = array[i]
        array[i] = array[i + 1]
        array[i + 1] = tempLeftValue
        isSwapped = true
      }
    }
  } while (isSwapped)
  return array
}
console.log(bubbleSort(unsortedArray)) */

/*Insertion sort */

//merge function
/*function merge(left, right){
    let arr=[]
    while(left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    console.log('Result: ' + arr);
    return [...arr, ...left, ...right]
}
function mergeSort(array) {
    const half = array.length / 2
    if(array.length < 2){
        return array
    }
    const left = array.splice(0, half)
    console.log('Left:' + left);
    console.log('Right' + array);
     return merge(mergeSort(left), mergeSort(array))
}
array = [3, 5, 1, 6, 9, 8, 2];
console.log(mergeSort(array)); */

/*nbreMarchands = int(input())
prixMin = 100
positionMarchand = 0
for loop in range (nbreMarchands):
  prixGalette = int(input())
  positionMarchand = positionMarchand + 1
  if prixGalette < prixMin:
    prixMin = prixGalette
    meilleurePlace = positionMarchand
print(meilleurePlace)*/

//tri par selection
/*function sort(tab){
    for(var i = 0; i < tab.length; i++){
      //stocker l'index de l'élément minimum
      var min = i; 
      for(var j = i+1; j < tab.length; j++){
        if(tab[j] < tab[min]){
         // mettre à jour l'index de l'élément minimum
         min = j; 
        }
      }
      var tmp = tab[i];
      tab[i] = tab[min];
      tab[min] = tmp;
    }
    return tab;
  };
  var tab = [20, 98, 18, 86, 26, 93, 75, 88, 5, 29, 1, 9, 90, 54, 59, 45, 1, 9, 5, 4];
  sort(tab);
  console.log(tab);*/