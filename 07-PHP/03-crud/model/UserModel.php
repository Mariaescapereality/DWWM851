<?php
require_once __DIR__ ."/../../ressources/services/_pdo.php";
/**
 * récuypère tous les utilisateurs
 *
 * @return array
 */
function getAllUsers(): array
{
    //je me connect a la BDD
    $pdo = connexionPDO();
    //J envoi la requete SQL
    $sql = $pdo->query("SELECT idUser, username FROM users");
    //Je recupere toute les informations
    return $sql->fetchAll();
}
//var_dump(getAllUsers());
/**
 * Selectionne un utilisateur par son email.
 *
 * @param string $email
 * @return array|boolean
 */
function getOneUserByEmail(string $email): array|bool
{
    $pdo = connexionPDO();
    //"SELECT * FROM users WHERE email = $email"
    //Je prépare ma requete afin d'eviter une injection SQL
    $sql = $pdo->prepare("SELECT * FROM users WHERE email = $email = ?");
    //J'execute ma requete en lui donnent les parametres dans la meme ordre que les "?"
    $sql->execute([$email]);
    //Je recupere la premiere information trouvé.
    return $sql->fetch();
}
/**
 * récupère un utilisateur via son id
 *
 * @param string $id
 * @return array|boolean
 */
function getOneUserById(string $id): array|bool
{
    $pdo = connexionPDO();
    //plutot que les "?", on peut utiliser un placeholder précède de ":"
    $sql = $pdo ->prepare("SELECT * FROM users WHERE idUser = :id");
    //avec les placeholder, on donne les parametres via un tableau associatif dont les clefs correspondent aux placeholders
    $sql->execute(["id"=> $id]);
    return $sql->fetch();
}
/**
 * Ajoute un utilisateur en BDD
 *
 * @param string $us nom d'utilisateur
 * @param string $em email
 * @param string $pass mot de pass
 * @return void
 */
function addUser(string $us, string $em, string $pass):void
{
    $pdo = connexionPDO();
    $sql = $pdo->prepare("INSERT INTO user(username, email, password) VALUES(?, ?, ?)");
    $sql->execute([$us, $em, $pass]);
}
/**
 * Supprimer un utilisateur via son id
 *
 * @param string $id
 * @return void
 */
function deleteUserById(string $id): void
{
    $pdo = connexionPDO();
    $sql = $pdo->prepare("DELETE FROM users WHERE idUser=:id");
    /*
        Une autre façon d indiquer les parametres de la requete,
        C est l utilisation "bindParam" ou "bindValue". 
        Dans ce cas on laisse execute vide.
        les bind prendrons en premier argument, le placeholder à changer,
        en second la valeur à lui donner,
        et optionnalement en troisime, le type (int, string) via une constance
        $sql->bindParam("$id", $id);
        $sql->bindParam("$id", $id, PDO::PARAM_STR);
    */
    $sql->bindParam("id", $id);

    $sql->execute();//when bindParam must be empty
}
/**
 * Met à jour l'utilisateur via son id
 *
 * @param string $username nom d'utilisateur
 * @param string $email email
 * @param string $password mot de pass
 * @param string $id 
 * @return void
 */
function updateUserById(string $username, string $email, string $password, string $id): void
{
    $pdo = connexionPDO();
    $sql = $pdo->prepare("UPDATE users SET username=:us, email=:em, password=:mdp WHERE idUser = :id");
    $sql->execute([
        "id"=> (int)$id,
        "mdp"=>$password,
        "em"=>$email,
        "us"=>$username
    ]);
}

?>