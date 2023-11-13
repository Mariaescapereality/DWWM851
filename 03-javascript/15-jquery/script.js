"use strict";
/*
Jquery fut cree en 2006 par John Resig.
Il est represente par la phrase "Faire plus en écrivant moins"
il permet de faire du JS plus repidement et plus simplement.

Jquery can use by CDN, en telechargement le fichier ou bian via NPM(ou  autre package manager)

Jquery reste du javascript, donc toute les fonctions JS classique fonc.
suel certains obj

$("") sert à la fois pour "querySelectorAll" et pour "createElement"
$("div")  select tout les div
$("<div>") creer new div

*/
const btnSlide = $("#slide");
console.log(btnSlide);

btnSlide.on("click", slideTitle);

function slideTitle()
{
    console.log("event !");
    /*
    certains effects classique des animations CSS, telle que "fade", "slide" ou "hide" sont implementés de base dans jquery.
    cela avec les methodes "slideIn()","slideOut()","slidetoggle()",et atre anim.


    */
   $("h1").slideToggle(1000, function(){
    console.log("Toggle terminé !");
   
   /*
   pour acceder aux proprietes CSS avec Jquery, on utilisera la methode ".css()".
   elle prendra 1 seul argument si on veut recuperer la valeur.
   et deux argument si on veut la modifier :
   .css("color"), on recuperer la color
   .css("color", "red") on modifier la color

   */
  const color = btnSlide.css("background-color") === "rgb(255, 0, 0)"? "green":"red";
  console.log(color);
  btnSlide.css("background-color", color);
  });
}
// equal document.querySelectorAll("#fade").forEach(el=>el.addEventListener("click", fadeSpan));
//document.querySelector("#fade").addEventListener("click", fadeSpan);
$("#fade").on("click", fadeSpan);

function fadeSpan()
{
    /*
    Au contraire de JS, si il y a plusieurs éléments selectionnés, pas besoin boucle, Jquery s'en occupe
    */
   $("h1 span").fadeToggle();
}
/*
Avec jquery, je peux ajouter plusieurs évènements
*/
$("h1 span").on("mouseenter mouseleave", function(e){
    // en jquery, je n'utiliserais pas "this" mais "$(this)"
    if (e.type == 'mouseenter')
    {
        $(this).css("font-size", "4rem");
    }else{
        $(this).css("font-size", "");
    }
})
/*
$("document").ready(function) (ou de nos jours $(function))
permet d attendre que le DOM a charge avant d exucuter le script (il peut être remplacé par un defer)
*/
$(function(){
    $("#load").on("click", function(){
        $("ol").hide(200);
        /*
        $.ajax("") est le fetch de Jquery.
        On le fera suivre des méthodes ".done()", ".fail()" et ".always()"
        qui sont l equiv de ".then()", ".catch()" et ".finally()"
        */
       $.ajax("liste.json")
       .done(data=>{
        /*
        Jquery comprend directement que les donnes sont un JSON et les traduit automatiquement en objet javascript.

        */
        console.log(data);
        data.forEach(d => {
            /*
            (attention à la methode appendTo de Jquery qui est inversé par rapport au append de JS)
            parent.append(enfant)
            enfant.append(parent)
            */
            $("<li>").text(d).appendTo($("ol"));
            /*const li = document.createElement("li");
            li.textContent = d;
            document.querySelector("ol").append(li);*/
        });//fin forEach
        $("ol").show(500);
       })// fin done
       .fall(err=>console.log(err))
       .always(()=>console.log("requête terminé !"))
    });// fin on click
    $("#anime").on("click", function(){
        $(this).css("position", "absolute");
        /*
        $("#anime").on("click", function(){
        $(this).css("position", "absolute");
        /*
            la fonction animate de jquery diffère de celle de js.
            elle se contente de prendre en premier argument un objet contenant les valeurs a modifier
            - en second la durée de l'animation

            on notera qu'on peut lu  donner des  valeurs a augmenter ou diminuer
            $(this).animate({height: "50rem"}, 500)
        */
        $(this).animate({
        width: "50vw",
        height: "5rem",
        top: "+=50px",
        left: "-=50px"
        }, 500);
    })//fin on click
});// fin ready

/* slider */
let idInterval;
$(document).ready(function () {
    $('#slider ul li:nth-child(odd)').css("background", "#aaa")
    $('#checkbox').change(function () {
        if($(this)[0].checked){
            idInterval = setInterval(moveRight, 1500);
        }else{
            clearInterval(idInterval)
        }
        
    });

    let slideCount = $('#slider ul li').length;
    let slideWidth = $('#slider ul li').width();
    let slideHeight = $('#slider ul li').height();
    let sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({
        width: slideWidth,
        height: slideHeight
    });

    $('#slider ul').css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: +slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: -slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(moveLeft);

    $('a.control_next').click(moveRight);

});
/*
document.addEventListener("DOMContentLoaded", () => {
    
  console.log("");
});
*/
//slider correction
const
slider = document.querySelector("#slider"),
ul = slider.querySelector("ul"),
li = ul.slider.querySelector("li"),
prev = slider.querySelector(".control_prev"),
next = slider.querySelector(".control_next"),
sliderWidth = li[0].offsetWidth,
sliderHeight = li[0].offsetHeight
//oddli = 
function moveLeft()
{
    const anime = ul.animate({left: [0, slideWidth +"px"]}, {duration: 200, fill: "forwards"});
    anime.onfinish 
}
  