<?php
include 'connect.php';
$stmt = $bdd->prepare("INSERT INTO CRENEAU (DATE_DEB, heure_deb, heure_fin, ID_PERSO) VALUES (:DATE_DEB, :heure_deb, :heure_fin, :ID_PERSO)");
$stmt->bindParam(':DATE_DEB', $_GET['DATE_DEB']);
$stmt->bindParam(':heure_deb', $_GET['heure_deb']);
$stmt->bindParam(':heure_fin', $_GET['heure_fin']);
$stmt->bindParam(':ID_PERSO', $_GET['ID_PERSO']);
$stmt->execute();
echo 'le creneau a ete ajouter';
?> 
