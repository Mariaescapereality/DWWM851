<<<<<<< HEAD
/*"use strict";
const paintCanvas = document.getElementById("paintCanvas");
const paintContext = paintCanvas.getContext("2d");
const hintCanvas = document.getElementById("hintCanvas");
const hintContext = hintCanvas.getContext("2d");
	
const kareMi = false;
	
const isDragging = false;
const startPoint = { x:0, y:0 };
	
	
function canvasReady(){
		hintCanvas.onmousedown = paintMouseDown;
		hintCanvas.onmouseup = paintMouseUp;
		hintCanvas.onmousemove = paintMouseMove;
	}
	
function paintMouseDown(e){
		isDragging = true;
		kareMi = document.getElementById("kare").checked;
		startPoint.x = e.offsetX;
		startPoint.y = e.offsetY;
		paintContext.beginPath();
		paintContext.moveTo(startPoint.x, startPoint.y);
		paintContext.strokeStyle = selectedColor;
	}
function paintMouseUp(e){
		isDragging = false;
		if(kareMi){
			hintCanvas.width = hintCanvas.width;
			var width = e.offsetX - startPoint.x;
			var height = e.offsetY - startPoint.y;
			
			paintContext.beginPath();
			paintContext.fillStyle = selectedColor;
			paintContext.fillRect(startPoint.x, startPoint.y, width, height);
		}
	}
function paintMouseMove(e){
		if(isDragging){
			console.log(kareMi);
			if(kareMi){
				hintCanvas.width = hintCanvas.width;
				var width = e.offsetX - startPoint.x;
				var height = e.offsetY - startPoint.y;
				hintContext.strokeRect(startPoint.x, startPoint.y, width, height);
			}
			else{
				paintContext.lineTo(e.offsetX, e.offsetY);
				paintContext.stroke();
			}
		}
	}*/
import P from "./mod2.js"
const paint = P.init()
const appli = document.querySelector('.appli');
appli.append(slide);
=======
/*"use strict";
const paintCanvas = document.getElementById("paintCanvas");
const paintContext = paintCanvas.getContext("2d");
const hintCanvas = document.getElementById("hintCanvas");
const hintContext = hintCanvas.getContext("2d");
	
const kareMi = false;
	
const isDragging = false;
const startPoint = { x:0, y:0 };
	
	
function canvasReady(){
		hintCanvas.onmousedown = paintMouseDown;
		hintCanvas.onmouseup = paintMouseUp;
		hintCanvas.onmousemove = paintMouseMove;
	}
	
function paintMouseDown(e){
		isDragging = true;
		kareMi = document.getElementById("kare").checked;
		startPoint.x = e.offsetX;
		startPoint.y = e.offsetY;
		paintContext.beginPath();
		paintContext.moveTo(startPoint.x, startPoint.y);
		paintContext.strokeStyle = selectedColor;
	}
function paintMouseUp(e){
		isDragging = false;
		if(kareMi){
			hintCanvas.width = hintCanvas.width;
			var width = e.offsetX - startPoint.x;
			var height = e.offsetY - startPoint.y;
			
			paintContext.beginPath();
			paintContext.fillStyle = selectedColor;
			paintContext.fillRect(startPoint.x, startPoint.y, width, height);
		}
	}
function paintMouseMove(e){
		if(isDragging){
			console.log(kareMi);
			if(kareMi){
				hintCanvas.width = hintCanvas.width;
				var width = e.offsetX - startPoint.x;
				var height = e.offsetY - startPoint.y;
				hintContext.strokeRect(startPoint.x, startPoint.y, width, height);
			}
			else{
				paintContext.lineTo(e.offsetX, e.offsetY);
				paintContext.stroke();
			}
		}
	}*/
import P from "./mod2.js"
const paint = P.init()
const appli = document.querySelector('.appli');
appli.append(slide);
>>>>>>> 6d95df47b5d49909ad9ff032b3bc391ca5fb1679
slider.init();