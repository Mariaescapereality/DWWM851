import slider from "./slider.js";

const images = [];

const appli = document.querySelector('.apply');

const slide = slider.create(images);

appli.append(slide);

slider.init();