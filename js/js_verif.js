function verif_heure()
{
	var heure_Debut = document.getElementById("heure_debut").value;
	var heure_Fin = document.getElementById("heure_fin").value;
	if (heure_Fin <= heure_Debut)
	{
		document.getElementById("alert").innerHTML = "erreur, l'heure de fin doit être supérieur à l'heure de début";
		document.getElementById("alert").style.color = "red";
		document.getElementById("ajouter_btn").disabled = true;
	}
	else
	{
		document.getElementById("ajouter_btn").disabled = false;
		document.getElementById("alert").innerHTML = "";
	}
	return false;
}

function nom()
{
	document.getElementById("creneau").innerHTML="";
	var value = document.getElementById("select1").value;
	var nom = value.split(' ')[0];
	var prenom = value.split(' ')[1];
	document.getElementById("nom").value=nom;
	document.getElementById("prenom").value=prenom;
	var obj = {name:nom, lastname:prenom};
	$.get( "./php/recuperer_id_perso.php", { NOM: nom, PRENOM: prenom },
			function(data)
			{ 
				$.get("./php/tous_les_id_creneaux.php", {ID_PERSO: data},
					function(data2)
					{
						var json = JSON.parse(data2);
						for (var i = 0; i < json.length; i++)
						{
							$.get("./php/recuperer_creneau_depuis_id.php",{ID_creneau:json[i].ID_creneau},
									function(data3)
									{
										var json2 = JSON.parse(data3);
										var obj = {name:nom, lastname:prenom , date:json2.date,heures : [{heure_debut:json2.heure_deb,heure_fin:json2.heure_fin}],ID_creneau: json2.ID_creneau};
										addwork(obj);
									});
						}

					})
			});
}
