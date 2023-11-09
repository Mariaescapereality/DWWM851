"use strict";
const copyright = document.querySelector('footer span');
const mainTime = document.querySelector('main time');
const mainBtn = document.querySelector('main button');
const progress = document.querySelector('.progress');
/*
some obj created from class.
details in next les POO

mais pour cree ces obj, nous devont faire preceder leurs noms
du mot clef "new"

cela va creer une novelle instance de l obj
case obj "date"
*/
const date = new Date();
console.log(date);
//cet objet contient tout un tas de methodes pour recuperer les differentes infos sur la date et l heure:
copyright.textContent = date.getFullYear();

//.toLocateTimeString() nous rend l heure, les minutes et les secondes sous forme de string.
mainTime.textContent = date.toLocaleTimeString();

function timer()
{
    const dateTimer =new Date();
    mainTime.textContent = dateTimer.toLocaleTimeString();
}
/*
setInterval permet de relancer une fonction à un rythme régulier.
il prend la fonction à relancer en premier parametre.
et le tepmes en,tre chaque appel en second parametre (en milliseconde)
la fonction setInterval retournea un id que l on pourra optionnalement reutiliser ailleurs
*/
let idInterval = setInterval(timer, 1000);
console.log(idInterval);
//la fonction "clearInterval()" permet de supprimer un interval. Elle prendra en parametre, l'id de interval à supprimer
mainBtn.addEventListener("click", ()=>clearInterval(idInterval));


/*
setTimeout() fonctionne comme setInterval, prend les meme prarametres,
retourne elle aussi un identifiant qui peut etre utiliser pour l arratz avec "clearTimeout()"
la seule diff, qu au lieu de relancer la fonction à rythme regulier, elle ne la lancera qu une fois, apres avoir attendu le tempes donne en parametr
*/
let idTimeout = setTimeout(()=>console.log("coucou en retard !"), 3000);

clearTimeout(idTimeout);

let w =0;

function load()
{
    console.log(w);
    if(w === 100) return;
    w++;
    progress.style.width = w+"%";
    setTimeout(load, 100)
}
load();
/* clock */

function displayCanvas(){
    var canvasHTML = document.getElementById('myCanvas');
    var contextHTML = canvasHTML.getContext('2d');
    contextHTML.strokeRect(0,0,canvasHTML.width, canvasHTML.height);
	
    //Расчет координат центра и радиуса часов
    var radiusClock = canvasHTML.width/2 - 10;
    var xCenterClock = canvasHTML.width/2;
    var yCenterClock = canvasHTML.height/2;
	
    //Очистка экрана. 
    contextHTML.fillStyle = "#ffffff";
    contextHTML.fillRect(0,0,canvasHTML.width,canvasHTML.height);
	
    //Рисуем контур часов
    contextHTML.strokeStyle =  "#000000";
    contextHTML.lineWidth = 1;
    contextHTML.beginPath();
    contextHTML.arc(xCenterClock, yCenterClock, radiusClock, 0, 2*Math.PI, true);
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.stroke();
    contextHTML.closePath();
	
    //Рисуем рисочки часов
    var radiusNum = radiusClock - 10; //Радиус расположения рисочек	
    var radiusPoint;
    for(var tm = 0; tm < 60; tm++){
	  contextHTML.beginPath();
	  if(tm % 5 == 0){radiusPoint = 5;}else{radiusPoint = 2;} //для выделения часовых рисочек
	  var xPointM = xCenterClock + radiusNum * Math.cos(-6*tm*(Math.PI/180) + Math.PI/2);
	  var yPointM = yCenterClock - radiusNum * Math.sin(-6*tm*(Math.PI/180) + Math.PI/2);
	  contextHTML.arc(xPointM, yPointM, radiusPoint, 0, 2*Math.PI, true);
	  contextHTML.stroke();
	  contextHTML.closePath();
    } 
	
    //Оцифровка циферблата часов
    for(var th = 1; th <= 12; th++){
	contextHTML.beginPath();
	contextHTML.font = 'bold 25px sans-serif';
	var xText = xCenterClock + (radiusNum - 30) * Math.cos(-30*th*(Math.PI/180) + Math.PI/2);
	var yText = yCenterClock - (radiusNum - 30) * Math.sin(-30*th*(Math.PI/180) + Math.PI/2);
	if(th <= 9){
		contextHTML.strokeText(th, xText - 5 , yText + 10);
	}else{
		contextHTML.strokeText(th, xText - 15 , yText + 10);
	}
     	contextHTML.stroke();
	contextHTML.closePath();	
    }

	
    //Рисуем стрелки
    var lengthSeconds = radiusNum - 10;
    var lengthMinutes = radiusNum - 15;
    var lengthHour = lengthMinutes / 1.5;
    var d = new Date();                //Получаем экземпляр даты
    var t_sec = 6*d.getSeconds();                           //Определяем угол для секунд
    var t_min = 6*(d.getMinutes() + (1/60)*d.getSeconds()); //Определяем угол для минут
    var t_hour = 30*(d.getHours() + (1/60)*d.getMinutes()); //Определяем угол для часов
	
    //Рисуем секунды
    contextHTML.beginPath();
    contextHTML.strokeStyle =  "#FF0000";
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + lengthSeconds*Math.cos(Math.PI/2 - t_sec*(Math.PI/180)),
				yCenterClock - lengthSeconds*Math.sin(Math.PI/2 - t_sec*(Math.PI/180)));
    contextHTML.stroke();
    contextHTML.closePath();

    //Рисуем минуты
    contextHTML.beginPath();
    contextHTML.strokeStyle =  "#000000";
    contextHTML.lineWidth = 3;
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + lengthMinutes*Math.cos(Math.PI/2 - t_min*(Math.PI/180)),
				 yCenterClock - lengthMinutes*Math.sin(Math.PI/2 - t_min*(Math.PI/180)));
    contextHTML.stroke();
    contextHTML.closePath();

    //Рисуем часы
    contextHTML.beginPath();
    contextHTML.lineWidth = 5;
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + lengthHour*Math.cos(Math.PI/2 - t_hour*(Math.PI/180)),
				 yCenterClock - lengthHour*Math.sin(Math.PI/2 - t_hour*(Math.PI/180)));
    contextHTML.stroke();
    contextHTML.closePath();	
	
    //Рисуем центр часов
    contextHTML.beginPath();
    contextHTML.strokeStyle =  "#000000";
    contextHTML.fillStyle = "#ffffff";
    contextHTML.lineWidth = 3;
    contextHTML.arc(xCenterClock, yCenterClock, 5, 0, 2*Math.PI, true);
    contextHTML.stroke();
    contextHTML.fill();
    contextHTML.closePath();
	  
    return;
}


window.onload = function(){
    window.setInterval(
	function(){
		var d = new Date();
		document.getElementById("clock").innerHTML = d.toLocaleTimeString();
		displayCanvas();
	}
    , 1000);
}
/*clock 2 */

const deg = 6;
const hr = document.querySelector('#hr');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
})

/* clock  */

