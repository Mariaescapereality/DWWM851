"use strict";
const div = document.querySelector('.anime');

document.querySelector(".b1").addEventListener("click", animation1);
document.querySelector(".b2").addEventListener("click", animation2);
document.querySelector(".b3").addEventListener("click", animation3);
document.querySelector(".b4").addEventListener("click", animation4);
document.querySelector(".b5").addEventListener("click", animation5);

function animation1(){
    /*
la methode de JS prend deux arguments,
le premier est une liste des keyframes qui devront etre effectues 
le second est un objet contenant les options de la animation,

La liste des keyframe peut etre au choix :
un tableau d objet.
ou un obj contnant des tableaux.
version tableau objet:
    */
   const keyframes = [
    {
        left: 0,
        top: 0
    },
    {
        left: "80%",
        top: "-200px"
    },
    {
        left: "20%",
        top: "500px"
    }
   ];
   const options = {
    duration: 2000,
    iterations: 3,
    fill: "forwards",
    direction: "alternate"
   };
   div.animate(keyframes, options);
}
function animation2(){
    /*
    version objet contenant des tableaux :
    */
   const keyframes = {
    backgroundColor: ["blue", "red", "green"],
    opacity: [1, 0, 0.5]
   };
   div.animate(keyframes,{
    duration: 2000,
    direction: "alternate",
    iterations: 2
   });
}
function animation3(){
    /*
    on peut sauvegarder notre objet "animate" dans une variable afin d avoir acces à de nouvelles méthodes.
    par examples je pourrais ajouter un évènement sur mon animation
    */
   const anime = div.animate({
    transform: ["skew(0deg, 0deg)", "skew(360deg, 180deg)", "skew(0deg, 0deg)"]
   },
   {
    duration: 1500,
    iterations: 1
   });
   anime.addEventListener("finish", ()=>{
    document.querySelector(".b4").style.opacity = 1;
   })
}
let a4 = false;
function animation4(){
    if(a4){
        //annule l animation pour retourner à l'etat de base.
      a4.cancel();
      a4 = false;
    }
    else{
      a4 = div.animate({
        borderRadius: ["0", "50%", "5px", "25%"]
      },{
        duration: 2500,
        fill: "forwards"
      });
    }
}
/*
la méthode animate, n'est qu'un raccourci pour l utilisation des objets suivant :
KeyframesEffect qui prend un objet html, puis les keuframes, puis les options.
animations qui prend l objet "KeyframeEffect" puis la timeline concerné.
*/
const keyframes = new KeyframeEffect(div,
    [
      {transform: "translate(0,0)"},
      {transform: "translate(100%, 50%)"}
    ],
    {
      duration: 3000,
      fill: "forwards"
    }  
      );
      const anime5 = new Animation(keyframes, document.timeline);
async  function animation5(){
    //anime5.play();
    const b5 = document.querySelector('.b5');
    //".playState" contient l etat actuel de l animation
    console.log(anime5.playState)
    switch(anime5.playState)
    {
        case "idle":
            anime5.play();
            b5.textContent = "Pause";
            //console.log(anime5.finished);
            await anime5.finished;
            b5.textContent = "Reverse";
            break;
        case "running":
            anime5.pause();
            b5.textContent = "Continue";
            break;
        case "paused":
            anime5.play();
            b5.textContent = "Pause";
            break;
        case "finished":
            anime5.reverse();
            await anime5.finished;
            b5.textContent = "Start";
            break;
    }
    
}
