"use strict";
import P from "./person.js";

P.setAge = 18;
P.nom= "dupONT";
P.prenom = "eRIC";

console.log(P.fullName);

P.salutation();
P.anniversaire();

console.log(P);