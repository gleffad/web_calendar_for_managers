<?php
include 'connect.php';
$stmt = $bdd->prepare("INSERT INTO PERSONNE (NOM, PRENOM, ID_SOCIETE) VALUES (:nom, :prenom, :id_societe)");
$stmt->bindParam(':nom', $_GET['NOM']);
$stmt->bindParam(':prenom', $_GET['PRENOM']);
$stmt->bindParam(':id_societe', $_GET['ID_SOCIETE']);
$stmt->execute();
echo 'La personne a bien été ajoutée.';
?> 
