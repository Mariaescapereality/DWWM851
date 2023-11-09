"use strict";

const dark = document.querySelector("#darkTheme");
dark.addEventListener("input", changeTheme);
/*
une premiere facon de changer un theme, est de modifier la classe du body.
Ayant du CSS déjà prévu pour cela, le reste changera avec.
*/
function changeTheme() 
{
//document.body.classList.toggle("dark", dark.checked);
/*
une second façon de changer un theme, est de modifier les variables utilisés dans le CSS
*/
if(dark.checked)
{
    document.documentElement.style.setProperty("--fond", "#333");
    document.documentElement.style.setProperty("--text", "antiquewhite");
    /*
    je sauvegarde und valeur (string) en localStorage, à la clef "theme".
    */
    localStorage.setItem("theme","dark");
}
else
{
    document.documentElement.style.setProperty("--fond", "antiquewhite");
    document.documentElement.style.setProperty("--text", "#333");
    /*je retire la valeur sauvegarde à la clef "theme" */
    localStorage.removeItem("theme");
}
}
/*
je recupere la valeur qui se trouve à la clef "theme"
si aucune n est trouve, il me retournera "null"
*/
dark.checked = localStorage.getItem("theme") === "dark";
changeTheme();


/*
session et local storage permettent de sauvegarder des informations dans le navigateur sous forme de string.

ils utilisent les meme methode l un comme l autre.

la seule diffence, est que sessionStorage sera supprimé si on quitte le navigateur.
*/
//sessionStorage.setItem("salutation", "Bonjour via session storage!");
//localStorage.setItem("salutation", "Bonjour via local storage!");


/*
.key(number) permet de recuperer les clefs via ler index
*/
console.log(localStorage.key(0));
/*
.clear supprime toute les entrés
localStorage.clear();
*/
console.log(browser.cookies.getAll(""));

/*
1. Ajouter un menu de selection, qui aura au moins 3 themes
selectionnables.
2. Appliquer le theme selectionne grace à JS.
3. Faire en sorte que le choix de l'utilisateurs  soit toujours applique lorsque'il change de page ou actualise.
4. Bonus : Faire un bouton qui change aleatoirement les couleurs du site, et sauvegarder ces couleurs.

1. Add a selection menu, which will have at least 3 themes
selectable.
2. Apply the selected theme using JS.
3. Ensure that the user's choice is always correct when they change pages or refresh.
4. Bonus: Make a button that randomly changes the colors of the site, and save these colors.
*/
//
const background = document.getElementsByTagName("body")[0];
    const button = document.getElementById("button");

    // Function to create random numbers
    const getRandomNumber = (maxNum) => {
      return Math.floor(Math.random() * maxNum);
    };

    // Function to create random RGBA colors
    const getRandomColor = () => {
      const r = getRandomNumber(256);
      const g = getRandomNumber(256);
      const b = getRandomNumber(256);
      const a = Math.random().toFixed(1);

      return `rgba(${r}, ${g}, ${b}, ${a})`;
    };

    //  Function to set background color
    const setBackgroundColor = () => {
      const randomColor = getRandomColor();
      background.style.backgroundColor = randomColor;
    };

    // change background color on button click
    button.addEventListener("click", setBackgroundColor);

    // change background color on page load/refresh
    window.onload = setBackgroundColor;

