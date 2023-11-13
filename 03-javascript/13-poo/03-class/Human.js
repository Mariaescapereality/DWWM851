"use strict";
/*
Une classe est un plan de construction pour un objet.

Certaines classes sont déjà  ingré par defaut à Js.
"Date", "Formdata"...

Mais on peut  aussi créer les notre.

Pour cela on utilisera le mot clef "class" suivi du nom de la classe, puis d accolade
  class MaSuperClass{}

Quelques conventions de développement :
- Une class par fichier
- le nom de la classe qui cmmence par une majuscule.
- Le nom du fichier est le meme que celui de la classe.

Lorsqu'on voudra creer un objet à partir d une classe,
(On parle d instancier un objet)
on appelera le nom de la classe precede du mot clef "new"

Const monSuperObjet = new MaSuperClass()

*/
export default class Human
{
    /*
    en JS il existe 3 types de proprietes:

    - La propriete "public", qui est une propriete classique, comme on a pu en avoir jusqu'ici.
    - La propriete "privee", elle prend un "#" devant son nom, 
    Elle n est accessible que dans la classe elle meme.
    - La propriete "static", elle est précédé du mot clef "static",
      Elle n est accessible que sur la classe, et nom sur l onjet instancie
(les methodes aussi peuvent etre static ou privée)
    */
   vivant = true;
   #name = {};
   #age;
   static categorie = "Mammifère";
   /*
   En POO, il existe certaines methodes aux capacités predefinies.
   En JS on retrouvera la plus commune,
   le constructor.
   C'est une méthod que l on ne peut pas appeler nous meme,
   elle est atomatique appelle lors de l instancion de l objet.

   Lors de la creation de l objet ( mot clef "new")

   */
  /**
   * 
   * @param {string} prenom prenom de l humain
   * @param {string} nom Nom de l'humain
   * @param {number|string} age Age de l'humain
   */
  constructor(prenom, nom, age)
  {
    console.log(prenom, nom, age)
    /*
    Les proprietes privees doivent être déclareés à l avance.
    Mais les publiques peuvent être cree à la volée
    */
   this.createdAt = new Date();
   //this.#test = true;
   //this.#age = age;

   //J'utilise mes setters:
   this.#setAge = age;
   this.setNom = nom;
   this.setPrenom = prenom;
  }
  /*
  On peut toujours creer des getters et des setters :
  */
 set setPrenom(p)
 {
    this.#name.prenom = p[0].toUpperCase()+p.slice(1).toLowercase();
 }
 set setNom(n){
    this.#name.nom = n.toUpperCase();

 }
 set #setAge(a){
    this.#age = parseInt(a);
 }
 get getFullName()
 {
    return this.#name.prenom + " " +this.#name.nom;
 }
 get getAge(){
    return this.#age+ " ans";
 }
 //J'ajouter quelques méthodes :
 static description(){
    console.log(`Un humain est un ${this.categorie}, a généralemnt, une tete, un buste, deux bras et deux jambes.`)
 }
 salutation(){
    console.log(`Bonjour, Je suis ${this.getFullName} et j'ai ${this.getAge}`);
 }
 anniversaire(){
    this.age++;
    this.salutation();
 }
}