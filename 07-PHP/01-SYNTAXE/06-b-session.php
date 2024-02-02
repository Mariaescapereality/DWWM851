<?php
/*
Si on a besoin de la session sur quelques rare pages,
autant l activer uniquement là ou elle est utile.
Mais si tout  votre site en a besoin, il est possible de placer le "session_start" dans un fichier charge à tout
*/
session_start(["cookie_lifetime"=> 3600]);
/*
sur un projet complexe, il est possible d oublier que l on a deja fait un session_start
Un message de "notice" s affiche alors indiquant que le second a ete ignore.
Pour eviter cela on peut faire une condition avec "session_status()" et l une trois constantes suivante:
PHP_SESSION_NONE
PHP_SESSION_DISABLED
PHP_SESSION_ACTIVE
*/
if(session_status() == PHP_SESSION_NONE) session_start();
$title = "Session page 2";
require "./ressources/template/_header.php";

/*
Lorsque vous utiliser des valeurs qui peuvent ne pas exister.
(par example ici, si on vient sur la page 2 sans etre passe par la 1)
il vaut mieux verifier qu elles existent avant de tenter de les afficher.
on pourra par example utiliser "isset()"
*/
if(isset($_SESSION["username"], $_SESSION["food"], $_SESSION["age"]))
{
    $message1 = $_SESSION["username"] ."aime la"
    . $_SESSION["food"] . "et a"
    . $_SESSION["age"];
}

/*
si je souhaite supprimer une information de la session,
je peux simplement utiliser "unset()" sur cette information
*/
unset($_SESSION["food"]);
var_dump($_SESSION);
/*
et si je veux faire disparaitre la session dans son entierete.
Je vais passer par trois etapes.
    lapremier est "session_destroy()"
*/
echo "<hr>";
session_destroy();
var_dump($_SESSION);
/*
une fois la session détruite,
il reste cela dit les informations de session dans la superglobal et cela jusqu'au prochain rechargement.
on pourra sécurité "unset" la superglobal
*/
unset($_SESSION);
/*
la sesion a bien disparut, mais il reste le cookie sur le navigateur de l utilisateur.
Pour le supprimer, on lui indiquera une date d expiration passe
*/
setcookie("PHPSESSID", "", time() -3600);
/*
il est possible de creer des sessions avec un nom different en changeant ce nom avant le session_start();
pour cela on utilisera "session_name();"
*/
$title = "Session page 2";
require "./ressources/template/_header.php";
echo $message ??"";
echo "<a href='./06-a-session.php'>Page 1</a>";
require "./ressources/template/_footer.php";
?>