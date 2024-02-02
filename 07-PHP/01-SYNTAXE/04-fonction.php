<?php
echo "<h1>Déclaration</h1> <hr>";
/*
pour declarer une fonction en PHP,
On utilisera le mot clef "function" suivi du nom de la fonction.
Puis des parentheses et enfin des accolades.

Les parentheses accueillerons les possibles parametres de la fonction.
les accolades, pour le corps de la fonction.
*/
function salut()
{
    echo "Salut le monde ! <br>";
}
/*
declarer une fonction n activera pas le code à l interieur.
il faudra l appeler pour que ce code s affiche.
Pour cela on utilisera le nom de la fonction suivi de parenthese
*/
salut();
/*
on peut appeler une fonction avant se definition, tant que celle ci est déclare hors de tout bloc (condition, autre fonction...)
*/
salut2();
function salut2()
{
    echo "Salut les autres! <br>";
}
if (true) {
    //déclenche un fatal error
    //salut3();
    function salut3()
    {
        echo "Salut moi-meme! <br>";
    }
    salut3();
}
/*
Une fonction peut se contenter de realiser une action.
Mais elle peut aussi renvoyer des informations qui seront utilise dans une variables ou une autres fonction:
    On utilisera pour cela le mot clef "return" suivi des informations à renvoyer.
    Ce mot clef mettant fin à la fonction, tout ce qui suit, ne sera pas realiser
*/
function aleaString()
{
    $r = rand(0, 100);
    if($r<50)return;
    return (string)$r;
}
//si rien n est retourne, on obtient "NULL";
var_dump(aleaString());
echo "<br>";
//attribuea une variables
$alea = aleaString();
echo $alea, "<br>";
#----------------------
echo "<h2>Les arguments</h2><hr>";
/*
Entre les paretheses d une declaration de fonction.
il est possible d ajouter autant de declaration de variables que l on souhaite.
Celles ci seront des parametres à placer lors de l apples de la fonction.
qui seront transmits à celle ci chaque argum est sepere d une virgule
*/
function bonjour($nom)
{
    echo "Bonjour $nom ! <br>";
}
bonjour("Maurice");
function bonjour2($nom1, $nom2)
{
    echo "Bonjour $nom1 et $nom2 ! <br>";
}
//si le bon nombre s argument n est pas fourni, on obtient une fatal erreur
//bonjour2("Maurice");
bonjour2("Maurice", "Pierre");
/*
Il est possible d avoir un nombre infini d argument sur une fonction,
Cela grace au rest operateur "..."
Tous les arguments seront place sous forme de tableau.
*/
function bonjour3(...$noms)
{
    foreach($noms as $n)
    {
        echo "Salut $n ! <br>";
    }
}
bonjour3("Maurice", "Me", "You");
/*
On peut donner une valeur par defaut à un parametre.
Cela aura aussi pour effet de le rendre optionnel
*/
function bonjour4($n1, $n2="inconnu au bataillon"){
    echo "bonjour $n1 et $n2 <br>";
}
bonjour4("michaud");
bonjour4("Maurice", "Pierre");
/*
Une variable donne à une fonction n est pas modifie.
Seule sa valeur est transmise.
*/
function titre($nom)
{
    $nom .= " le Grand";
    return $nom;
}
$mau = "Maurice";
$mau2 = titre($mau);
echo "$mau est devenu $mau2 <br>";
/*
mais il est possible de passer un argument par reference.
cela permet de changer la vaeur de la variable donnée en argument
*/
function titre2(&$nom)
{
    $nom .= "le Grand";
}
titre2($mau);
echo "Voici $mau ! <br>";
#-----------------------------------
echo "<h2>Récurcivité</h2> <hr>";
/*

*/
function decompte($n)
{
    //action a realiser
    echo "$n <br>";
    //condition de sortie
    if ($n <= 0)return;
    //recupercivite
    decompte(--$n);
}
decompte(5);
#---------------------------
echo "<h2>Typage et Description</h2>";
/**
 * 
 * 
 * Les arguments sont les informations du personnage
 * 
 * @param string $nom nom du personnage
 * @param integer $age age du personnage
 * @param boolean $travail le personnage trabail t-il?
 * @return string phrase de présentation
 */

function presentation(string $nom, int $age, bool $travail):string
{
    return "Je m'appelle $nom et j'ai $age ans. Je ".
    ($travail?"travaille.":"ne travaille pas.");
}
echo presentation("Maurice", 54, true);

#----------------------------------------
echo "<h2>Portée des variables er variable static</h2><hr>";
/*
Une variables declare hors une fonction n est pas disponible dans celle ci.
Si on souhaite utiliser une variable dans la fonction, elle devra soit etre passe en argument.
soit recupere via le mot clef "global
celui ci permet d indiquer que le variables que l on souhaite utiliser a ete declare hors de toute
*/
$z = 5;
function showZ()
{
    // echo $z; erreur
    global $z;
    echo $z;
}
showZ();
/*
Une variable précede du mot "static" ne sera pas reinstalise à chaque appelle de la fonction.
Sa valeur sera donc sauvegarde entre chaque appel.
*/
function compte()
{
    $a = 0;
    static $b = 0;
    echo "a : <br> b : $b <br>";
    $a++;
    $b++;
}
compte();
compte();
compte();

#---------------------------------
echo "<h2>FONCTION anonyme, fléche et callback</h2><hr>";
/*
Bien que rarement utiliser, il est possible de declare des fonctions anonyme et fleche en PHP.
Une fonction anonyme est une fonction qui ne porte pas nom, elle sera range dans une variable ou utiliser en callback.
Une fonction fleche est une version raccourci de la fonction. anonyme.
Un callback est une fonction passe en argument qui sera appele par la fonction qui la reçoit.
*/
/**
 * cette fonction prend un tableau et utiliser la fonction donnee
 *
 * @param array $arr tableau de donnee
 * @param callable $func fonction affichage
 * @return void
 */
function dump(array $arr, callable $func): void
{
foreach ($arr as $a){
    $func($a);
    echo "<br>";
}
}
$tab = ["sandwich", "ramen", "pizza"];
// Je donne en second argument, une fonction anonyme.
dump($tab, function($x){ echo $x;});
//je donne en second argument, une function flachee
dump($tab, fn($x)=>var_dump($x));

//je range ma fonction anonyme dans une variable :
$superFonction = function($x){
    print ($x);
};
//je donne callback ma variable contenantg une function
dump($tab, $superFonction);
?>