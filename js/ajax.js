var words;
alert(document.cookie);

$.get( "./php/recuperer_id_societe_from_nom.php", {nom: document.cookie},
				function(data2){

					$.get("./php/select.php",{id_societe: data2},
							function(data)
							{
								var i = 0;
						    	words = data.split('\n');
						    	console.log(words);
								while(i<words.length)
								{
									if(words[i]!= ' ')
									{
										var texte = document.createTextNode(words[i]);
										var newoption = document.createElement('OPTION');
										var selector = document.getElementById("select1");
										newoption.appendChild(texte);
										selector.appendChild(newoption);	
									}
								i++;
								}	
							});
				
				});





