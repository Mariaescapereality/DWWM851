"use strict";

/*
    le shadow DOM permet de créer un DOM séparé du reste du DOM principale.
    Ce Dom fantome obeit a ses propres regles ignorant les cropts et styles appliqués au DOM parent.
    De meme, les scripts et stymes appliqués au DOM fantome n'influront pas le DOM parent

    Pour créer un "hôte fantome (shadow host)" il suffit d'appeler sur l'élément HTML voulu, la méthode "attachShadow" :
    * ElementHTML.attachShadow ({mode:""})
        le mode peut etre "open" ou "close"
        Le mode "open" peut rendre accessible le shadowDOM depuis n'importe quel script. alors que le "closed" est innaccessible
*/

const open = document.querySelector('.open');
const close = document.querySelector('.close');

const shadowpen = open.attachShadow({mode:"open"});
const shadowclose = close.attachShadow({mode:"closed"});

//accessible
console.log(open.shadowRoot);
//inaccessible
console.log(close.shadowRoot);

/*
    dans l'exemple suivant, chacun des 3 h1 ne sont affectés que par le style de leur DOM

    pour l'exemple, j'utilise des feuillesde style interne mais rien n'empeche d'utiliser des stylsheets externe.
    Le selecteur CSS ":host" correspond au "body" ou au ":root" de notre shadowDOM
*/

const style1 = document.createElement("style");
style1.textContent = /*CSS*/
`
    :host{text-align: right;}
    h1{background-color: black;}
`;

const h01 = document.createElement("h1");
h01.textContent = "un petit texte a la noix";
shadowpen.append(style1, h01);

const style2 = document.createElement("style");
style2.textContent = /*CSS*/
`
    :host{text-align: center;}
    h1{text-shadow: 5px 5px 5px red;}
`;

const h02 = document.createElement("h1");
h02.textContent = "mon ombre cache un fantôme";
shadowclose.append(style2, h02);
/*
Si je tente de selectionner tous les H1, seul celui de DOM principal sera xelectionne.

pour selectionner un element du shadowDOM, il me faudra directement faire la rechrche dans celui ci:
*/
const hx = document.querySelector("h1");
console.log(hx, hx.length);

const hx1 = shadowpen.querySelector("h1");
const hx2 = open.shadowRoot.querySelector("h1");
console.log(hx1, hx2, hx1 === hx2); //le meme

const hx3 = shadowclose.querySelector("h1");
const hx4 = close.shadowRoot?.querySelector("h1"); // si on enleve le ? il emettra une erreur et undefined
console.log(hx3, hx4, hx3 === hx4); //le meme

/*
    maintenant lions le custom Element et le shadow DOM
*/

import SuperBalise from "./SuperBalise.js";

