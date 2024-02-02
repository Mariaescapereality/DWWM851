<?php
/*

par example, indiquons que l'on est sur une page 404:
*/
//header("HTTP/1.1 404 Not found");
header("HTTP/1.1 418 I'm a teapot");
//à noter que l'on peut aussi utiliser :
if(rand(0,100)<50)
{
    header("Location: 08-a-header.php");
    exit;
    /*
      En indiquant "Location:" je provoque une redirection.
      Lorsque l'on fait une redirection, c'est une bonne pratique de la faire suivre par un "exit" ou un "die" qui sont la meme fonction.
      ceux-ci mettent  fin à l exucution de tout code, afin d etre sur que rien ne ce soit passé avant de redigirer.
      
      die et exit peuvent etre aussi utiliser pour de debougage, afin de stopper le code et afficher un message.
      (on peut ajouter un message entre parenthese)die("on s'arrête ici)
    */
}
$title = "gestion des headers de requete";
require "./ressources/template/_header.php";
//sans parametre, aficche le code la page:
echo http_response_code();
echo "<br> ceci est ma page 2 !";
require "./ressources/template/_footer.php";
?>