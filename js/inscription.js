var verif = 0;
var loggin;
var pass;
var nom;
var email;

document.getElementById("btnlog").addEventListener("click", loggin);
document.getElementById("btnins").addEventListener("click", inscription);

var newlabel = document.createElement('label');
	var newinput = document.createElement('input');
	var newb = document.createElement('b');
	newb.innerText = "email";
	newlabel.setAttribute("for", "email");
	newinput.setAttribute("placeholder", "Enter your Email");
	newinput.setAttribute("name", "email");
	newinput.setAttribute("type", "text");
	newlabel.setAttribute("id","un");
	newinput.setAttribute("id", "deux");
	newlabel.appendChild(newb);

	// new lastname 
	var newlabel1 = document.createElement('label');
	var newinput1 = document.createElement('input');
	var newb1 = document.createElement('b');
	newb1.innerText = "Name enterprise";
	newlabel1.setAttribute("for", "nameenterprise");
	newinput1.setAttribute("placeholder", "Enter your name enterprise");
	newinput1.setAttribute("name", "nameenterprise");
	newinput1.setAttribute("type", "text");
	newlabel1.setAttribute("id","trois");
	newinput1.setAttribute("id", "quatre");
	newlabel1.appendChild(newb1);

	document.getElementById("pourinscription").appendChild(newlabel);
	document.getElementById("pourinscription").appendChild(newinput);

	document.getElementById("pourinscription").appendChild(newlabel1);
	document.getElementById("pourinscription").appendChild(newinput1);
	
	document.getElementById("pourinscription").style.display = "none";
	function inscription(){

		if (verif == 0 ){
			document.getElementById("pourinscription").style.display = "block";
		verif++;
		}
		else if(verif==1)
		{
			//
			loggin = document.getElementById("loggin").value;
			pass = document.getElementById("pass").value;
			email = document.getElementById("deux").value;
			nom = document.getElementById("quatre").value;
			if(loggin == "" || pass  == "" || email == "" || nom == "")
			{
				//alert("erreur");
			}
			else
			{
				//alert("envoie de l'inscription");
				$.get( "./php/ajouter_societe.php", {
						loggin: loggin, pass: pass,email: email, nom: nom},
					function(data)
					{
						//alert(data);
						document.cookie = nom;
						location.href="index.html";
						
					});
				}
		}


	}

	function loggin(){

		if(verif > 0){
			document.getElementById("pourinscription").style.display = "none";
			verif--;

		}
		else{
			//submit 

			loggin = document.getElementById("loggin").value;
			pass = document.getElementById("pass").value;
			if (loggin == "" || pass == ""){
				//alert("erreur");
			}
			else{

				$.get( "./php/verif_mdp_loggin.php", { loggin: loggin ,pass: pass},
					function(data)
					{	
						if(data == "OK"){

							$.get( "./php/recuperer_nom_societe.php", { loggin: loggin},
								function(data)
								{
									document.cookie = data;
									location.href="index.html";

								});	

						}
						else{
							//alert("erreur");
						}
					});
				

				//";
				//alert(loggin + "  " + pass);
			}
			

		}

	}
	


