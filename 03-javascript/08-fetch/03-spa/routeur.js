"use strict";

const main = document.querySelector('main');

const routes = {
    "/": "./pages/home.html",
    "/index.html": "./pages/home.html",
    "/about": "./pages/about.html",
    "/contact": "./pages/contact.html",
    "404": "./pages/404.html"
}
setLinks(document);
window.history.pushState({}, "", "/");
loadPage();

function setLinks(parent)
{
const tags = parent.querySelectorAll('a:not([href^="http"])');
tags.forEach(a=>a.addEventListener("click", router));
}
function router(e)
{
    // je previens l activation du lien
e.preventDefault();
//je change l url de la page aisnsi que l historique avec la href du lien clique.
window.history.pushState({}, "", e.target.href);
//je charge la page corresponde
loadPage();
}

function loadPage()
{
    //je recouperer la chemin de la page
 const path = window.location.pathname;
 //console.log(window.location)
 const route = routes[path] || routes[404];
 //console.log(route);
 fetch(route).then(resp=>{
    if(!resp.ok) return;
    resp.text().then(data=>{
        main.innerHTML = data;
        setLinks(main);
    })
 })
}