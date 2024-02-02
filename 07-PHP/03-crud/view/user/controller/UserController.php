<?php
//require __DIR__ . "/../../ressources/services/_csrf.php";
require __DIR__ . "/../../ressources/services/_shouldBeLogged.php";
require __DIR__ . "/../ressources/services/UserModel.php";
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
    echo "ceci est ma page d'inscription";
}
function deleteUser():void
{
    //l utilisateur doit être connecte
    shouldBeLogged(true, "/");
    // l utilisateur connecte est-il celui que l'on tente de supprimer
    if(empty($_GET["id"]) || $_SESSION["idUser"] !== $_GET["id"])
    {
        header("Location: /");
        exit;
    }

    deleteUserById($_GET["id"]);

    unset($_SESSION);
    session_destroy();
    setcookie("PHPSESSID", "", time()-3600);
    header("refresh: 5;url= /");

    require __DIR__ ."/../view/user/delete.php";
    /**
     * Gere la page de mise à jour de l'utilisateur
     *
     * @return void
     */
    function updateUser():void
    {
        shouldBeLogged(true, "/");
        if(empty($_GET["id"]) || $_SESSION["idUser"] !== $_GET["id"])
        {
            header("Location: /");
            exit;
        }
        $user = getOneUserById($_GET["id"]);
        $username = $password = $email = "";
        $error = [];
        $regexPass = "/^(?=.*[!?@#$%^&*+-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}$/";
        if($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['update'])) 
            {

            }
    
        require __DIR__ ."/../view/user/update.php";
    }
}

?>