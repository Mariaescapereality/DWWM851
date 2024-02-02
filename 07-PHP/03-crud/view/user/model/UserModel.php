<?php
require_once __DIR__ ."/../../ressources/services/_pdo.php";

function getAllUsers(): array
{
    //je me connect a la BDD
    $pdo = connexionPDO();
    //J envoi la requete SQL
    $sql = $pdo->query("SELECT idUser, username FROM users");
    //Je recupere toute les informations
    return $sql->fetchAll();
}
var_dump(getAllUsers());
?>