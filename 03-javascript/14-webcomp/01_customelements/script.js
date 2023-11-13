import SuperBalise from "./superBalise.js"
import SuperDiv from "./superDiv.js"
/*
Les customs elements (elem personalises) permettent de creer nos propres elem HTML.
On va pouvoir creer de nouvelles balises, avec leurs propres règles et capacites.

il existe deux types de cust elem:
- les elem personalises autonomes qui heritent de "HTMLElement"
- les elements personalises integres qui heritent d un elem HTML particulier (div, p, li...)

Pour creer, nous allons devoir définir une clesse qui herite de l element voulu.
puis hors de celle ci, utiliser la methode:
 customElements.define()

 cette methode prendra en premier argument, un string qui sera le nom de votre balise personalisee.
 !imp : les noms des customs elements doivent prendre un tiret "-"

 En second argument, la classe que vous avez définie plus haut.
 Et optionnelemrnt, cela pour les customs elements integres, elle prendra le nom de lq classe dont elle hérite.

 Une fois la méthode précédente appelee, pour utiliser nos balises, il suffrira de suivre une des façons suivantes:
 autonome: "<nom-balise></nom-balise>"

 integré: "<baliseParent is="nom-balise"></baliseParent>"

 il est aussi possible d ajouter des "cycle de vie" à nos élément HTML.
 les cycles de vie sont des méthodes prédéfinies qui se déclarement automatiquement à certaines moment précis:

  connectedCallback : appelé lorsque l objet a été attaché au DOM.

  disconnectedCallback : appelé lorsque  l objet a ete detache du DOM.

  apoptedCallback : appelé lorsque l objet est deplace d un DOM à un autre. (avec un iframe par example)

  attributeChangeCallback : appele lorsque l attribut cible est modifie
       
        ce dernier prendra 3 arguments :
        
        le nom de l'attribut modifié
        la valeur avant modification
        la nouvelle valeur

        pour que cela fonctionne on devra accopagner cela d'un "getter static" appelé :
            "observedAttibutes" qui retournera un tableau contenant les attributs a observer
*/