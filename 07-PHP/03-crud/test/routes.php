<?php

require_once __DIR__.'/router.php';

get("/", "./index.php");

get("/userlist", function(){
    require "./03-crud/controller/UserController.php";
    listUsers();
});
//delete
any("/userdelete", function(){
    require "./03-crud/controller/UserController.php";
    deleteUser();
});

// mise a jour
any("/update", function(){
    require "./03-crud/controller/UserController.php";
    updateUser();
});
//inscription
any("/inscription", function(){
    require "./03-crud/controller/UserController.php";
    inscription();
});
//404
any("/404", "./404.php");
?>