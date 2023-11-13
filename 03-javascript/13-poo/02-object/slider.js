let intervalId;
let slider;
let time;
export function create(imgs){
    // Crée mon slider.
    const container = document.createElement("div");
    container.classList.add("slider-container");

    const dots = document.createElement("div");
    dots.classList.add("dots");
    
    imgs.forEach((img, i)=>{
        const div = document.createElement("div");
        div.classList.add("items", "fade");
        const image = document.createElement("img");
        image.src = img;
        div.append(image);
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.dataset.id = i;
        dots.append(dot);
        container.append(div);
    })
    container.append(dots);
    const next = document.createElement("a");
    next.classList.add("next");
    next.innerHTML = "&#10095;";
    const prev = document.createElement("a");
    prev.classList.add("prev");
    prev.innerHTML = "&#10094;";
    container.append(next, prev);
    return container;
}
function select(){
    // Selectionne les éléments interactif de mon slider.
    return {
        dots: document.querySelectorAll(".dot"),
        items: document.querySelectorAll(".items"),
        btns: document.querySelectorAll(".next, .prev")
    }
}
function showItems(n){
    // Affiche un élément de mon slider et cache les autres.
    // const slider = select();
    console.log(slider);
    let index = n> slider.items.length -1 ? 0: n<0? slider.items.length-1: n;
    // if(n > slider.items.length-1){
    //     let index = 0;
    // }
    // else if( n<0){
    //     let index = slider.items.length-1;
    // }
    // else{
    //     let index = n;
    // }
    this.slider.items.forEach((item, i)=>{
        item.style.display = "none";
        this.slider.dots[i].classList.remove("active");
    })
    this.slider.items[index].style.display = "block";
    this.slider.dots[index].classList.add("active");
}
function currentItem(e){
    clearInterval(intervalId);
    // Affiche l'image qui correspond au point.
    let n = parseInt(e.target.dataset.id);
    showItems(n);
}
function changeItem(e){
    clearInterval(this.intervalId);
    let n = document.querySelector(".dot.active").dataset.id;
    if(e.target.classList.contains("next")){
        showItems(++n);
    }else{
        showItems(--n);
    }
    startInterval()
}
export function init(timing = 3000){
    time = timing;
    // Affiche la première image et ajoute les écouteurs d'évènment.
    this.slider = select();
    showItems(0);
    this.slider.dots.forEach(dot=>this.dot.addEventListener("pointerdown", currentItem));
    this.slider.btns.forEach(btn=>this.btn.addEventListener("pointerdown", changeItem));
    startInterval();
}
function startInterval() {
    this.intervalId = setInterval(() => {
        this.slider.btns[1].click();
        // changeItem({target: slider.btns[0]})
    }, time);
}
export default Slider;