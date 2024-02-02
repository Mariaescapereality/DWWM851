<?php
/*
il est possible de changer le type du fichier rendu pour que le navigateur le traite autrement que du HTML

header("content-type:image/png");
header("content-type:application/json");

on peut aussi demander à la page de se réactualiser apres quelques secondes.
header("refresh:5");
On peut ajouter à cela un url pour redigirer après quelques seconde.
header("refresh:5; url=08-a-header.php");
*/
//header("refresh:5; url=08-a-header.php");
$title = "Header Page 2";
require "./ressources/template/_header.php";

echo "<br> ceci est ma page 2 !";

require "./ressources/template/_footer.php";
?>