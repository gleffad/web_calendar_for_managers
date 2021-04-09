<?php
include 'connect.php';
$stmt = $bdd->prepare("DELETE INTO PERSONNE (ID_PERSO) VALUES (:id_perso)");
$stmt->bindParam(':id_perso', $_GET['ID_PERSO']);
$stmt->execute();
echo 'La personne a bien été supprimee.';
?> 
