<?php
$_SERVER="localhost";
$username="root";
$password="";
$dbname="lolayacoffeshop";
$connection=mysql_connect($_SERVER,$username,$password,$dbname);
if($connection){
    echo="connect";
}

?>