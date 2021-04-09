<?php
$serv = 'mysql:dbname=planning;host=localhost;charset=utf8';
$user = 'root';
$password = 'password';

try
{
	$bdd = new PDO($serv, $user, $password);
	$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e)
{
	echo 'Connection failed: ' . $e->getMessage();
}

try
{
$reponse = $bdd->query('SELECT * FROM PERSONNE');

while($donne = $reponse->fetch())
{
	$var = $var . $donne['NOM']. " " . $donne['PRENOM'] . "\n" ;
}
echo $var;
}
catch
{
	echo '';
}
?>
