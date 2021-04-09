drop table CRENEAU;
drop table PERSONNE;
drop table Societe;

create table PERSONNE
(
	ID_PERSO			smallint		primary key auto_increment,
	NOM					varchar(20)		not null,
	PRENOM				varchar(20)		not null,
	ID_SOCIETE	 		smallint		not null
);

create table CRENEAU
(
	ID_creneau			smallint		primary key auto_increment,
	DATE_DEB			date			not null,
	heure_deb			smallint		not null,
	heure_fin			smallint		not null,
	ID_PERSO			smallint		references PERSONNE(ID_PERSO)
);

create table Societe
{
	id_Societe			smallint		primary key auto_increment,
	loggin				varchar(20)		not null,
	pass				varchar(20)		not null,
	email				varchar(20),
	nom 				varchar(20)

};

--insert into PERSONNE values (1,'gab','lef');
--insert into PERSONNE values (2,'gab','lef');
