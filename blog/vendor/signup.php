<?php
    session_start();
    require_once 'connect.php';

    $full_name = $_POST['full_name'];
    $login = $_POST['login'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $password_confirm = $_POST['password_confirm'];

    if($password === $password_confirm){
        //$_FILES['avatar']['name'];
        $path = 'uploads/' . time() . $_FILES['avatar']['name']; 
        if(!move_uploaded_file($_FILES['avatar']['tmp_name'], destination: '../' . $path)){
            $_SESSION['message'] = 'Error of load message'
        }
    } else{
        $_SESSION['message'] = 'Passwords do not match';
        header('Location: ../register.php');
    }
?>

