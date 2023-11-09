"use strict";

const Slider = {
    intervalId,
    slider: {
        dots:[],
        items:[],
        
    },
    time,
    reate(imgs){
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
}
