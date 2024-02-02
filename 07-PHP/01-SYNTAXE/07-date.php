<?php
$title = "Gestion du Temps en PHP";
require "./ressources/template/_header.php";

//Si on souhaite utiliser le timestamp, on pourra utiliser la fonction:
echo time(), "<br>";
/*
pour afficher directement l heure ou la date 
On utilisera la fonction "date()"
Elle prendra en premier argument, un string correspondent au format qui doit etre lui donner un timestamp passe ou futur pour obtenir la date correspondante.

d = numéro du jour du mois avec le 0
m= numéro du mois avec le 0
Y = année sur 4 chiffres
*/
echo date("d/m/Y"),"<br>";
echo date("d/m/Y", time()-1234567890),"<br>";
/*
d = numéro du jour du mois sans le 0
m= numéro du mois sana le 0
Y = année sur 2 chiffres
*/
echo date("j/n/Y"),"<br>";
/*
D = nom du jour sur 3 lettres
l = nom du jour complet
M = nom du mois sur 3 lettres
F = nom du mois complet
*/
echo date("D = l / M = F"),"<br>";
/*
N = numéro du jour dans la semaine avec dimanche = 7
w = numéro du jour dans la semaine avec dimanche = 0
*/
echo date("D = N = w"),"<br>";
/*
z = numéro du jour dans l année avec 1er janvier = 0
W = numéro de la semaine dans l'année 
*/
echo date("z -> W"),"<br>";
/*
t = nombre de jour dans le mois
L = boolean indiquant si bissextile
*/
echo date("F -> t/ Y -> L"),"<br>";
/*
h = heure en format 12 avec 0
i = minutes avec 0
s = secondes avec 0
a = "am" ou "pm"

*/
echo date("h:i:s a"),"<br>";
/*
g = heure en format 12 sans 0
i =
s =
A = "AM" ou "PM"
*/
echo date("g:i:s A"),"<br>";
/*
H = l'heure au format 24 avec 0
v = millisecondes avec 0
v peut ne pas fonctionner selon les serveur
*/
echo date("H:i:s:v"),"<br>";
/*
G = l heure au format 24 sans 0
O = Différence d'heure avec GMT sans ":"
P = Différence d'heure avec GMT avec ":"
*/
echo date("G:i:s / 0 = P"),"<br>";
/*
I = boolean indiquant l heure d été
Z = Difference de seconde avec GMT
*/
echo date("I / Z"),"<br>";
/*
c = date complete au format ISO 8601
*/
echo date("c"),"<br>";
/*
r = date complete au format RFC 2822
*/
echo date("r"),"<br>";
require "./ressources/template/_footer.php";
?>