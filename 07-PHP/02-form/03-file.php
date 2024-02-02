<?php 
/*
nous allons voir comment gerer l upload de fichier.
Même si l enregistrement en BDD attendra.
Il faut noter que l on n enrigistre pas les ^fichiers en BDD.
Seul leur nom et leurs chemins d acces doivent etre enregistre en BDD.
enregistree des fichiers serainent trop lourd pour bdd.
Les fichiers eux sont simplement stocke dans un dossier du serveur.

*/
$error = $target_file = $target_name = $mime_type = $oldName = "";
//chemin vers le dossier d upload:
$target_dir = "./upload/";
//Liste des types mimes accaepte pour les fichier uploadé.
$types_permis = ["image/png", "image/jpeg", "image/gif", "application/pdf"];

if($_SERVER['REQUEST_METHOD'] === 'POST' && isset( $_POST['upload'] )) 
{
    /*
        lorsque l on upload un fichier, il est placé dans un dossier temporaire supprime à la fin de l execution.
        On va donc verifier que le fichier correspond à nos attents, puis le deplacer dans notre dossier d upload.

        La premier etape va etre de verifier que le fichier a bien été upload.
        Poue cela on va utiliser la superglobal $_files qui contient tou les fichier uploadé. c est un tabl associatif qui prendra en clef la name de input type file.
        on ira chercher ke tmp_name que l on verifiera avec is_uploaded_file()
    */
        if(!is_uploaded_file($_FILES['fichier']['tmp_name']))
            {
            $error = 'select fichier';
            }
        else
        {
            /*
                je vais commencer par recuperer le nom de base du fuihier grace a basename(), je vais recuperer le nom sans informations superflues
            */
            $oldName = basename($_FILES['fichier']['name']);
            /*
                PHP supprimera un fichier, siun fichier du meme nom est placé dans un dossier.
                Pour éviter cela, nous allons renommer notre fichier.
                il existe plein de façon de renomme,
                ici je vais utiliser la fonction "uniqid()"
                    elle va generer un string de 13 symb aletoires qui veulent unique à chaque fois.
                    elle peut prendre un premier argument, qui servira de "prefix"
                    et second argument, qui sera un boolean, à true , ça ne sera plus 13 mais 23 symb aletoires.
            */
            $target_name = uniqid(time()."-", true). "-".$oldName;

            // ja vais creer le chemin pour mon niveau fichier:
            $target_file = $target_dir . $target_name;
            /*
                    il nous foudra verifier le type du fichier.
                    pour cela il y a deux solutions.
                    soit verifier l extension du fichier. mais cela est peu securise.
                    soit verifier le type mime du fichier televerse.
            */
            $mime_type = mime_content_type($_FILES["fichier"]["tmp_name"]);
            //je verifier si le fichier existe pas deja dans mon dossier
        if(file_exists($target_file))
        {
            $error = "ce fichier existe deja";
        }
        //je verifier la taille maximum de mon fichier
        if($_FILES[""]["size"] > 1000000)
        {
            $error = "Votre fichier est trop gros";
        }
    }

}

$title = "";
require "./ressources/template/_header.php";
?>
<!-- Notre formulaire est assez classique, on oublie juste pas l'attribut :
    "enctype" lorsque l'on veut uploader un fichier. -->
    <form action="" method="post" enctype="multipart/form-data"><!--very important enctype-->
    <label for="fichier">Choisir un fichier :</label><!---->
    <input type="file" name="fichier" id="fichier">
    <input type="submit" value="Envoyer" name="upload">
    <span class="error"><?php echo $error??""; ?></span>   
</form>
<!-- On affiche cette partie que is on a envoyé notre formulaire et qu'il n'y a aucune erreur. -->
<?php if(isset($_POST["upload"]) && empty($error)): ?>
    <p>
        Votre fichier a bien été téléversé sous le nom  "<?php echo $target_name ?>". <br>
        Vous pouvez le télécharger <br> <a href="<?php echo $target_file ?>" download="<?php echo $oldName ?>"> ICI</a>
    </p>
<?php
endif;
require "./ressources/template/_footer.php";
?>