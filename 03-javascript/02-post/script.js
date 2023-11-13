"use strict";

const url = "https://api.thedogapi.com/v1/images/upload";
const api_key = "469f2c7f-9aad-4623-8e7a-d72c11a91b18";

const formulaire = document.querySelector('form');
const result = document.querySelector(".result");

formulaire.addEventListener("submit", uploadDog);

function uploadDog(e){
    e.preventDefault();
    const formData = new FormData(formulaire);
    console.log("Chargement en cours");
    result.textContent = "Chargement en cours";
    /*
    fetch peut prendre optionnalement un second argument,
    sous la forme d un objet, pour y ajouter des options.
    Par example changer la methode d envoie, ajouter des donnes en headers,
    ou ajouter un corps à la requête.
    */
   fetch(url,{
    method: "POST",
    headers: {"x-api-key": api_key},
    body: formData
  }).then(checkResponse)
}
function checkResponse(response){
    console.log("Chargement Terminé !")
    result.textContent = "Chargement Terminé !";
    if(response.ok)
    {
        response.json().then(data=>{
            console.log(data);
            result.innerHTML += `<img src="${data.url}" alt="dog" />`;
        })
    }
    else{
        console.log(response.statusText);
        result.textContent = response.statusText;
    }
}
//
var client = new XMLHttpRequest();
client.open("GET", "https://api.zippopotam.us/FR/01000", true);
client.onreadystatechange = function() {
	if(client.readyState == 4) {
		alert(client.responseText);
	};
};

client.send();
//
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
let map;
let service;
let infowindow;

function initMap() {
  const sydney = new google.maps.LatLng(-33.867, 151.195);

  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: sydney,
    zoom: 15,
  });

  const request = {
    query: "Museum of Contemporary Art Australia",
    fields: ["name", "geometry"],
  };

  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "");
    infowindow.open(map);
  });
}

window.initMap = initMap;
//
