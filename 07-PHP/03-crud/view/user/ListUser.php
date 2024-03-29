<?php 
$title = "Liste des utilisateurs";
require __DIR__. "/../../../ressources/template/_header.php";

if($users):?>



<table>
    <thead>
        <tr>
            <th>id</th>
            <th>username</th>
            <th>actions</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($users as $u):?>
                <tr>
                    <td><?= $u["idUser"]?></td>
                    <td><?= $u["username"]?></td>
                    <td>
                        <a href="">Voir le message</a>
                        &nbsp;|&nbsp;
                        <a href="">editer l'utilisateur</a>
                        &nbsp;|&nbsp;
                        <a href="">supprimer l'utilisateur</a>
                    </td>
                </tr>
            <?php endforeach;?>  
    </tbody>
</table>
<?php else:?>
    <p>Aucun utilisateur trouvé</p>
    <?php endif;?>
<?php require __DIR__. "/../../../ressources/template/_footer.php";?>

<?php
$title = " MVC - Update ";
require(__DIR__."/../../../ressources/template/_header.php");
if($user):
?>
<form action="" method="post">
    <!-- username -->
    <label for="username">Nom d'Utilisateur :</label>
    <input type="text" name="username" id="username" value="<?php echo $user["username"] ?>">
    <span class="erreur"><?php echo $error["username"]??""; ?></span>
    <br>
    <!-- Email -->
    <label for="email">Adresse Email :</label>
    <input type="email" name="email" id="email" value="<?php echo $user["email"] ?>">
    <span class="erreur"><?php echo $error["email"]??""; ?></span> 
    <br>
    <!-- Password -->
    <label for="password">Mot de passe :</label>
    <input type="password" name="password" id="password">
    <span class="erreur"><?php echo $error["password"]??""; ?></span> 
    <br>
    <!-- password verify -->
    <label for="passwordBis">Confirmation du mot de passe :</label>
    <input type="password" name="passwordBis" id="passwordBis">
    <span class="erreur"><?php echo $error["passwordBis"]??""; ?></span> 
    <br>

    <input type="submit" value="Mettre à jour" name="update">
</form>
<?php else: ?>
    <p>Aucun Utilisateur trouvé</p>
<?php 
endif;
require(__DIR__."/../../../ressources/template/_footer.php");
?>
