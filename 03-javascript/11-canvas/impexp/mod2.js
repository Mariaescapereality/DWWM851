/*const paint = {

    canvas: document.querySelector('canvas'),
    ctx: canvas.getContext("2d"),
    
    resize()
{
    // sauvegarde la partie de l'image indiqué :
    const snapshot = this.ctx.getImageData(0,0, canvas.width, canvas.height);
    const size = this.document.body.getBoundingClientRect();
    // console.log(size);
    this.canvas.width = this.size.width;
    this.canvas.height = this.size.height;
    // Replace l'image donné à la position indiqué
    this.ctx.putImageData(snapshot, 0, 0);
},

callFunction(){
    resize();
window.addEventListener("resize", this.resize.bind(this));
},




}*/
const paint = {
    paintCanvas: document.getElementById("paintCanvas"),
	paintContext: paintCanvas.getContext("2d"),
	hintCanvas: document.getElementById("hintCanvas"),
	hintContext: hintCanvas.getContext("2d"),
	
	kareMi: false,
	
	isDragging: false,
	startPoint: { x:0, y:0 },
    canvasReady(){
		this.hintCanvas.onmousedown = this.paintMouseDown;
		this.hintCanvas.onmouseup = this.paintMouseUp;
		this.hintCanvas.onmousemove = this.paintMouseMove;
	},
    paintMouseDown(e){
		this.isDragging = true;
		this.kareMi = document.getElementById("kare").checked;
		this.startPoint.x = this.e.offsetX;
		this.startPoint.y = this.e.offsetY;
		this.paintContext.beginPath();
		this.paintContext.moveTo(this.startPoint.x, this.startPoint.y);
		this.paintContext.strokeStyle = this.selectedColor;
	},
    paintMouseUp(e){
		this.isDragging = false;
		if(kareMi){
			this.hintCanvas.width = this.hintCanvas.width;
			this.width = this.e.offsetX - this.startPoint.x;
			this.height = this.e.offsetY - this.startPoint.y;
			
			this.paintContext.beginPath();
			this.paintContext.fillStyle = this.selectedColor;
			this.paintContext.fillRect(startPoint.x, startPoint.y, width, height);
		}
	},
    paintMouseMove(e){
		if(isDragging){
			console.log(kareMi);
			if(kareMi){
				hintCanvas.width = hintCanvas.width;
				width = e.offsetX - startPoint.x;
				height = e.offsetY - startPoint.y;
				hintContext.strokeRect(startPoint.x, startPoint.y, width, height);
			}
			else{
				paintContext.lineTo(e.offsetX, e.offsetY);
				paintContext.stroke();
			}
		}
	}
};
export default paint;

