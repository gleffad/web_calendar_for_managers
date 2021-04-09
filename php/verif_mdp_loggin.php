<?php
include 'connect.php';
$a = $_GET['loggin'];
$c = $_GET['pass'];
$reponse = $bdd->query("SELECT pass FROM Societe WHERE loggin = \"$a\"");
$donne = $reponse->fetch();
$var = $donne['pass'];

if($c == $var){
	echo "OK";
}
else{
	echo "KO";
}
?>
