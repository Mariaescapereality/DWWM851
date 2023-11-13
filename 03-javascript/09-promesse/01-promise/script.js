"use strict";
/*
Par défaut, toute programmation en JavaScript est dite "Synchrone"
C'est à dire que tous le fonctionnement de la page et plus précisement de JavaScript, attend la fin d une instruction avant de passer à la suivante.
*/
for (let i = 0; i < 1_000_000_000; i++)
{
    if(i === 999_999_999){
        console.log("1.Synchrone: Fin de la boucle");
    }
}
console.log("2.Bonjour après la boucle Synchrone");
/*

*/
fetch("test.json").then(r=>{
    for (let i = 0; i < 1_000_000_000; i++)
    {
        if(i === 999_999_999){
            console.log("1.Synchrone: Fin de la boucle");
        }
    }
})
console.log("2.Bonjour après le fetch Synchrone");
/*

*/
let request = fetch("test1.json");
console.log(request);
/*
dans cet obket "Promise" on a trois methodes principales
.then() qui va prendre une function callback qui sera appelée, une fois la promesse tenue (réussite);
.catch() qui va aussi prendre une function callback, qui sera appelée, si la promise est rejetée(échec)
.finally() qui prendra, une fonction callback, qui sera appelé une fois la promise traitee (reus ou echec)
*/
//la fonction callback reçoit la reponse du fetch
request.then(res => console.log("then", res));
// la fonction callback reçoit l erreur du fetch
request.then(err => console.log("catch", err));
// la fonction callback ne reçoit rien du tout
request.then(test => console.log("finally", test));
/*
à note que chacun d'entre eux, retourne une promise, ils sont donc chainable :
request.then(callback).catch(callback).finally(callback);
il est possible de resoudre plusieurs promesses en meme temps.
pour cela on utilisera la mathode ".all()" de l objet "Promise".
Methode à laquelle on donnera un tableau contenant toute les promesses à resoudre.

une fois toute résolue, le .then() recvra un tableau contanant toute les reponse
*/
let r1 = fetch("test1.json");
let r2 = fetch("test2.json");

Promise.all([r1, r2]).then(res=>{
    /* 
    si elles sont de meme type (ici des fetchs), on peut les résoudres avec un foreach
    */
    console.log(res);
    res.forEach(r=>{
        if(r.ok)
        {
            r.json().then(data=>console.log(data.prop))
        }
    })
})
/*
on trouvera aussi les methodes "Promise.race()" et "Promise.any()" qui prendront elles aussi un tableau de promesse.
mais contraire de ".all()", elles ne renront que la premiere promesse à s exucuter(la plus rapide).

la difference entre les deux, se fait au niveau du .catch();
.race() lancera le catch si la plus rapide des promise retourneun erreur.
.any() lancera le actch , si toute les promisse, retourne une erreur.

on peut créer nos propres promesses :
Lorsque l on crée une promises, elle prend une function callback
avec 2 arguments.

ce deux arguments représente respectivement la fonction callback qui sear donne au then, et celle donne au catch.


*/
let random = new Promise(function(resolve, reject)
{
    let r = Math.floor(Math.random()*10);
    if(r<5)
    {
        resolve("Bravo! r est petit que 5");
    }
    else
    {
        reject("Désolé, r est plus grand que 5");
    }
});
console.log(random);
random .then(res=>console.log("then", res))
       .catch(err=>console.log("catch", err))
       .finally(()=>console.log("finally", "Mon random est terminé"));

/*
Exemple d'utilisation de promesse :

*/

function burger1(){
     pain1();
     sauce1();
     salade1();
     viande1();
     console.log("le burger est servi, bon appétit bien sur");
}
function pain1(){
    setTimeout (() => console.log("le pain est grillé et placé"), 1000);
}
function sauce1(){
    setTimeout (() => console.log("la sauce est versé"));
}
function salade1(){
    setTimeout (() => console.log("la salade est délicatement  posé avec une pinset par Philippe Etchebest"));
}
function viande1(){
    setTimeout (() => console.log("la viande est cuite par gordon ramsay"), 3000);
}



// avec promesse :

function pain2(){
    return new Promise(resolve => setTimeout(()=>resolve("le pain est grillé et placé par Mariia"), 1000))
}
function viande2(){
    return new Promise(resolve => setTimeout(()=>resolve("la viande est cuite par gordon ramsay"), 3000))
}
function sauce2(){
    return new Promise(resolve => resolve("la sauce est versé par thierry"));
}
function salade2(){
    return new Promise(resolve => resolve("la salade est délicatement  posé avec une pinset par Philippe Etchebest"));
}

function burger2(){
    pain2().then(pain => {
        console.log(pain);
        sauce2().then(sauce =>{
            console.log(sauce);
            viande2().then(viande => {
                console.log(viande);
                salade2().then(salade =>{
                    console.log(salade);
                    console.log("le burger du CHEF est servi");
                })
            })
        })
        
    })
}

burger2()