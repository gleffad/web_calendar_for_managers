<?php
include 'connect.php';
$stmt = $bdd->prepare("INSERT INTO est_dans (id_societe, id_perso) VALUES (:id_societe, :id_perso)");
$stmt->bindParam(':id_societe', $_GET['id_societe']);
$stmt->bindParam(':id_perso', $_GET['id_perso']);
$stmt->execute();

?>