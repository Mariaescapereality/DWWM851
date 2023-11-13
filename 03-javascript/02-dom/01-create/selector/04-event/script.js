"use strict";
function test(e) {
    console.log(e);
}
const h1 = document.querySelector('header > h1');
/*
lorsqu un utilisateur integragie avec la page,
il bouge la souris, il clique, il tape au clavier, il scroll...
cela produit un evenement, nous aloons pouvoir dire à javascript d ecouter ces evenements et de faire une action a ce moment.

pour cela plusieurs methode la premier etant :
.addEventListener("event", fonction);
il prednra premier parametr le nom de l evenement à ecouter (toujours à miniscule) et en second la fonction à lancer lorsque l evenemnt ce produit
*/
h1.addEventListener("click", test);
/*
par defaut, addEventListner va passer à la fonction donné, un parametre contenant un objet correspondant à l évenement.
Ici un objet "Click" qui contient entre autre.
 la position de la souris au clique
 la cible de l evnement (où on a cliqué)

 on peut ajouter autant d evenement que l on souhaite sur un meme élement.

 On peut aussi utiliser des fonction anonyme ou fléché.
*/
let x = 0;
h1.addEventListener("click", function(e){
    let r = Math.floor(Math.random()*360);
    e.target.style.transform = `rotate(${r}deg)`;
    x++;
    if(x===5)e.target.style.color = "red";
});

const menu1 = document.querySelector('.menu1');
/*
on peut aussi ajouter un evenement via la propriete qui correspond.
chaque élément HTML à de multiples proprietes commençant par "on" suivi du nom de l evenement 
(onclick, onload...)
si cette propr est repmlies avec un fonction, cela aura le meme effet
*/
menu1.onclick = test;
//on ne peut ajouter qu un seul evenement sur une propriete
menu1.onclick = (e)=>{
    if(e.target.style.fontSize === "")
    e.target.style.fontSize ="2em";
else
e.target.style.fontSize = ""
}
/*
une trosieme façon d ajouter un ecouteur d evenement existe, mais celle ci est plutot deconseillé car melangeant HTML et JS.
l examplese trouve dans HTML sur "menu2"

si on souhaite supprimer un ecouter d evenement, pour l attribut, il suffit de le vider :
*/
menu1.onclick="";
/*
pour le addEventListener, on utilisera removeEventListener, en lui donnant les meme parametres:
*/
h1.removeEventListener("click", test);
// petit defaut, on ne peut retirer que les event utilisant une fonction nommé
//------------input event----------
const div1 = document.querySelector('.div1');
const input1 = div1.querySelector('input');
const btn1 = div1.querySelector('button');
/*
l evenement "input" réagis à chaque modification d un élément de formulaire.
(input, textarea, checkbox, radio...)
il existe aussi l evenement "change" qui reagi une fois l input valide. (par example sur un textarea ou input:text, cela sera une fois l input quitté)
*/
input1.addEventListener("input", e=>{
    /*
    sur tous les element HTML de formulaire, on trouvera l attribut "value" qui permet de recuperer son contenue.(sa valeur)
    */
    console.log(e.target.value);
    if(e.target.value != "")
     btn1.textContent = e.target.value;
    else
    btn1.textContent = "Clique moi !";
})

//-----------Options----------------
/*
on peut ajouter des options à notre addEventListener.
Pour cela on ajoutera un objet "{}" en troisième argument.
            ElementHTML.addEventListner("event", function, {option:valeur});
*/
btn1.addEventListener("click",()=>h1.textContent=input1.value,{once:true});

const div4 = document.querySelector('.div4');
const gp = document.querySelector('.grandParent');
const pa = document.querySelector('.parent');
const en = document.querySelector('.enfant');

/*
si plusieurs evenement sont declanches par une meme action (par example un clique).
alors l'ordre sera defini, du parent le plus proche au plus éloigné.

JS fonctionne en deux phases, une phase de "capture" où il veriefier les evenements à declencher allant des parents vers les enfants.
une phase de bulle qui remonte en activant les evenement
*/
div4.addEventListener("click", ()=>console.log("div4"), {capture: true});
gp.addEventListener("click", ()=>console.log("gp"));
pa.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log("pa");
});
en.addEventListener("click", ()=>console.log("en"));
/*
l'option "{capture:true}" permet d'activer l'évènement lors de la pjase de capture, donc avant ceux en phasede bulle.

ajouter en "event.stopPropagation()" dans une fonction, permet d emepechetr l execution des evenement qui devraient etre activer par la suite
*/
const menu5 = document.querySelector('.menu5 a');
menu5.addEventListener("click", e=>e.preventDefault());// block the go to the link
/*
"event.preventDefault()" permet d annuler l action par defaut de cet evenement.
 un clique sur lien ne redigera pas. 
 une soumission de formulaire ne sera pas effectué...
*/
/*
    Exercice 1 :

    Faire que lors de la selection d'une couleur dans la div 2
    le texte du bouton change de couleur, 
    et lors de l'appuie sur le bouton, 
    le background de la div change de couleur.
*/
const div2 = document.querySelector('.div2');
const input2 = div2.querySelector('input');
const button2 = div2.querySelector('button');

//input2.addEventListener("click", ()=> button2.style.color = input2.value);

input2.addEventListener("click", ()=> {
   button2.style.color = input2.value;
  
  });

  button2.addEventListener("click", ()=> {
    div2.style.backgroundColor = input2.value;
});
    

/* 
    Exercie 2 :

    Lors du clique sur le bouton de la div 3,
    faire apparaître la modale
    Cette modale doit contenir un élément permettant de la faire disparaître.
*/
/*baby sol*/
const div3 = document.querySelector('.div3');
const input3 = div3.querySelector('input');
const bouton2 = div3.querySelector('button');
const bouton3 = document.querySelector('.hidden button:nth-of-type(2)');
const modale1 = document.querySelector(".hidden");
bouton2.addEventListener("click", function() {
modale1.style.display = "grid";
});
bouton3.addEventListener("click", function() {
    modale1.style.display = "";
    });

/*sol 2 
const div3 = document.querySelector('.div3');
const input3 = div3.querySelector('input');
const bouton2 = div3.querySelector('button');
const bouton3 = document.querySelector('.hidden button:nth-of-type(2)');
const modale1 = document.querySelector(".hidden");
function modalToggle()
{
    modale1.classList.toggle(".hidden");
}
bouton2.addEventListener("click", modale1Toggle);
bouton3.addEventListener("click", modale1Toggle)
*/ 



/* 
    Exercice 3 :

    Faites que tous nos li dans la nav double de taille lorsque l'on clique dessus.
    puis retournent à leurs tailles d'origine si on clique de nouveau dessus.
*/
const nav = document.querySelector('body nav');
const li = document.querySelector('nav ul li');
for(let e = 0; e < li.length; e++) {
console.log(li[e]);
li[e].onclick = (f) =>{
    if(f.target.style.fontSize == "")
    f.target.style.fontSize = "2rem";
    else f.target.style.fontSize = "";
}
}


/* 
    Exercie 4 :
    
    Utilise les évènements "mouseenter" et "mousemove" pour 
    faire que lorsque l'on passe sur le span du footer, il commence à suivre la souris
    et cela jusqu'à ce que l'on clique, il retournera alors à sa position d'origine.
*/
const span = document.querySelector('span');
const footer = document.querySelector('footer');

footer.addEventListener("mouseenter", e=>{
    span.style.position = "absolute";
    document.addEventListener("mousemove", ()=>{
        span.style.left = `${e.clientX}px`;
        span.style.top = `${e.clientY}px`;
    })
document.addEventListener("click",()=>{
    span.style.position = "";
    console.log("coucou");
})
})



