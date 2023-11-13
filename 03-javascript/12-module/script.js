<<<<<<< HEAD
"use strict";
/*
Ecmascript permet l'export et import de fonctions et objets (entre autre choses).
Cela va permettre de diviser nos projets en plusieurs fichiers réutilisable.
Sur un gros projet avec des tas de fichiers, cela évite de devoir trouver dans quel ordre tel ou tel fichier doit être placé.

Pour pouvoir utiliser l import, nous devons ajputer à notre balise "script, l attribut
*type="module"
-------------------------export-----------------------------
pour importer du code, il faut avant tout l exporter.
devant la fonction, l objet, la classe que l on souhaité exporter, nous allons ajouter l un de ces mots clef:
*exporter
*export default
on peut exporter autant d element que l on souhaite, mais un seul par fichier peut être "par defaut"
----------------import------------------------------
un import , ne peut se trouver qu au plus haut niveau du code.
(c'est dire , qu il ne doit se trouver, dans aucun bloc(condition, fonction...))

sans "exporter default" dans le fichier exporté, il suffit d utiliser le mot clef "import", suivi d entre accolade, séparés de virgules, les éléments que l on veut importer
   * import {salut, coucou} from "./salutations.js";

si on "export défault" est présent, on pourra placer avant les accolades, un nom (peu import laquel) qui servira de variables contenant l elem importé par defaut
   * import b,{salut, coucou} from "./salutations.js";
si un nom est trop long ou bien si vous importez plusieyrs fichiers contanant des elem ou meme nom
    * import b,{salut, coucou as c} from "./salutations.js";
on peut aussi importer tout ce qui se trouve exporté dans un fichier, et le ranger dans un seul objet:
    *import * as salutation from "./salutations.js";
si du code executable se triuve dans le fichier importe, il sera executé au premier import.(et le premier seulement)
*/
import chausette,{salut, coucou} from "./salutation.js";

salut();
/*
un element iporte, peut faire appel, a des élémnts, non importé.
Ici
la fonction "coucou" fait appel à une fonction "parler" qui n 'a pas ete importe
*/
coucou("Maurice");
chausette();
//bonjour();

import * as salutation from "./salutations.js";
console.log(salutation);

salutation.salut();
salutation.coucou("Pierre");
salutation.default();

/*
parfois importer directement tout les fichiers dont on aura besoin à l avenir, peut être lourd.
on aimerait pouvoir importer certains fichiers qu'à certaines consitions.
hors on a vu que l on ne pouvait pas faire d import dans un bloc.

ce n'est pas possible avec le mot clef "import" mais c est possible avec la fonction "import()"
*/
window.addEventListener("click", hello);

async function hello()
{
    const hey = await import("./salutation.js");
    console.log(hey)
    /*
    la fonction import retourner une promesse,
    et une fois realisé, elle nous rend un objet contenent tous nos export.
    */
   hey.default();
   hey.coucou("Germaine");
   hey.salut();
=======
"use strict";
/*
Ecmascript permet l'export et import de fonctions et objets (entre autre choses).
Cela va permettre de diviser nos projets en plusieurs fichiers réutilisable.
Sur un gros projet avec des tas de fichiers, cela évite de devoir trouver dans quel ordre tel ou tel fichier doit être placé.

Pour pouvoir utiliser l import, nous devons ajputer à notre balise "script, l attribut
*type="module"
-------------------------export-----------------------------
pour importer du code, il faut avant tout l exporter.
devant la fonction, l objet, la classe que l on souhaité exporter, nous allons ajouter l un de ces mots clef:
*exporter
*export default
on peut exporter autant d element que l on souhaite, mais un seul par fichier peut être "par defaut"
----------------import------------------------------
un import , ne peut se trouver qu au plus haut niveau du code.
(c'est dire , qu il ne doit se trouver, dans aucun bloc(condition, fonction...))

sans "exporter default" dans le fichier exporté, il suffit d utiliser le mot clef "import", suivi d entre accolade, séparés de virgules, les éléments que l on veut importer
   * import {salut, coucou} from "./salutations.js";

si on "export défault" est présent, on pourra placer avant les accolades, un nom (peu import laquel) qui servira de variables contenant l elem importé par defaut
   * import b,{salut, coucou} from "./salutations.js";
si un nom est trop long ou bien si vous importez plusieyrs fichiers contanant des elem ou meme nom
    * import b,{salut, coucou as c} from "./salutations.js";
on peut aussi importer tout ce qui se trouve exporté dans un fichier, et le ranger dans un seul objet:
    *import * as salutation from "./salutations.js";
si du code executable se triuve dans le fichier importe, il sera executé au premier import.(et le premier seulement)
*/
import chausette,{salut, coucou} from "./salutation.js";

salut();
/*
un element iporte, peut faire appel, a des élémnts, non importé.
Ici
la fonction "coucou" fait appel à une fonction "parler" qui n 'a pas ete importe
*/
coucou("Maurice");
chausette();
//bonjour();

import * as salutation from "./salutations.js";
console.log(salutation);

salutation.salut();
salutation.coucou("Pierre");
salutation.default();

/*
parfois importer directement tout les fichiers dont on aura besoin à l avenir, peut être lourd.
on aimerait pouvoir importer certains fichiers qu'à certaines consitions.
hors on a vu que l on ne pouvait pas faire d import dans un bloc.

ce n'est pas possible avec le mot clef "import" mais c est possible avec la fonction "import()"
*/
window.addEventListener("click", hello);

async function hello()
{
    const hey = await import("./salutation.js");
    console.log(hey)
    /*
    la fonction import retourner une promesse,
    et une fois realisé, elle nous rend un objet contenent tous nos export.
    */
   hey.default();
   hey.coucou("Germaine");
   hey.salut();
>>>>>>> 6d95df47b5d49909ad9ff032b3bc391ca5fb1679
}