<?php
include 'connect.php';
$stmt = $bdd->prepare("INSERT INTO Societe (loggin, pass, email, nom) VALUES (:loggin, :pass, :email, :nom)");
$stmt->bindParam(':loggin', $_GET['loggin']);
$stmt->bindParam(':pass', $_GET['pass']);
$stmt->bindParam(':email', $_GET['email']);
$stmt->bindParam(':nom', $_GET['nom']);
$stmt->execute();
echo 'La societe a bien été ajoutée.';
?> 