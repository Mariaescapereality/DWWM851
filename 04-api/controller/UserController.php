<?php
// Quels sont les méthodes acceptés par cette page.
header("Acces-Control-Allow-Methods: Post, GET, PUT, DELETE");
require __DIR__."/../api.php";
session_start();
require __DIR__."/../model/userModel.php";

$regexPass = "/^(?=.*[!?@#$%^&*+-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}$";

switch($_SERVER["REQUEST_METHOD"])
{
    case "POST": inscription(); break;
    case "GET": listeUtilisateur(); break;
    case "PUT": updateUser(); break;
    case "DELETE": inscription(); break;
}
function inscription(){
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $username = $email = $password = "";
    $error = setError();
    /*
        TODO: traiter le formulaire
    */
    if($data && isset($data->userform))
    {
        if(empty($data->username)){
            setError("username", "Veuillez saisir un nom d'utilisateur");
        }else{
            $username = clean_data($data->username);
            if(!preg_match("/^[a-zA-Z' -]{2, 25}$/", $username)){
                setError("username", "Veuillez saisir un nom d'utilisateur");
            }
        }
        //Traitement email
        if(empty($data->email))
        {
            setError("email", "Veuillez saisir un email");
        }
        else
        {
            $email = clean_data($data->email);
            if(!filter_var($email, FILTER_VALIDATE_EMAIL))
            {
                setError("email", "Veuillez saisir un email valide");
            }
            // Je vérifie si l'utilisateur existe en bdd
            $result = getOneUserByEmail($email);
            if($result)
            {
                setError("email", "Cet email est déjà enregistré.");
            }
        }
        //traitement password
        if(empty($data->password))
        {
            setError("password", "Veuillez saisir un mot de passe");
        }
        else{
            $password= clean_data($data->password);
            // on utilise la regex défini plus haut.
            global $regexPass;
            if(!preg_match($regexPass, $password))
            {
                setError("password", "Veuillez saisir un mot de passe valide");
            }elseif($data->password != $data->passwordBis)
            {
                setError("passwordBis", "Veuillez saisir le même mot de passe");
            }
        }
    }
    sendResponse($data, 400, "Formulaire incorrecte");
}
function listeUtilisateur(){
    //je recupere tous mes utilisateurs.
    if(isset($_GET["id"]))
        $users = getOneUserById((int)$_GET["id"]);
    else
        $users = getAllUsers();
    sendResponse($users, 200, "utilisateur(s) récupéré.");
};
function updateUser(){};
function deleteUser(){
    if(!isset($_GET["id"], $_SESSION["idUser"]) || $_SESSION["idUser"]!= $_GET["id"])
    {
        sendResponse($_SESSION, 400, "Accès interdit!");
    }
    //on supprime l'utilisateur
    deleteUserById((int)$_GET["id"]);
    //Et on le déconnecte.
    unset($_SESSION);
    session_destroy();
    setcookie("PHPSESSID","", time()-3600);

    sendResponse([], 200, "compte supprimé et déconnecté");
}