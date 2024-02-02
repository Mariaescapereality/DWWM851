<?php
/*
include et require permettent d inclure d eutres fichier dans notre code.

Une petite convetion est de nommer les fichiers qui doivent etre inclu et n ont pas pour but d etre ouvert seul, avec un "_" les precedents.
*/
$title = "Include";
$mainClass = "includeNav";
//require("../template/_header.php");//if error its fatal error
//require("../ressources/template/_header.php"); if full stuff did
//include("../template/_nav.php");//difference in error
/*
La seule difference entre require et include est le niveau d erreur lance.

require en cas de probleme provoque une "fatal erreur" mettant fin au code.

include lui lance un "warning" et le code continue.
*/
?>
<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit ex hic beatae dolorem nulla dolor. Doloribus inventore reiciendis minima sit aspernatur quis, rem hic commodi assumenda exercitationem deleniti modi.</p>
</div>
<?php
/*
dans un tres gros projet avec beacoup  d inclusion il est possible de s emmeller et de require plusiers fois un meme fichier.

L'utilisation de "require_once" he verifier its exist already or not and no repeat.
(un peu plus gourmand en ressource.)

dont do same name of file and folder (style/style.css)
better do (../ressources/style/style.css)

ctrl f5
*/
require_once("../template/_footer.php");
?>