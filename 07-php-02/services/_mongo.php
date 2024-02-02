<?php
use Mongodb\BSON\ObjectId;
use Mongodb\Driver\Query;
use Mongodb\Driver\Manager;
global $mongo;
/**
 * Récupère la connexion à mongodb
 *
 * @return Manager
 */
function connexionMongo(): Manager
{
    $config = require __DIR__ ."/../config/_blogMongoConfig.php";
    // Je construit mon DSN
    $dsn = "mongodb://{$config['user']}:{$config['password']}@{$config['host']}:{$config['port']}";
    try{
        $mongo = new Manager($dsn);
        return $mongo;
    }catch(Exception $e)
    {
        echo "Exception reçue : {$e->getMessage()}";
    }
}
/**
 * Récupère le resultat d'une requête
 *
 * @param string $collection
 * @param Query $query
 * @param string $idName
 * @param boolean $one
 * @return array
 */
function queryResult(string $collection, Query $query, string $idName, bool $one = false): array
{
    global $mongo;
    //on execute le requete donne en second argument, sur la collection en premier argument
    $cursor = $mongo->executeQuery($collection, $query);
    //pour obtenir nos resultats sous forme de tableau associatif:
    $cursor->setTypeMap(["root"=>"array"]);
    $result = $cursor->toArray();
    $result = setId($result, $idName);
    if($one && count($resultat)) return $resultat[0];
    return $result;
}
function setId(array $result, string $idName): array
{
    for($i=0; $i < count($result); $i++)
    {
        $result[$i][$idName] = (string)$result[$i]["_id"];
    }
    return $result;
}
function getId(string $id):object
{
    return new ObjectId((string)$id);
}
?>