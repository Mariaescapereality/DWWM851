<<<<<<< HEAD
export default class SuperDiv extends HTMLDivElement
{
   constructor()
   {
    console.log("Ma classe superDiv a été construite");
    super();
    this.#setStyle();
    this.addEventListener("click", this.hide);
   }
   #setStyle()
   {
    this.style.display = "block";
    this.style.overflow = "hidden";
    this.style.backgroundColor = this.getAttribute("bg")??"red";
    this.style.transition = "height 0.3s linear";

    this.sizes = this.getBoundingClientRect();
    this.style.height = this.sizes.height+"px";
   }
   hide()
   {
    if(this.style.height == "1rem")
    this.style.height = this.sizes.height+"px";
    
    else
    this.style.height = "1rem";
   }
   connectedCallback()
   {
    console.log("Ma balise est entree dans le DOM");
   }
   disconnectedCallback()
   {
    console.log("Ma balise est sortie du DOM");
   }
   adoptedCallback()
   {
    console.log("J'ai la flemme de faire afficher ce message");
   }
   attributeChangedCallback(name, old, now){
    console.log(`l'attribut ${name} est passé de ${old} à ${now}`);
   }
   static get observedAttributes(){
    return ["style"]
   }
}
customElements.define("super-div", SuperDiv, {extends: "div"});
=======
export default class SuperDiv extends HTMLDivElement
{
   constructor()
   {
    console.log("Ma classe superDiv a été construite");
    super();
    this.#setStyle();
    this.addEventListener("click", this.hide);
   }
   #setStyle()
   {
    this.style.display = "block";
    this.style.overflow = "hidden";
    this.style.backgroundColor = this.getAttribute("bg")??"red";
    this.style.transition = "height 0.3s linear";

    this.sizes = this.getBoundingClientRect();
    this.style.height = this.sizes.height+"px";
   }
   hide()
   {
    if(this.style.height == "1rem")
    this.style.height = this.sizes.height+"px";
    
    else
    this.style.height = "1rem";
   }
   connectedCallback()
   {
    console.log("Ma balise est entree dans le DOM");
   }
   disconnectedCallback()
   {
    console.log("Ma balise est sortie du DOM");
   }
   adoptedCallback()
   {
    console.log("J'ai la flemme de faire afficher ce message");
   }
   attributeChangedCallback(name, old, now){
    console.log(`l'attribut ${name} est passé de ${old} à ${now}`);
   }
   static get observedAttributes(){
    return ["style"]
   }
}
customElements.define("super-div", SuperDiv, {extends: "div"});
>>>>>>> 6d95df47b5d49909ad9ff032b3bc391ca5fb1679
