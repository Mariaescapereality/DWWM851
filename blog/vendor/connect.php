<?php
//mysqli_connect
$connect = mysqli_connect(host: 'localhost', user:'root', password:'', database: 'test ');
if(!$connect){
    die('Error connect to Database');
}
?>