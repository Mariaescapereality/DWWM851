<<<<<<< HEAD
"use strict";

export default class SuperBalise extends HTMLElement
{
    constructor () {
        super();
        this.shadow = this.attachShadow({mode: "open"});
        this.info = document.createElement("div");
        this.shadow.textContent = this.getAttribute("text") || "rien a dire";
        this.info.textContent = this.getAttribute("hide") || "2eme riena dire";
        this.shadow.append(this.info);

        this.initStyle()
        this.addEventListener("mouseenter", this.toggle)
        this.addEventListener("mouseleave", this.toggle)
    }

    initStyle(){
        const link = document.createElement("link");
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', './superBalise.css');
        this.shadow.append('link');
        /*const style = document.createElement("style");
        this.shadow.append(style)
        style.textContent = /*  CSS  */
        /*`
            :host{
                font-weight: 900;
                color: red;
                position: relative;
            }
            div{
                position: absolute;
                bottom: -2rem;
                right: -1rem;
                border: 2px solid blue;
                border-radius: 5px;
                background-color: rgba(0,0,255,0.7);
                color: yellow;
                display: none;
            }
        `;*/

    }

    toggle(){
        if(this.info.style.display === "")
            this.info.style.display = "block"
        else
            this.info.style.display = ""
    }

}
=======
"use strict";

export default class SuperBalise extends HTMLElement
{
    constructor () {
        super();
        this.shadow = this.attachShadow({mode: "open"});
        this.info = document.createElement("div");
        this.shadow.textContent = this.getAttribute("text") || "rien a dire";
        this.info.textContent = this.getAttribute("hide") || "2eme riena dire";
        this.shadow.append(this.info);

        this.initStyle()
        this.addEventListener("mouseenter", this.toggle)
        this.addEventListener("mouseleave", this.toggle)
    }

    initStyle(){
        const link = document.createElement("link");
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', './superBalise.css');
        this.shadow.append('link');
        /*const style = document.createElement("style");
        this.shadow.append(style)
        style.textContent = /*  CSS  */
        /*`
            :host{
                font-weight: 900;
                color: red;
                position: relative;
            }
            div{
                position: absolute;
                bottom: -2rem;
                right: -1rem;
                border: 2px solid blue;
                border-radius: 5px;
                background-color: rgba(0,0,255,0.7);
                color: yellow;
                display: none;
            }
        `;*/

    }

    toggle(){
        if(this.info.style.display === "")
            this.info.style.display = "block"
        else
            this.info.style.display = ""
    }

}
>>>>>>> 6d95df47b5d49909ad9ff032b3bc391ca5fb1679
customElements.define("super-balise", SuperBalise)