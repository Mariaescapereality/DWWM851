<?php
require __DIR__ ."../app/worker.php";
//require_once ('../app/worker.php');
//$worker = new \App\Worker(name: 'Maria', age: 50, hours: 35);
$developer = new \App\Developer(name: 'Maria', age: 50, hours: 35);

//$developer->work();
$developer->setPosition(value: 'developer');
var_dump($developer->getPosition());
?>