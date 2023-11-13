<<<<<<< HEAD
"use script";
import H from "./Human.js"

//------------------Class---------------------
const humain = new H("Maurice", "Dupont", 54);
console.log(H,humain);


//------------------Static--------------------
// Je peux appeler ma propeiete "static" sur ma classe, amis pas sur l objet
console.log(humain.categorie, H.categorie);
//exemple:
console.log(Date.now());
//const now = new Date();
//console.log(n.now());
H.description();
//humain.description();


//-----------------Private--------------------
//Je ne peux pas accèder à mes propriétés privée:
console.log(humain.vivant);
//console.log(humain.#name);

humain.setPrenom = "Gunter";
//humain.#setAge = 32;

humain.salutation();
humain.anniversaire();

//-----------------Heritage-------------------
import D from "./Dev.js"

const dev = new D("Fred", "Fontaine", 18, ["JavaScript", "PHP"]);

dev.salutation();
=======
"use script";
import H from "./Human.js"

//------------------Class---------------------
const humain = new H("Maurice", "Dupont", 54);
console.log(H,humain);


//------------------Static--------------------
// Je peux appeler ma propeiete "static" sur ma classe, amis pas sur l objet
console.log(humain.categorie, H.categorie);
//exemple:
console.log(Date.now());
//const now = new Date();
//console.log(n.now());
H.description();
//humain.description();


//-----------------Private--------------------
//Je ne peux pas accèder à mes propriétés privée:
console.log(humain.vivant);
//console.log(humain.#name);

humain.setPrenom = "Gunter";
//humain.#setAge = 32;

humain.salutation();
humain.anniversaire();

//-----------------Heritage-------------------
import D from "./Dev.js"

const dev = new D("Fred", "Fontaine", 18, ["JavaScript", "PHP"]);

dev.salutation();
>>>>>>> 6d95df47b5d49909ad9ff032b3bc391ca5fb1679
dev.anniversaire();