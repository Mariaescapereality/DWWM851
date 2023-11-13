"use strict";
//dom_ document object model
/*
le dom est une reprensentation sous forme objet, de notre document html
almost all method is links, pass object document
*/
console.log(document);
console.dir(document);//chrome
/*
La methode "createElement()" de l objet document permet de creer un objet representant une balise Html.
il prendra en parametre, un string indiquant le nom de la balise à creer.
*/
const h = document.createElement("header");
console.log(h);
/*
elemznt created in forme of object javascript. but not in page
*/
const m = document.createElement("main");
const f = document.createElement("footer");
//i can change content html of balise with "innerHTML"
h.innerHTML = "<h1>Super site en JS</h1>";
f.innerHTML = /*html */`<ul><li>Menu 1</li></ul><ul><li>Menu 2</li></ul><ul><li>Menu 3</li></ul>`;
console.log(h,f);
/*
mes elements sont bien rempli, mais ils n apparaissent toujours pas dans ma page html.

pour cela ja vais avoir besoin de selectionner le body.
*/
console.log(document.body);
/*
par defaut, le body est "null"
cela est du au fait que le script est execute avant que la balise "body" soit lu.
pour corriger cela, deux solutions:
- deplacer la balise script en bas de page.
-ajouter l attribut "defer" au script, qui lui demandera de lancer celui ci, qu une fois le html charge complement.
avant travailler sur un elem html.
cela peut etre une bonne chose de verif qu il existe
*/
if (document.body) {
    /*
    la method "append()" peut etre utilis sur n importe quel elem html(non auto fermant)
    elle prendra en argument, autant d element html (ou string), que souhaite.

    elle ajoutera ces elements a l interieyr de l elem HTML qui la precede:
    */
   document.body.append(h, m, f);
   //il existe aussi ".prepend()" pour ajouter au debut.
}
for (let i = 0; i < 5; i++)
{
    const p = document.createElement("p");
    /*
    ".textContent" permet d inserer du text dans un element html.
    mais à la difference de ".innerHTML", les balises presentes ne seront pas interprete.

    cela peut etre utile, si votre  ajout depend de l entre d un utilisateur
    */
   p.textContent =  "<strong>Lorem ipsum</strong>dolor sit amet, consectetur adipisicing elit. Quod voluptatibus atque, totam doloremque ipsum perspiciatis debitis delectus sed fuga ullam in! Doloribus quidem odit, dolorum repudiandae repellat obcaecati veniam atque!";
   /*
   ".appendChild()" a la meme role que ".append()"
   Mais ne peut prendre qu un seul element HTML, et pas de string.
   */
   m.appendChild(p);

      

  
}
//fast way

const button1 = document.createElement("div")
button1.innerHTML = " <div> <h2>santé</h2>  <p>Manger 5 fruits et legumes</p>  <button> Tchin tchin </button> <button> Le gras c'est la vie </button> </div>"; 
document.body.append(button1);

/*
full way

const t = document.createElement("div"); 
document.body.append(t);

const g = document.createElement("h2");
document.body.append(g);
g.innerHTML = " <div> <h2>santé</h2> </div>"

const l = document.createElement("p");
document.body.append(l);
l.innerHTML = " <div> <p>blablablabla</p> </div>"

const b1 = document.createElement("button")
b1.textContent = "Tchin Tchin";

const b2 = document.createElement("button")
b2.textContent = "Le gras c'est la vie";

t.append(b1, b2);

*/



/*
const msg = document.createElement("p");
p.textContent = "This is message for you. Have a nice day and eat well your lunch."
m.appendChild(msg);
const btn1 = document.createElement("div button:first-of-type");
p.textContent = "Ok"
m.appendChild(btn1);

*/

