<?php
include 'connect.php';
$stmt = $bdd->prepare("DELETE  FROM CRENEAU WHERE ID_creneau = :ID_creneau");
$stmt->bindParam(':ID_creneau', $_GET['ID_creneau']);
$stmt->execute();
echo 'le CRENEAU A ETE SUPPRIMER DE LA BASE';
?> 
