<?php
include 'connect.php';
$stmt = $bdd->prepare("DELETE FROM PERSONNE WHERE ID_PERSO = :id_perso");
$stmt->bindParam(':id_perso', $_GET['ID_PERSO']);
$stmt->execute();
echo 'La personne a bien été supprimee avec tous ses creneaux.';
?> 
