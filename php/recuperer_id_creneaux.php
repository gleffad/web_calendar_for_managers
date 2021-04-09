<?php
include 'connect.php';
$a = $_GET['ID_PERSO'];
$c = $_GET['DATE_DEB'];
$reponse = $bdd->query("SELECT * FROM CRENEAU WHERE ID_PERSO = \"$a\" AND  DATE_DEB = \"$c\"");
$donne = $reponse->fetch();
$var = $donne['ID_creneau'];
echo $var;
?>
