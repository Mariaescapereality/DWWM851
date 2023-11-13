"use strict";
/*
    typescript est une surcouche a js
    cad que tout ce qui est faisable en JS est faisable en typescript

    mais au contraire d'une simple bibliotheque, ici nous avons une nouvelle extension ".ts"
    par ce fait ils sont illisible par le navigateur, il faudra le compiler notre code avant de le dinner  alire a celui ci

    --------- avantage -------

    TS apporte le typage cela nous force a coder avec rigueur en indiquant le type de chaque variable et argument
    il peut aussi nous permettre d'adapter un code moderne a de vieux navigateur.
    TS n'a pas besoin d"etre vhargé par le site, donc notre projet n'est pas alourdi.

    -------- desaventage ---------

    on est forcé de comppiler notre code.
    cela rajoute un outil supplémentaire au projet
    Le code est un peu plus complexe.

    ---------- installation ------

    l'installation se fait via npm avec la commance suivante :

    * npm install typescript --save-dev

    une fois installé vous pouvez lancer la compilation d'un fichier acvec :
    (npx) tsc *pathToFile*.ts

    il est de bon on de separer les fichiers TS et JS:
    * (npx) tsc pathToFile.ts --outDir folderName

    pour eviter de taper tout cela de nouveau on peut créer a la racine de notre projet un fichier nommé
    *tsconfig.json

    une fois le fichier rempli on aura plus qu'a taper :
    * (npx) tsc

    et comme avec SCSS il est possible de demander a typescript de surveiller nos fichiers. cela afin de les compiler automatiquement a chaque sauvegarde

    * (npx) tsc --watch

*/
const btn = document.querySelector("#compte");
let i = 0;
//btn.addEventListener("pointerdown", ()=> {
i++;
// ici typescript provoque une erreur car textContent attend un string et on lui done un nombre
//(btn.textContent) = i
// on devra alors transformer notre nombre en string
////    btn.textContent = i.toString();
///})
/*
    par defaut, typescript compile pour du js un peu agé faisant disparaitre "let" "const" et fonction fleché.
    on peut ajouter a notre fichier de configuration l'option suivante :
    
    * "target": "ES2022" //ESNEXT utilisera toujours la derniere version
    pour indiquer quel version de EcmaScript utiliser pour la compilation.

    typescript compilera le code qu'il y ait une erreur ou non.
    on peut lui interdire avec l'option :
    * "noEmitOnError": true

    si on souhaite que notre code puisse gérer n'importe quelle erreur, on peut demande a TS d'etre bien plus strict sur la detection :
    * "strict": true

        on verra dans la chapitre suivant comment réparer les erreurs
*/
console.log("test");
