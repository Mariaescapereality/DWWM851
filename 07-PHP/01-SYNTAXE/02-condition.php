<?php
/*
rand retourne par défaut une valeur aleatoire antre 0 et "getrandmax()"
Mais on peut lui donner en parametre, un nombre
minimum et maximum
*/
$r = rand(0,100);
echo $r, "<br>";
echo "<h1>Conditions</h1> <hr>";
// si la condition est "true" alors on effectue ce qui se trouve entre accolade
if($r < 50)
{
    echo 'La variables est inferieure à 50';
}
//optionnelement on peut ajouter ddes conditions aves elseif qui seront verifier si les precedents sont fausse
elseif($r > 50)
{
    echo 'La variables est superier à 50';
}
else
{
    echo 'La variable est superier à 50';
}
//endif;
/* <?php } ?>*/

/*
if($r < 50):
    echo 'La variables est inferieure à 50';

elseif($r > 50):
    echo 'La variables est superier à 50';
else:
    echo 'La variable est superier à 50';
endif;
<p>Ceci est un texte html</p>
<?php endif ?>
*/
/*
si nos conditions ne contiennent quèune seule instruction,
il est tout à fait possible d'ommetre ":" et "endif"
if($r < 50)
    echo 'La variables est inferieure à 50';

elseif($r > 50)
    echo 'La variables est superier à 50';
else
    echo 'La variable est superier à 50';
*/
/*
il est possible d ecrire une condition sur une seule ligne avec les ternaires:
condition ? : false;
*/
echo "La variables est ". ($r<50?"inférieur":"superieur ou égale") . "à 50";

/*
On peut aussi vérifier si une variable existe, et dans le cas contraire faire autre chose avec "??"
*/
$message1 = "Bonjour le monde <br>";
echo $message1 ?? "Rien à dire <br>";
echo $message2 ?? "Rien à dire <br>";
#------------------------------------
echo "<h1>Switch</h1> <hr>";
$pays = ["France", "Japon", "Angleterre", "Suisse", "france"];
// choisir un index aletoire du tableau
$r2 = array_rand($pays);
echo $pays[$r2], "<br>";
/*
le switch prend une variable en argument et déclenche le cas qui correspond.
chaque cas devrait terminer par un break.
Dans le cas cantraire, le cas suivant sera lancé meme si il me correspond pas.
On peut aussi ajouter un "default" qui se déclenchera si aucun cas ne correspond
*/
switch ($pays[$r2])
{
  case "Japon":
    echo "Il n'y a pas de sushi.";
    break;
  case "Suisse":
    echo "Le fromage est cher.";
    break;
  case "France":
    echo "Frexit?";
    break;
  case "france":
    echo "Ce pays est magique.";
    break;
  default:
  echo "Je suis perdu...";
}
?>
