// Les dates en javascript de deux manieres, sois sous forme litteral sois sous forme de time stanp unique x 1000 (nombre de seconde écoulées depuis le 1er janvier 1970 a minuit UTC)

// les dates en javascripts sont calculée en milliseconde c'est pour sa que c'est x1000.


//METHODE SOUS FORME TIME STANP UNIQUE :

var datelit = date();                           //Permet d'afficher la date actuel litteral
var datems = date.now();                        // Permet d'afficher la date actuelle en MS(milliseconde)

alert('date litteral : ' + datelit +
      '\nDate sous forme ms : ' + datems);


// Utilisation du constructeur date


var d = new date(0);            // ici permet d'afficher la date en indiquant le nombre de milliseconde ecoulée depuis le 1er janvier 1970 a minuit
                                //ici avec l'argument 0 ceci affichera du coup le 1er janvier 1970 a minuit
    alert(d);


var d = new date(604800000);   // ici on a indiquer le nombre 604 million 800 mille MILLISECONDE(correspond au nombre e milliseconde dans une semaine)    
    alert(d);

// on peut aussi aficher une date precise en indiquant le mois le jour et l'année avec le constructeur new date()
// indiquant la date sous la forme ANGLOSAXONNE
var d = new date(may,6,1996);

    alert(d);

//Utilisation du constructeur new date() 
// En javascript janvier correspond a l'index 0 donc decembre est a l'index 11
var d1 = new date(2015,6,15,12,30,20,110);      // ANNEE,MOIS,JOUR,HEURE,MINUTE,SECONDE et MILLISECONDE;
   var d2 = new date (2017,10,5);               // Toujorus dans le meme ordre sauf qu'on indique seulement les choses obligatoires , ANNEE,MOIS,JOUR 

alert('date 1 : ' + d1 +
      '\ndate 2 : ' + d2);

      // METHODE SOUS FORME LITTERAL :


var diso1 = new date("2015-06-15");                                 // ici on indique l'année, le moi et le jour
var diso2 = new date("2015-06-15T12:00:00");                        // ici on indique l'année, le moi , le jour T l'heure

var dcourte = new date("06/15/2015");                               // ici on indique le mois, le jour et l'année
var dlongue = new date("January 25 2015 09:00:00");                 // ici on inque le mois, le jour, l'année et l'heure

var dcomp = new date(" Sun Jan 25 2015 09:00:00 GMT+0100");         // et ici on indique le jour de la semaine, le mois, le jour, l'année l'heure et le fuseaux horaires

    alert('Date iso 1 : ' + diso1 + 
          '\nDate iso 2 : ' +diso2 +
          '\nDate courte : ' + dcourte +
          '\nDate longue : ' + dlongue +
          '\nDate complete : ' + dcomp);



// presentation de methode d'objet GETTER avec lobjet Date :


var d = new Date ();

var dms = d.getTime();                          //Permet d'afficher le temps ecoulé depuis le 1er janvier 1970 a minuit.

var dy = d.getFullYear();                       //Permet de retourner l'année. 
var dmo = d.getMonth();                         //Permet de retourner le mois entre 0 et 11 ( 0 = janvier et 11 = decembre).
var ddate = d.getDate();                        // Permet de retourner le jour du mois.
var dday = d.getDate();                         // Permet de retourner le jour du mois sous forme de lettre ( 0 correspond a dimanche et 6 correspond a lundi).

var dh = d.getHours();                          // Renvoie l'heure en 0 et 23.
var dmi = d.getMinutes();                       // Renvoie les minutes entre 0 et 59.
var ds = d.getSeconds();                        // Renvoie les secondes entre 0 et 59.
var dMs = d.getMilliseconds();                  // Renvoie les secondes entre 0 et 59.

alert('Nous sommes le ' + ddate +'/'+ dmo +'/' + dy +
      './nIl est actuellement ' + dh +':'+ dmi+':' + ds+':' + dMs);

// Presentation de methode d'objet SETTER avec l'objet Date :

// La methode d'objet SETTER permet d'atttribuer de nouvelle valeur a notre objet date

var d = new Date();                     // On declare ici uen variable contenant la date actuelle

d.setFullYear(2015,5,15);               // Ici on modifie l'année le mois et le jour sous la notation Anglosaxonne
d.setHours(12);
d.setMinutes(30);
d.setSeconds(15);

alert('Il est desormais : ' + d);


//Modifier le format d'affichage de la date :

var d = new Date();

var dy = d.getFullYear();
var dmo = d.getMonth();
var dday = d.getDay();
var ddate = d.getDate();
var dh = d.getHours();
var dmi = d.getMinutes();
var ds = d.getSeconds();

                        //Oncreer un tableau  qui repertorie tous les mois de l'année de 0 a 11.
var mois = ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
                        //On creer aussi un tableau qui repertorie tous les jorus de la semaine de 0 a 6.
var jour = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];

alert('Le'+ jour[dday] + ' ' + ddate + ' ' + mois[dmo] + ' ' + dy + 
      '. /nIl est : ' + dh + ' h ' + dmi + 'min et ' + ds + ' seconde.');