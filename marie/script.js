"use strict";
/* EXERCICE 0
A l'aide de la fonction prompt(). Insérer dans la page HTML la chaine de caractères inscrites dans la boite de dialogue.

let x = prompt();

let p = document.createElement("p");

p.textContent = x;

document.body.append(p);


EXERCICE 1
Créer une variable result qui contient la somme des variables a et b. Afficher le résultat de la somme dans une boite de dialogue.

let a = 5;
let b = 6;
let s = a + b;
document.body.append(s);


EXERCICE 2
Modifier le code ci-dessous pour calculer la moyenne des notes.

let note_maths = 11;
let note_francais = 9;
let note_hg = 16;
let note_s = note_maths + note_francais + note_hg;
let note_moyenne = note_s / 3;
document.body.append('La moyenne est de ' + note_moyenne);

EXERCICE 3
Déclarer une variable budget qui contient le budget de votre choix. 
Déclarer une variable achats qui contient le montant de votre choix. 
Afficher si le budget permet de payer les achats.

let budget = 250;
let achats = 15 + 20 + 250;

if(budget <= achats)
{
    document.body.append("You pass your budget")
}
else if(budget > achats)
{
    document.body.append("Good! You have money to eat")
}

EXERCICE 4 - PRIX HT > TTC, LEVEL 1
A l'aide de la fonction prompt(), demander un prix HT à l'utilisateur 
puis insérer le prix TTC (TVA 20 %) dans la page HTML à l'aide de document.body.innerText.

let prix_ht = prompt("write your price without tax")*1;

let p_h = document.createElement("p");

let t = ((prix_ht*20/100));
let prix_ttc = prix_ht +t;

document.body.append("prix TTC:" + prix_ttc);

EXERCICE 5 - PRIX HT > TTC, LEVEL 2
A l'aide de la fonction prompt(), demander un prix HT puis un taux de la TVA à l'utilisateur puis insérer le prix TTC dans la page HTML à l'aide de document.body.innerText.
let x = prompt("cost in HT")*1
let ht = prompt("your taxes")*1

let t = x + (x*ht/100);
console.log(t);

EXERCICE 6 - PRIX HT > TTC, LEVEL 3
A l'aide de la fonction prompt(), demander un prix HT puis un taux de la TVA à l'utilisateur puis insérer le prix TTC dans la page HTML à l'aide de document.body.innerHTML. Si le prix TTC est strictement supérieur à 100 on affichera le prix en rouge sinon en vert. Pour simplifier on utilisera les bouts de code suivants sur l'élément HTML de votre choix :

Rouge : style="color: red;"
Vert : style="color: green;"
Par exemple : <h1 style="color: red;">...</h1>
my sol:
let x = prompt("cost in HT")*1
let ht = prompt("your taxes")*1

let t = x + (x*ht/100);
if(t > 100){
    document.body.innerHTML = '<h1 style="color: red;">'+ t + '</h1>';
}
else if(t < 100)
{
    document.body.innerHTML = '<h1 style="color: green;">'+ t + '</h1>';
}


EXERCICE 7
A partir de la page HTML suivante, remplacer le contenu de l'élément HTML #cocktail par Long Island Iced Tea à l'aide d'un script JS.
<body>
   <h1>Mes <span>cocktails préférés</span></h1>
   <p>Mojito</p>
   <p>Gin Fizz</p>
   <p>Bloody mary<p>
   <p>Long Island Iced Tea</p>
   <p>Mais si je ne devais qu'en retenir qu'un : <strong id="cocktail"></strong></p>
</body>

document.getElementById('cocktail').innerText = 'Long Island Iced Tea';


EXERCICE 8
Grâce à la boucle de votre choix, afficher en console tous les multiples de 10 jusqu'à 1000.
for (let pas = 10; pas < 1000; pas+=10) {
    console.log(pas);
  }

EXERCICE 9
Grâce à la fonction prompt(), demander l'âge de l'utilisateur, puis à l'aide d'une condition, déterminer et afficher via une boite de dialogue si l'utilisateur est mineur ou majeur. Pour cet exercice on considère qu'un individu est majeur à partir de 18 ans.
let a = prompt("votre age");
if(a < 18)
{
    console.log("Vous êtes mineur")
}
else if(a > 18)
{
    console.log("Vous êtes majeur")
}


EXERCICE 10
En utilisant la boucle while(), afficher dans la console tous les codes postaux possibles pour le département 77.
let cp = 77000;
while(cp <= 77999) {
   console.log(cp);
   cp++;
}
*/






















