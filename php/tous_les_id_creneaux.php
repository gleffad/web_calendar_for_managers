<?php
include 'connect.php';
$a = $_GET['ID_PERSO'];
$reponse = $bdd->query("SELECT ID_creneau FROM CRENEAU WHERE ID_PERSO = \"$a\"");
$donne = $reponse->fetchAll();
$var = json_encode($donne);
echo $var;
?> 
