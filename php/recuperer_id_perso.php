<?php
include 'connect.php';
$a = $_GET['NOM'];
$b = $_GET['PRENOM'];
$reponse = $bdd->query("SELECT * FROM PERSONNE WHERE NOM = \"$a\" AND PRENOM = \"$b\"");
$donne = $reponse->fetch();
$var = $donne['ID_PERSO'];
echo $var;
?>
