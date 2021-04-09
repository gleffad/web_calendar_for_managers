document.getElementById("ajouter_btn").addEventListener("click", ajouter);
document.getElementById("buttonplus").addEventListener("click", ajouter_personne);
document.getElementById("buttonsupp").addEventListener("click", supp_personne);
document.getElementById("ics").addEventListener("click", ICS);
document.getElementById("deco").addEventListener("click", deco);
var i = 0 ;
var list = "";
var id;



document.getElementById("labelnom").innerHTML = "nom : "+ document.cookie;

function getInfo()
{
	var nom = document.getElementById("nom").value;
	var prenom = document.getElementById("prenom").value;
	var date = document.getElementById("date").value;
	var heuredeb = document.getElementById("heure_debut").value;
	var heurefin = document.getElementById("heure_fin").value;
	var obj = {name:nom, lastname:prenom , date:date,heures : [{heure_debut:heuredeb,heure_fin:heurefin}]};
	return obj;
}

function supprimer(event)
{
	$.get("./php/supprimer_creneau.php", { ID_creneau: event.path[1].id},
		function(data3)
		{
			alert(data3);
		});
	console.log(event);
	document.getElementById("creneau").removeChild(event.path[1]);
}



function ajouter()
{
	obj=getInfo();
	ajout_work_base(obj);
	addwork(obj);
}

function addwork(obj)
{
	alert("test");
	var butt = document.createElement('button');
	var newdiv = document.createElement('div');
	newdiv.setAttribute("class", "maclasse");   
	//Creation de la variable JS ou son stocker les creneaux a ajouter.
	var texte = document.createTextNode('' + obj["name"] + '  '+ obj["lastname"] + ' le ' + obj["date"]  + ' de ' + obj["heures"][0]["heure_debut"] + ' h à ' + obj["heures"][0]["heure_fin"] + ' h');
	newdiv.appendChild(texte);
	newdiv.appendChild(butt);
	newdiv.setAttribute('id', obj["ID_creneau"]);
	document.getElementById("creneau").appendChild(newdiv);
	butt.addEventListener('click', supprimer);
	console.log(i);
}
function supp_personne()
{
	var nom = document.getElementById("select1").value;
	var text = nom.split(' ');
	var nom = text[0];
	var prenom = text[1];
	console.log(text);
	$.get( "./php/recuperer_id_perso.php", { NOM: nom, PRENOM: prenom },
		function(data)
		{
			//debugger;
			console.log(data);
			$.get("./php/supp_creneaux_from_id_perso.php", {ID_PERSO: data},
				function(data1)
				{
					console.log(data1);
					$.get("./php/supp_id_perso.php", {ID_PERSO: data},
						function(data2)
						{
							alert(data2);
							window.location.reload();
						});
				});

		});
}

function ajouter_personne()
{
	var nom = prompt("votre nom et prenom");
	var text = nom.split(' ');
	var nom = text[0];
	var prenom = text[1];
	console.log(text);
	$.get( "./php/recuperer_id_societe_from_nom.php", {nom: document.cookie},
				function(data2){
	$.get( "./php/ajouter_perso.php", { NOM: nom, PRENOM: prenom , ID_SOCIETE: data2},
		function(data)
		{
			alert(data)
			window.location.reload();
		});
	
	});
}

function ajout_work_base(obj)
{
	$.get( "./php/recuperer_id_perso.php", { NOM: obj['name'], PRENOM: obj['lastname'] },
		function(data)
		{
			ajouter_c(data)
		});
}

function ajouter_c(data)
{
	$.get( "./php/ajouter_creneau.php", { DATE_DEB: obj['date'], heure_deb: obj["heures"][0]["heure_debut"] , heure_fin: obj["heures"][0]["heure_fin"] ,ID_PERSO: data},
		function(data)
		{
			alert(data)
		});
	
}

function ICS()
{
	var value = document.getElementById("select1").value;
	var nom = value.split(' ')[0];
	var prenom = value.split(' ')[1];
	var maliste = [];
	$.get( "./php/recuperer_id_perso.php", { NOM: nom, PRENOM: prenom },
		function(data)
		{
			$.get("./php/tous_les_id_creneaux.php", {ID_PERSO: data},
				function(data2)
				{
					var json = JSON.parse(data2);
					var coroutines = [];
					for (var i = 0; i < json.length; i++)
					{
						coroutines[i] = $.get("./php/recuperer_creneau_depuis_id.php",{ID_creneau:json[i].ID_creneau},
							function(data3)
							{
								var json2 = JSON.parse(data3);
								var obj = {name:nom, lastname:prenom , date:json2.date,heure_debut:json2.heure_deb,heure_fin:json2.heure_fin,ID_creneau: json2.ID_creneau};
								maliste.push(obj);
							});
					}
					$.when(...coroutines).done(
						function(status)
						{
							
							send_list(maliste);
						});
				});
		});
}

function send_list(maliste)
{
	
	var form = '';
	form += '<input type="hidden" name="maliste" value="'+encodeURIComponent(JSON.stringify(maliste))+'">';
	$('<form action="./php/creer_ICS.php" method="POST">' + form + '</form>').appendTo($(document.body)).submit();
	console.log(form);
}

function deco(){
	alert("deco");
	document.cookie = "";
	location.href="loggin.html";
}
