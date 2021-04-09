<?php
include 'connect.php';
$stmt = $bdd->prepare("DELETE FROM CRENEAU WHERE ID_PERSO = :id_perso");
$stmt->bindParam(':id_perso', $_GET['ID_PERSO']);
$stmt->execute();
?> 
