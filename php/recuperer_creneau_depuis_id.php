<?php
include 'connect.php';
$a = $_GET['ID_creneau'];
$reponse = $bdd->query("SELECT DATE_DEB, heure_deb, heure_fin, ID_creneau FROM CRENEAU WHERE ID_creneau = \"$a\"");
$donne = $reponse->fetch();
$myobj->date = $donne[DATE_DEB];
$myobj->heure_deb = $donne[heure_deb];
$myobj->heure_fin = $donne[heure_fin];
$myobj->ID_creneau = $donne[ID_creneau];
$myJSON = json_encode($myobj);
echo $myJSON;
?>
