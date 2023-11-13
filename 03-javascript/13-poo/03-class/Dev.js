"use strict";
import H from "./Human.js";
/*
Une des capacites les plus importantes de la POO, est nomme "heritage".

Cela permet de c reer des classes qui ont les même proprietes et methodes qu une autre classe.

Par example, ici je vais creer une classe "Dev" pour  creer un nouveau develeppeur. Et aux dernieres nouvelles, un dev reste un humain.

J"aimerais donc qu il ai toute
*/
export default class Dev extends H
{
    /**
     * Creer un nouveau dévéloppeur
     * @param {string} prenom prenom de l'umain
     * @param {string} nom nom de l'humain
     * @param {number|string} age age de l'humain
     * @param {string|array} tech Technologie connues
     */
    constructor(){
        /*
        en JS à partir du moment ou l on souhaite changer le constructor d une classe qui a herite.
        il est important d appeler le constructeur du parent
        Pour cela on utilis  la methode "super()";

        on devra alors passer les argument attendu par le parent à la methode "super()"
        */
       super(prenom, nom, age, this.tech)
       this.technique = tech;
       /*
       Lors d un heritage, ce n'est pas tiute les méthodes et proprietes qui sont transmises.
       Puisque ce qui se trouve en "privé" n'est pas transmit
       */
      //this.#setAge = 5;
    }
    set technique(t){
       if(Array.isArray(t))
       {
        this.tech = t
       }else
       {
        this.tech = [t];
       }
    }
    /*
    il est possible de réécrire une methode hérité d'un parent.

    pour cela il suffit de la redéclare:
    */
salutation()
{
    console.log(`Bonjour, ja suis ${this.getFullName} et j'ai ${this.getAge}, i am ${this.tech.join(", ")}`);
}
}