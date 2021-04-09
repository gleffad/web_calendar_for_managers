<?php
include 'connect.php';
$a = $_GET['nom'];
$reponse = $bdd->query("SELECT id_Societe FROM Societe WHERE nom = \"$a\"");
$donne = $reponse->fetch();
$var = $donne['id_Societe'];
echo $var;
?>
