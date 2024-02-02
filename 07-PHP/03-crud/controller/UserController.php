<?php
//require __DIR__ . "/../../ressources/services/_csrf.php";
require __DIR__ . "/../../ressources/services/_shouldBeLogged.php";
//require __DIR__ . "/../ressources/services/UserModel.php";
require __DIR__ . "/../ressources/services/UserMongoModel.php";
//global $mongo;
/**
 * Gère ma page listant les utilisateurs
 *
 * @return void 
 */
function listUsers():void
{
    $users = getAllUsers();

    require __DIR__ ."/../ressources/services/user/ListUser.php";
    listUsers();
}
/**
 * Gère ma page d'inscription
 *
 * @return void
 */
function inscription():void
{
    //Si l'utilisateur est connecté, on le redigire
    shouldBeLogged(false, "/");

    $username = $email = $password = "";
    $error = [];
    $regexPass = "/^(?=.*[!?@#$%^&*+-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}$/";

    if($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['inscription'])) 
    {
        //Traitment username
        if(empty($_POST["username"]))
        {
            $error["username"] = "Veuillez saisir un nom d'utilisateur";
        }
        else
        {
            $username = clean_data($_POST["username"]);
            if(!preg_match("/^[a-zA-Z' -]{2,25}$/", $username))
            {
                $error["username"] = "Veuillez saisir un nom d'utilisateur validé";
            }
        }
        // Traitment email
        if(empty($_POST["email"]))
        {
            $error["email"] = "Veuillez saisir un email";
        }
        else
        {
            $email = clean_data($_POST["email"]);
            /*
                la fonction  filter_var prendra en premier argument la variable à filter, et en second une constante correspondant au filtre à appliquer.
                Il y a deux types de filtres
                    FILTER_SANITIZE_***
                    FILTER_VALIDATE_***
                dans le premier cas , la valeur de retour sera la valeur de la variable filtre.
                dans le second ce sera un boolean.
            */
            if(!filter_var($email, FILTER_VALIDATE_EMAIL))
            {
                $error["email"] = "Veuillez saisir un email validé";
            }
            $resultat = getOneUserByEmail($email);
            if($resultat)
            {
                $error["email"] = "Cet email est déjà enregistrer";
            }
        }
        //traitement password
        if(empty($_POST["password"]))
        {
            $error["password"] = "Veuillez saisir un mot passe";
        }
        else
        {
            $password = trim($_POST["password"]);
            if(preg_match($regexPass, $password))
            {
                $error["password"] = "Veuillez saisir un mot de passe valide";
            }
            else{
                $password = password_hash($password, PASSWORD_DEFAULT);
            }
        }
        // traitement verification du mot de passe
        if(empty($_POST["passwordBis"]))
        {
            $error["passwordBis"] = "Veuillez saisir à nouveau votre mot de passe";
        }
        else if($_POST["passwordBis"] !== $_POST["password"])
        {
            $error["passwordBis"] = "Veuillez saisir le même mot de passe";
        }
        //Envoi de données :
        if(empty($error))
        {
            addUser($username, $email, $password);
            header("Location: /");
            exit;
        }
    }
    require __DIR__."/../view/user/inscription.php";
}

?>