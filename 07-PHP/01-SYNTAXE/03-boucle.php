<?php
echo "<h1>Les boucles en PHP</h1><hr>";

$x = 0;
//la boucle while repete ses instructions tant que ce qui se trouve entre parenthèse retourne true
while ($x < 5) {
    echo "$x <br>";
    //ne pas oblier la condition de sortie
    $x++;
}
//syntaxe en":" endwhile
while ($x < 5) :
    echo "$x <br>";
    $x++;
endwhile;
//syntaxe avec une seule instruction:
while ($x < 10) echo $x++, "<br>";
#-----------------------------------
echo "<h2>Do while</h2><hr>";
//le do while va lancer une premiere fois l action avant de verifier si elle doit etre repete.
do
{
    echo "$x <br>";
    $x++;
}while ($x < 5);
//syntaxe ne prenant qu une seule instruction:
do
    echo $x++, "do while <br>";
    while($x<20);
#--------------------------------------------
echo "<h2>For</h2> <hr>";
/*
la boucle for est particuliarement adapte aux boucles base sur un chiffre.
elle est structure ainsi:
for(expr1, expr2; expr3;){instruction à repeter}

la premier expression est evaluer avant commencer la boucle.
la seconde est evaluer au debut de chaque iteration et continuera la boucle si "true"
le troisieme est evalue
*/
for($y = 0; $y < 5; $y++)
{
    echo $y;
    echo "<br>";
}
//structure : et endfor
for($y = 0; $y < 5; $y++):
    echo $y;
    echo "<br>";
endfor;
//structure une seule instruction
for($y = 0; $y < 5; $y++)
    echo "$y <br>";
#------------------------------------------
echo "<h2>Foreach</h2><hr>";
$a = ["spaghetti", "thon", "mayonnaise", "oignon"];
/*
foreach permet d iterer sur un tableau, il se structyreainsi:
    foreach($tableau as $nouvelleVariable){instruction à repeter}
    foreach repete les instruction pourchaque element du tableau.
    Changeant à chaque foiq la valeur de la variable par l elemnt
    suivant du tableau.
*/
foreach($a as $food)
{
    echo "$food <br>";
}
/*
il est aussi possible de recuperer l index ou la clef (dans le cas d un tableau associatif) avec cette structure:
    foreach ($tableau as $variableIndex => $variableValeur)
    {instruction repeter}
*/
foreach($a as $k => $food)
{
    echo "$k : $food <br>";
}
//structure en ":" endforeach
foreach($a as $food):
    echo "$k : $food <br>";
endforeach;
//structure avec une seule instruction:
foreach($a as $k => $food)
    echo "$k: $food <br>";
#------------------------
echo "<h2>Continue et Break</h2><hr>";
/*
boucle include word break and contionue
continue met fin à l intration actuelle, et passe à la suivante
break met fin à la boucle.
*/
foreach($a as $f)
{
    if($f == "spaghetti") continue;
    if($f == "mayonnaise") break;
    echo "$f <br>";
}
?>