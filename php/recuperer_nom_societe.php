<?php
include 'connect.php';
$a = $_GET['loggin'];
$reponse = $bdd->query("SELECT nom FROM Societe WHERE loggin = \"$a\"");
$donne = $reponse->fetch();
$var = $donne['nom'];

echo $var;
?>
