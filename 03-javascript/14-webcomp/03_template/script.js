"use strict";

/*
La balise template est par defaut invisible.
Son contenu n'est pas lu par le navigateur.

Son but est d'accueillir des élements HTML qui vont servir à etre recupere par Javascript,
afin d'être cloné et reutilise à divers endroits.

On commencera par selectionné le template qui nous interesse.
Puis avec la propriete "content" on recupere le contenu du tempalte sous la forme d un "documentFragment".

Enfin nous clonerons ce fragment, via la methode ".cloneNode(true)" dont le boolean permet permet de cloner son contenu en entier.

il nous restera qu'a inserer le close dans le HTML
*/
//je recup le template:
const blogTemplate = document.querySelector('#blog');
//Je recupere son contenu
const blogArticle = blogTemplate.content;

const blogTitle = blogArticle.querySelector("h2");
const blogText = blogArticle.querySelector("p");
const blogSource = blogArticle.querySelector("a");

async function getBlog(){
    const response = await fetch("blog.json");
    if(!response.ok) return;
    const articles = await response.json();
    articles.forEach(a => {
        blogTitle.textContent = a.title;
        blogText.textContent = a.content;
        blogSource.href = a.source;
        blogSource.textContent = a.source;
//je clone le template
        const clone = blogArticle.cloneNode(true);
//et j insere le clone dans l html
        document.body.append(clone);
    });
}
getBlog();
/*
Si les templates sont utilisable seul,
les slots eux accompagnent forcement le shadowDOM.

On va donc tester cela sur un webcomponent.

En inserant des belises "slot" avec des atrributs "name"
Puis en liant ce template au shadowDOM d un customElement.

Lorsque je vais appeller mon customElement, si je place des balises HTML ayant un attribut "slot" correspondant à un des attributs "name", alors celle ci viendra remplacee le "slot" correspondent.
*/