<?php
$serv = 'mysql:dbname=planning;host=localhost;charset=utf8';
$user = 'root';
$password = 'root';

try
{
	$bdd = new PDO($serv, $user, $password);
	$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e)
{
	echo 'Connection failed: ' . $e->getMessage();
}
?>
