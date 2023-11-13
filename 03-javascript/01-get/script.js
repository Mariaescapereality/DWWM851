"use strict";
/* 
Lorsque l on veut récupere des données depuis un autre fichier, ou bien depuis une API.
Nous avons basoin que JS envoi une requete (de preference asynchrone) à ce fichier ou au site de l'API.
Pour cela deux solution:
-le plus ancien XMLHttpRequest();
-le plus recent fetch();
*/
const url = "./hero.json";
//----------XMLHttpRequest
const xmlhttp = new XMLHttpRequest();
//je lui ajoute une fonction lors de l evenement "onreadystatechange"
xmlhttp.onreadystatechange = handleRequest
/*
j'ouvre la requete, en lui donnant les parametres suivant:
1. la methode utilisee sous forme de string (ici GET)
2. l url auquel lancer la requete (ici dans mon const url)
3. si la requete doit etre asynchrone ou non. (de preference oui)
*/
xmlhttp.open("Get", url, true)
//on envoi requete
xmlhttp.send();

function handleRequest()
{
    console.log(xmlhttp.readyState, xmlhttp.status);
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
      let success, data;
      /*
      le try{}catch(e){}
      permet de mettre un morceau de code dans les accolades du try, qui sera executé,
      mais qui en cas d erreur ne fera pas planter toute l'application.
      l'erreur sera "capturé" par le catch,
      et pourra etre affiche, ou personallise.

      optionnelement, on peut ajouter à la fin un "finally" qui executerra son code une fois le try catch terminé.
      */
      try
      {
        // .responseText contient la reponse de notre requete.
        console.log(xmlhttp.responseText);
       data = JSON.parse(xmlhttp.responseText);
       console.log(data);
       success = true;
      }
      catch(e)
      {
       console.error(e.message + " Dans -> " + xmlhttp.responseText);
       success = false;
      }
      finally
      {
       if(success)
       {
        document.body.innerHTML = `<h1>${data.squadName}</h1>`
       }
      }
      
    }
}
// ---------Fetch----------
/*
Fetch est toujours en asynchrone.
Par defaut, il est en GET
Donc pour une requete asynchrone en GET, il suffit de lui donner l url en parametre.
il pourra prendre un second parametre, en cas d option supplementaire.

fetch est suivi d un ".then()" qui contiendra la fonctionne callback a lance une fois larequete termine
*/
fetch(url).then(handleFetch);

function handleFetch(response)
{
    console.log(response);
    //".ok" contient un boolean indiquant si la requete s est bien passé.
    if(response.ok)
    {
     /*
     l objet "response" de fetch, contient sa propre méthode asynchrone pour traiter le json.
     je ne passerais donc pas par "JSON.parse()" mais par ".json()"

     elle sera suivi d un ".then()" contenant la fonction callback à lancer une fois le json traite.
     et d un ".catch()" contenant la fonction callback à lancer si il y a erreur dans le traitement du json
     */
    response.json()
    .then(data=>{
        document.body.innerHTML += `<h2>${data.homeTown}</h2>
                                    <h3>${data.formed}</h3>
                                    <h3>${data.secretBase}</h3>`;
    })
    .catch(error=>console.error(error));
    }
     else
     {
        console.log(response.statusText);
     }
}

/*let superJson = {"members": [{
    "name": "Molecule Man",
    "age": "29",
    "secretIdentity": "Dan Jukes",
    "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
    ]
},
{
    "name": "Madame Uppercut",
    "age": "39",
    "secretIdentity": "Jane Wilson",
    "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
    ]
},
{
    "name": "Eternal Flame",
    "age": "1000000",
    "secretIdentity": "Unknown",
    "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
    ]
}
]
};
console.log(superJson);


    let hero = "";
    for (let hero1 of data.members[0]) {
        let x = data.members[0];
        console.log(x[hero1])
        let superhero += `<div>
        <h1>${hero.name}</h1>
        <h2>${hero.age}</h2>
        <p>${hero.secretIdentity}</p>
        <p>${hero.powers}</p>
        </div>`;
    }
    document.body.innerHTML = heroesContent;




*/
//dog

fetch("https://api.thedogapi.com/v1/images/search").then(reponse=>{
    if(reponse.ok)
    {
        response.json().then(data=>{
        console.log(data);
        const img = document.createElement('img')
        img.src = data[0].url;
        document.body.appendChild(img)
        
    })
.catch(error=>console.log(error));
    }
    else
    {
        console.log(response.statusText)
    }
})
