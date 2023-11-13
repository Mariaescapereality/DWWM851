"use strict";
/*
le narrowing en TS est le fait de supprimer des possibilities de types pour nos variables.
*/
function birthday(age) {
    //age peut etre
    //age++
    if (typeof age === "number") {
        age++;
    }
    else {
        age = parseInt(age) + 1;
    }
    /*
    dans le "if" age devient forcement un type mombre,
    dans le "else" age devient forcement un type string.
    */
    return age + " ans";
}
function chaussette(droite, gauche) {
    if (droite === gauche) {
        console.log("Vous avez la paire !", droite, gauche);
        /*
        Pour entrer dans la condition, droite et gauche doivent etre egales.
        la seule possibilite c est que ce soit tout les deux des strings.
        */
    }
}
function planning(date, days) {
    //date.getDate();
    if (date instanceof Date) {
        date.getDate();
    }
    //days++
    if (!Array.isArray(days)) {
        days++;
    }
}
function clavier(e) {
    if (typeof e == "number") {
        console.log(e);
        /*
        Ici "e" est de type "never"
        cela signifie, que selon "typescript", il est impossible d arriver ici
        */
    }
}
/*
si j indique qu une fonction ayant pour role de faire du narrowing, la retourne un boolean.
La logique humaine permet de comprendre la connexion entre ce boolean et le role de la fonction.
mais pour ts il comprend juste que la fonction retourne un boolean, sans savoir son role.
pour indiquer à ts le role de ce boolean,
nous pouvons
*/
//function isDate(a: any):boolean
function isDate(a) {
    return a instanceof Date;
}
function check(a) {
    if (isDate(a)) {
        console.log(a);
    }
}
