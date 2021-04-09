<?php
//include 'ICS.php';
$maliste = $_POST['maliste'];
//echo $maliste["name"];
$i = 0;

$maliste = urldecode($maliste);
$maliste = json_decode($maliste);


$fichier = fopen('Calendar.ics', 'w+');

$preambule = 'BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//hacksw/handcal//NONSGML v1.0//EN
';

while ($maliste[$i]->date != NULL) {
$preambule.="BEGIN:VEVENT
";   
$string = "DTSTART:".$maliste[$i]->date;
$test_date = preg_replace('/-+/', '', $string);
$test_date .='T';
$heure_deb = $maliste[$i]->heure_debut;
$test_deb = preg_replace('/:+/', '', $heure_deb);
$test_date.=$test_deb."00Z
";
//echo $test_date;
$string1 = "DTEND:".$maliste[$i]->date;
$test_date1 = preg_replace('/-+/', '', $string1);
$test_date1 .='T';
$heure_fin = $maliste[$i]->heure_fin;
$test_fin = preg_replace('/:+/', '', $heure_fin);
$test_date1.=$test_fin."00Z
";
//echo $test_date1;

//echo $test;
$preambule.=$test_date;
$preambule.=$test_date1;
$preambule.="SUMMARY:HORAIRE
END:VEVENT
";
$i = $i + 1;
}


$preambule.="END:VCALENDAR";
//echo $preambule;


fwrite($fichier, $preambule);
fclose($fichier);

?> 
