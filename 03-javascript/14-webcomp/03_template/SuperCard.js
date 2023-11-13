<<<<<<< HEAD
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
=======
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
>>>>>>> 6d95df47b5d49909ad9ff032b3bc391ca5fb1679
customElements.define("super-card", SuperCard);