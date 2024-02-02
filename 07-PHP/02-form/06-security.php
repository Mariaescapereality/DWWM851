<?php
/*
    Les failles de securite qu'un développeur web se doit de prévoir sont:
        - XSS (Cross Site Scripting)
        - CSRF (Cross Site Request Forgery)
        - Brute Force
        - Injection SQL
    la priemere, XSS, consiste à pouvoir integrer du HTML ou des SCRIPT directement depuis un formulaire.
    Si l utilisateur rentre un message comme "<script>alert("Hack !");</script>"
    et que cela s exucute, alors vous avez une faille XSS.

    Deux choses à faire pour s en proteger
    Si une information envoyé par un utilisateur doit etre affiche en JS.
    Surtout ne pas utiliser "innerHTML" mais plus "innerText" ou "htmltities".
    ----------------------------------------------------------------------
    CSRF
    Le CSRF consiste à repondre à un petit formulaire innocent, qui cache derrière des champs invisible et une action qui redigire vers un formulaire important.

    Par exmaple, l admin d un site repond à un sondage, qui va le rammener sur son site et donner le droit d administration à un inconnu.

    Pour s en proteger, on va generer en arrivant sur le formulaire,
    une clef aletoire que l on sauvegarde en session.
    Puis afficher cette meme clef, dans un champ hidden de notre formulaire.
    Pour anfin lors de la validation de celui ci, comparer la clef envoye par le formulaire avec celle en session.
*/
$title = "securité";
require "./ressources/template/_header.php"
?>
<form action="https://www.google.fr/search">
    <input type="text" placeholder="How are you?">
    <input type="hidden" name="q" value="pizza">
    <input type="submit" value="Envoyer">
</form>
<?php
require "./ressources/template/_footer.php"
?>