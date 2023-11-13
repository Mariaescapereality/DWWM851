<<<<<<< HEAD
"use strict";
/*
en JS tout est objet !
"console" est un objet
"document" est un objet

Notre code se trouve lui même dans l objet "window".

par défaut, "this" represente l objet dans lequel il se trouve.
au plus heut niveau de notre script, il est donc égale à l objet "window"
 * à l exception script type module
*/
console.log(this, this === window);
/*
dans une fonction il sera soit "undefined" si on utilise "use strict";
soit il prendra l objet parent (ici window);
*/
function test(){
    console.log(this)
}
test();
/*
dans écouteur d évenement, "this" représente l element sur lequel l écouteur a été placé
*/
document.body.addEventListener("click", test);
/*
à la deferance de "event.target" qui renvera l eement sur lequel l événement à lieu.
(dans ce cas précis, soit body, soit span)
this renvera toujours le m^^eme élément
(ici body)
*/
document.body.addEventListener("click", function(event){
    console.log(this, event.target);
});
/*
!!! attention
dans le cas d une fonction flechee, this retournera l element englobant.
ici "window"
*/
document.body.addEventListener("click",(event)=>{
    console.log(this, event.target);
});
/*
la methode ".bind(param)" permet de creer une nouvelle fonction, à partir d une existante.
Cette nouvele fonction aura un "this" correspond au parametre de "bind".
*/
const test2 = test.bind({text: "Salut tout le monde !"});
test();
test2();
/*
Bind pourra être utile pour définir un "this" précis.
*/
let article = document.createElement("article");
document.body.addEventListener("click", test.bind(article));

document.body.click();
=======
"use strict";
/*
en JS tout est objet !
"console" est un objet
"document" est un objet

Notre code se trouve lui même dans l objet "window".

par défaut, "this" represente l objet dans lequel il se trouve.
au plus heut niveau de notre script, il est donc égale à l objet "window"
 * à l exception script type module
*/
console.log(this, this === window);
/*
dans une fonction il sera soit "undefined" si on utilise "use strict";
soit il prendra l objet parent (ici window);
*/
function test(){
    console.log(this)
}
test();
/*
dans écouteur d évenement, "this" représente l element sur lequel l écouteur a été placé
*/
document.body.addEventListener("click", test);
/*
à la deferance de "event.target" qui renvera l eement sur lequel l événement à lieu.
(dans ce cas précis, soit body, soit span)
this renvera toujours le m^^eme élément
(ici body)
*/
document.body.addEventListener("click", function(event){
    console.log(this, event.target);
});
/*
!!! attention
dans le cas d une fonction flechee, this retournera l element englobant.
ici "window"
*/
document.body.addEventListener("click",(event)=>{
    console.log(this, event.target);
});
/*
la methode ".bind(param)" permet de creer une nouvelle fonction, à partir d une existante.
Cette nouvele fonction aura un "this" correspond au parametre de "bind".
*/
const test2 = test.bind({text: "Salut tout le monde !"});
test();
test2();
/*
Bind pourra être utile pour définir un "this" précis.
*/
let article = document.createElement("article");
document.body.addEventListener("click", test.bind(article));

document.body.click();
>>>>>>> 6d95df47b5d49909ad9ff032b3bc391ca5fb1679
// par la suite nous utiliserons "this" dans nos objets.