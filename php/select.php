<?php
include 'connect.php';
$a = $_GET['id_societe'];
$reponse = $bdd->query("SELECT * FROM PERSONNE WHERE ID_SOCIETE = \"$a\"");
while($donne = $reponse->fetch())
{
	$var = $var . $donne['NOM']. " " . $donne['PRENOM'] . "\n" ;
}
echo $var;

// 
?>
