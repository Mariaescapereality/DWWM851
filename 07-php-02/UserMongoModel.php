<?php
use MongoDB\Driver\Query;
use MongoDB\Driver\BulkWrite;
global $mongo, $bulk;
require __DIR__ ."/../../ressources/services/_mongo.php";

$mongo = connexionMongo();
$bulk = new BulkWrite();

function getAllUsers(){
    $query = new Query([]);
    return queryResult("blog.user", $query, "idUser");
}
function getAllUsersByEmail(string $email):array|bool
{
    $query = new Query(["email"=>$email]);
    return queryResult("blog.user", $query,"idUser", true);
}
/**
 * Selectionne un utilisateur par Id
 *
 * @param string $id
 * @return array|boolean
 */
function getAllUsersById(string $id):array|bool
{
    $query = new Query(["_id"=>getId($id)]);
    return queryResult("blog.user", $query, "idUser", true);
}
function addUser(string $username, string $email, string $password): void{
    global $mongo, $bulk;
    //on prepare les requete que l on souhaite faire
    $bulk ->insert(["username"=>$username, "email"=>$email, "password"=>$password]);
    //puis on les execute.
    $mongo ->executeBulkWrite("blog.user", $bulk);
}
/**
 * supprime un utilisateur par son ID
 *
 * @param string $id
 * @return void
 */
function deleteUser(string $id): void
{
    global $mongo, $bulk;
    $bulk ->delete(["_id"=>getId($id)]);
    $mongo -> executeBulkWrite("blog.user", $bulk);
}
function updateUserById(string $username, string $email, string $password, string $id): void
{
    global $mongo, $bulk;
    $bulk ->update(["_id"=>getId($id)], ['$set'=>["username"=>$username,"email"=>$email,"password"=>$password]]);
    $mongo -> executeBulkWrite("blog.user", $bulk);
}
?>