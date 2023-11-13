"use strict";
const setTheme = theme => document.documentElement.className = theme;
    document.getElementById('theme-select').addEventListener('change', function() {
    setTheme(this.value);
    });
/*function setTheme (theme) {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme);
}

document.getElementById('couleurs').addEventListener('change', function() {
  setTheme(this.value);
  
});


const getTheme = () => {

    const theme = localStorage.getItem('theme');

    theme && setTheme(theme);

    }

    getTheme();*/








    ////
    /*var LanguagePicker = function(element) {
        this.element = element;
        this.select = this.element.getElementsByTagName('select')[0];
        this.options = this.select.getElementsByTagName('option');
        this.pickerId = this.select.getAttribute('id');
        // ..
        initLanguagePicker(this);
      };
      
      //initialize the LanguagePicker objects
      var languagePicker = document.getElementsByClassName('js-language-picker');
      if( languagePicker.length > 0 ) {
        for( var i = 0; i < languagePicker.length; i++) {
            new LanguagePicker(languagePicker[i]);
        }
      }
      function initLanguagePicker(picker) {
        // create the HTML for the custom dropdown elementand and insert it in the DOM
        picker.element.insertAdjacentHTML('beforeend', initButtonPicker(picker) + initListPicker(picker));
      };
      
      function initButtonPicker(picker) { // create the button element -> language picker trigger
        var button = '<button class="language-picker__button" aria-label="'+picker.select.value+' '+picker.element.getElementsByTagName('label')[0].textContent+'" aria-expanded="false" aria-controls="'+picker.pickerId+'-dropdown">';
        button = button + '<span aria-hidden="true" class="language-picker__flag language-picker__flag--'+picker.select.value+'"></span>';
        return button+'</button>';
      };
      
      function initListPicker(picker) { // create language picker dropdown
        var list = '<div class="language-picker__dropdown" aria-describedby="'+picker.pickerId+'-description" id="'+picker.pickerId+'-dropdown">';
        list = list + '<p class="sr-only" id="'+picker.pickerId+'-description">'+picker.element.getElementsByTagName('label')[0].textContent+'</p>';
        list = list + '<ul class="language-picker__list" role="listbox">';
        for(var i = 0; i < picker.options.length; i++) {
          var selected = picker.options[i].hasAttribute('selected') ? ' aria-selected="true"' : '',
            language = picker.options[i].getAttribute('lang');
          list = list + '<li><a lang="'+language+'" hreflang="'+language+'" href="'+getLanguageUrl(picker.options[i])+'"'+selected+' role="option" data-value="'+picker.options[i].value+'" class="language-picker__item language-picker__flag language-picker__flag--'+picker.options[i].value+'"><span>'+picker.options[i].text+'</span></a></li>';
        };
        return list;
      };
      picker.trigger.addEventListener('click', function(){
        toggleLanguagePicker(picker);
     });
     
     function toggleLanguagePicker(picker, bool) {
       var ariaExpanded;
       if(bool) {
          ariaExpanded = bool;
       } else {
          ariaExpanded = picker.trigger.getAttribute('aria-expanded') == 'true' ? 'false' : 'true';
       }
     
       picker.trigger.setAttribute('aria-expanded', ariaExpanded);
       if(ariaExpanded == 'true') {
         picker.dropdown.addEventListener('transitionend', function cb(){
           // once the dropdown is visible -> move focus from trigger to the first language in the list
           picker.firstLanguage.focus();
           picker.dropdown.removeEventListener('transitionend', cb);
         });
       }
     };*/
     /* listen for key events*/
     /*window.addEventListener('keyup', function(event){
       if( KeyboardEvent.keyCode && KeyboardEvent.keyCode == 27 || event.key && event.key.toLowerCase() == 'escape' ) {
         // close language picker on 'Esc'
         pickerArray.forEach(function(element){
           moveFocusToTrigger(element); // if focus is still within the dropdown, move it to dropdown trigger
           toggleLanguagePicker(element, 'false'); // close dropdown
         });
       } 
     });
     function moveFocusToTrigger(picker) {
        if(picker.trigger.getAttribute('aria-expanded') == 'false') return;
        if(document.activeElement.closest('.language-picker__dropdown') == picker.dropdown) picker.trigger.focus();
      };*/
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
5. Make choice of languages et changer H1 selon le langue choisie sauvegarde le choix
*/
/* 
    1. Ajouter un menu de selection, qui aura au moins 3 thèmes selectionnables.
    2. Appliquer le thème selectionné grâce à JS. 
    3. Faire en sorte que le choix de l'utilisateur soit toujours appliqué lorsqu'il change de page ou actualise.
    4. Bonus : Faire un bouton qui change aléatoirement les couleurs du site, et sauvegarder ces couleurs.
*/
"use strict";
// const body = document.querySelector('body');
// const header = body.querySelector('header');
// const label = header.querySelector('.switch2');
const color = document.body.querySelector('header .switch2 #all');

if(color)
{
    color.addEventListener("input", changeTheme);
}

function changeTheme()
{
    if(color.value == "blue")
    {
        document.documentElement.style.setProperty("--fond", "blue");
        localStorage.setItem("theme", "blue");
    }
    if(color.value == "red")
    {
        document.documentElement.style.setProperty("--fond", "red");
        localStorage.setItem("theme", "red");
    }
    if(color.value == "green")
    {
        document.documentElement.style.setProperty("--fond", "green");
        localStorage.setItem("theme", "green");
    }
    localStorage.removeItem("couleurFond");
    document.body.style.backgroundColor = "";
}
const recup = localStorage.getItem("theme");
console.log(recup);
if(recup)
{
    document.documentElement.style.setProperty("--fond", recup);
}
// exo 4 :
const boutonChangerCouleur = document.getElementById('bouton-changer-couleur');

boutonChangerCouleur.addEventListener("click", function()
{
    const couleurFond = genererCouleurAléatoire();
    document.body.style.backgroundColor = couleurFond;
    localStorage.setItem("couleurFond", couleurFond);
    localStorage.removeItem("theme");
})

const recupAlea = localStorage.getItem("couleurFond");
if(recupAlea)
{
    document.body.style.backgroundColor = recupAlea;
}

function genererCouleurAléatoire()
{
    const characters = "0123456789ABCDEF";
    let couleur = '#';
    for(let i = 0; i<6; i++)
    {
        couleur += characters[Math.floor(Math.random()*16)];
    }
    return couleur;
}