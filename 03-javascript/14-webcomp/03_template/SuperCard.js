"use strict";
export default class SuperCard extends HTMLElement
{
    constructor(){
super();
this.shadow = this.attachShadow({mode:"open"});
const template = document.querySelector("#card");
this.shadow.append(template.textContent.cloneNode(true));
        }
}
customElements.define("super-card", SuperCard);