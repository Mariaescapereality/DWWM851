<h1>Intro</h1>
<!--Le code PHP commence par <?php ?> et ceci sa ballise de fin-->
<h1>Introduction to PHP</h1>
<!--Le code PHP commence par <?php ?> et ceci sa ballise de fin-->
<?php
//un commentaire sur une seule ligne
# Un autre commentaire sur une seule ligne
/* commentaire sur 
plusieurs lignes */
/*
Il n'est pas rare de voir du HTML et du PHP sur un même fichier.
le serveur va traiter tout ce qui se trouve dans les balises PHP,
puis rendre le fichier au navigateur comme du simple HTML.
*/
// ! chaque instruction se termine par ";"
/*
Ce que l'on fait en PHP n'étant pas visible, nous devrons utiliser certaines fonctions pour les afficher:

certaines rare fonctions peuvent etre ecrites sans parenthes.
*/
echo "Coucou";
// echo can take parametres which want
echo "Hello", "world";

echo "<hr>";
/*
il existe plusierus fonctions d affichage qui ont leur propre particularite, exho étant la plus commune.

print retournera une valeur de "1" et sera un peu plus lent
*/
print "PRINT!!!!!! <br>";
/*
var_dump() utile for debug, show info supplements
*/
var_dump("Bonjour", "Le Monde");
/*
var_export("") affiche ses parametres tel du PHP exucutable.
*/
var_export("Banane")
//phpinfo() show la configuration de PHP
//phpinfo();
//petit bonus, le racourci <= permet d'ouvrir php juste pour un echo
?>
Test racourci echo:
<?= 'Salut !' ?>
<?php
#-----------------
echo "<h1>Declaration variables</h1>";

$banane;
/*
On déclare une variable php avec un "$" puis une lettre ou un "_" puis ensuite les chiffres sont acceptes.
Les variables sont sensibles a la casse: "$a" et "$A" sont deux variables differentes.

si une variable n a pas ete define et seulement declare, l afficher provoquera un erreur:
*/
//echo $banane
//echo "test";

$banane = "Jaune";
echo "banane :", $banane, "<br>";

/*
on peut aussi definir des constantes eb PHP, par convention on les mettra souvent en majuscule et elles n auront pas de "$"
*/
const AVOCAT = "vert";
/*
ceci est la nouvelle syntaxe, jusqu il y a peu il fallait utiliser la fonction define:
*/
define("AVOCADO", "vert");
//get_defined_vars() permet de voir toute les variables déclarés
var_dump(get_defined_vars());
echo '<pre>' .print_r(get_defined_vars(), 1).'</pre>';

//variables dynamique:
$chaussette = "rou ge";
$$chaussette = "blue";
$$$chaussette = 5;
echo ${"rou ge"};
/*
les variables dynamique, sont des variables dont le nom dépend d une aute variables
ici la seconde variables prend le nom "$rouge"

par  défaut, php détruit les variables une fois le script terminé, mais on peut vouloir les détruit soit meme avec unset()
*/
unset($banane);
// echo $banane;
# -----------------------------------------------------
echo "<hr><h1>Types de variables</h1>";
$num = 5;
$dec = 0.5;
$str = "coucou";
$arr = [];
$boo = true;
$nul = NULL;
$obj = (object)[];

echo gettype($num), "<br>";
echo gettype($dec), "<br>";
echo gettype($str), "<br>";
echo gettype($arr), "<br>";
echo gettype($boo), "<br>";
echo gettype($nul), "<br>";
echo gettype($obj), "<br>";

//aucune erreur à changer de type
$num = "Je change de type !";

#---------------------------------------------------------------------------------
echo "<hr><h1>Chaine de caractère</h1>";
// Un string peut etre represente par "ou";
echo "bonjour", 'coucou', "<br>";
//les backtics auront un tout autre role en PHP.
//On peut faire des sauts à la ligne et des indentations mais ils ne seront pas prit en compte:
echo "Ceci est
    un message
    qu'il prend plusieurs lignes <br>";
/*
si on souhaite inserer une variables dans un string,
il suffit de l'y placer pour que l interpolation ai lieu.
Cela ne fonctionne qu'avec les quillement
*/
$nom = "Maurice";
$age = 54;
echo "$nom a $age ans. <br>";
echo '$nom a $age ans. <br>';
/*
la concatenation se fait avec le symbole "."
*/
echo $nom . " a " . $age ." ans.<br>";
// On peut aussi changer la valeur d'une variable avec la cancatenation:
$nom .= "Dupont";
echo $nom, "<br>";
//quelques fonction utiles:
# la longuer du string:
echo strlen($nom), '<br>';
# inverse le string:
echo strrev("Bonjour"), '<br>';
# donne la position dans le string du second parametre :
echo stripos($nom, 'i'), 'br';
# [] apres un string permet de selectionner la carctere a la position indique
echo $nom[8], "<br>";
# on peut changer la lettre à l'index indique.
$nom[8] = "L";
echo $nom, "<br>";
# remplace le premier parametre, par le second, dans le troisieme:
echo str_replace("ce", "cette", $nom);
#------------------------------------------------------------------
echo "<hr><h1>Nombres</h1>";
//il est possible de prefixer les nombres pour indiquer leur base:
# 0b pour binaire:
$bin = 0b1000;
echo "\$bin = $bin <br>";
# 0 pour octale:
$oct = 020;
echo "\$oct = $oct <br>";
#rien pour le decimal:
$dec = 16;
echo "\$dec = $dec <br>";
# 0x pour l'hexomadecimal:
$hexa = 0x10;
echo "\hexa = $hexa <br>";

//les nombres sont soit des "integrer" (des entiers sans virgules), soit des "FLOAT"  ou "DOUBLE" (des decimals à virgule)
var_dump("3.14 is int?", is_int(3.14));
echo "<br>";
var_dump("3.14 is float?", is_float(3.14));
echo "<br>";
var_dump("3.14 is numeric?", is_numeric("3.14"));
echo "<br>";
var_dump("3.14 is nan?", is_nan(3.14));
echo "<br>";
//on peut connaitre le plus grand ou plus petit INTEGRER géré par PHP grace à:
echo PHP_INT_MAX, "<br>", PHP_INT_MIN,"<br>";
//ou version float:
echo PHP_FLOAT_MAX,"<br>", PHP_FLOAT_MIN,"<br>";
//on peut convertir un string ou float en entier simplement:
echo (int)"42", "<br>", (int)3.14, "<br>";
//utilisation math is possible:
echo "1+1=", 1+1, "<br>";
echo "1-1= ", 1-1, "<br>";
echo "5*7= ", 5*7, "<br>";
echo "9/3= ", 9/3, "<br>";
echo "10%3= ", 10%3, "<br>";
echo "10**3= ", 10**3, "<br>";

// on retrouvera aussi les operateurs d'assignements :

$x = 5;
$x += 2;
$x -= 3;
$x *= 4;
$x /= 2;
$x %= 3;
$x **= 2;

echo $x, "<br>";

// enfin on aura l'incrementation et la decrementaiton

echo $x++, "--> $x <br>";
echo ++$x, "--> $x <br>";
echo $x--, "--> $x <br>";
echo --$x, "--> $x <br>";

# -----------------------------------------------------------
echo "<hr><h1>Les tableaux !</h1>";
// originallement un tableau se creait ainsi :
$a = array("banane", "pizza", "avocat");
// mais maintenant on peut simplement faire :
$b = ["banane", "pizza", "avocat"];
// Pour afficher un tableau, on ne peut pas faire d'echo:
var_dump($a);
//pour selectionner un elemnt d un tableau, on utilisera l'index de celui ci:
echo "<br>J'aime la $a[0]!<br>";
// Pour connaitre la taille d un tableau, on utilisera la fonction count()
echo count($a), "<br>";
//pour ajouter un elemnt à mon tableau :
$a[] = "fraise";
/*
en PHP, les tableau sont par defaut indexer via des nombres. Mais l'on peut créer ce que l'on nomme des tableaux associatif.
C'est dire un tableau ou les indexes ne sont pas des nombres, mais des strings.
*/
$person = ["prenom"=>"Maurice", "age"=>52];
//pour afficher les donnes, on utilisera plus les chiffres mais ces strings
echo "Je suis", $person["prenom"],"et j'ai", $person["age"], " ans. <br>";
//biensur les tableaux peuvent eytre multideminsionel
$person["loisir"]=["pétanque","bowling"];
// mistake here echo '<pre>' .print_r($person, 1)'</pre>';
//pour afficher les donnes d un tableau de ce genre on accolera les[]
echo $person["loisir"][0], "<br>";
//pour supprimer une entree dans le tableau, on utilisa la methode unset():
unset($person["age"]);
var_dump($person);
// ce qui ne pose aucun probleme sur un tableau associatif, mais sur un indexé:
echo "<br>";
unset($a["1"]);
var_dump($a);
//on se retrouve avec un trou, mais on peut réparer cela soit en réindexant 
$a = array_values($a);
var_dump($a);
echo "<br>";
/*soit on supprimera un élement avec array_splice()
Celui ci prendra en premier argument, le tableau,
en second l index à partir duquel supprimer,
en troisieme, combien d'elemnt supprimer
*/
array_splice($a, 1, 1);//suppression de l element à partir de l'index 1
var_dump($a);
echo "<br>";
//optionnalement on peut ajouter un 4 eme argument pour faire du remplacement
array_splice($b, 1, 1, ["pomme", "pamplemousse"]);
var_dump($b);
echo "<br>";
//on pourra fusionner des tableaux avec array_merge:
$ab = array_merge($a, $b);
var_dump($ab);
echo "<br>";
//On pourra creer un tableau a partir d un string avec explode()
$tab = explode(" ", "Bonjour le monde !");
var_dump($tab);
echo "<br>";
// Pour trier un tableau, on utilisera la fonction sort();
sort($ab);
var_dump($ab);
echo "<br>";
/*on trouvera aussi:

rsort() pour trier par ordre décroissant
pour tableaux associatif:
ksort() pour trier par clés croissant
krsort() pour trier par clés décroissant
asort() pour trier valeur par croissant
arsort() pour trier valeur par croissant


*/
$person["nom"] = "Dupont";
var_dump($person); echo"<br>";
ksort($person); var_dump($person); echo"<br>";
asort($person); var_dump($person); echo "<br>";

#------------------------------------
echo "<hr><h1>Boolean</h1>";
//boolean is only true and false
$t = true;
$f = false;
var_dump($t, $f);
//mais ils peuvent etre obtenu de bien des façons:
echo "<br> 5<3 : ";
var_dump(5<3);
echo "<br> 5>3 : ";
var_dump(5>3);
echo "<br> 5<=3 : ";
var_dump(5<=3);
echo "<br> 5>=3 : ";
var_dump(5>=3);
echo "<br> 3=='3' : ";
var_dump(3== '3');
echo "<br> 3==='3' : ";
var_dump(3=== '3');

//il est possible de les combiner :
echo "<br>(5<3) && (4>2): ";
var_dump(5<3 && 4>2);
//&& peut ecrire comme and
echo "<br> 5<3 and 4>2 : ";
var_dump(5<3 and 4>2);
//|| or
echo "<br> 5<3 or 4>2 : ";
var_dump(5<3 or 4>2);
//celle ci repond "true" si une seule des deux est "true"
echo "<br> 5<3 xor 4>2 : ";
var_dump(5< 3 xor 4>2);

//"!" permet d inverser le résultat :
echo '!$t, !$f :';
var_dump(!$t,!$f);

#---------------------------------
echo "<hr><h1>Les variables Superglobals.</h1>";
/*
certaines variables que l on nomme superglobales sont accesible n importe ou dans votre code PHP, et défini par défaut.

$GLOBALS
#stocks toute les variables globales definie (par vous ou php)
echo '<pre>'.print_r($GLOBALS, 1).'</pre>';
$_SERVER
echo '<pre>'.print_r($_SERVER, 1).'</pre>';
#contient toutes les informations du serveur, des headers ou d url
$_REQUEST
#CONTIENT les meme informations que $_POST, $_GET, $_COOKIE entre autre
$_POST 
# contient toute les informations envoyé en POST (par un formulaire par example)
$_GET
# contient tout ce qui se trouve après le point d interogation dans l' URL
$_FILES
# Contient tout ce qui se trouve dans les fichiers téléversés(uplodé)
$_COOKIES
# Contient les informations stockée en cookie

$_ENV
# Contient les variables d'environnement

$_SESSION
# Contient les informations stockées en session

*/
echo '<pre>'.print_r($GLOBALS, 1).'</pre>';
?>