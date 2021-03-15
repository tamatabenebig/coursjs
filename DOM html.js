//DOM = Document Object Model est creer direcement par le navigateur au chargement de la page.
// Un dom contient des Elements et des Noeuds.
// Les elements et les Noeuds sont considéré comme des objets donc ils ont comme les objets, des proprietes et des methodes.

//Ont y accedes grace aux methodes suivantes :


 // Comment acceder aux elements HTML :

 var titre = document.getElementById('mettre ID correspondant');                //Permet d'acceder aux elements HTML avec un ID.

 alert(titre);


 var tableau = document.getElementsByTagName('mettre l\'element a modifier de type paragraphe ou header ou liste...'); //Permet d'acceder aux elements HTML de meme types d'un coup.

 alert('Notre page contient : '+ tableau.length);

 var tableau2 = document.getElementsByClassName('mettre le nom de la classe')                   // permet d'acceder aux elements HTML de type class.

 alert('Notre Page contient : '+ tableau.length + ' paragraphe portant la class para');



 // Comment acceder aux selecteur CSS grace a la methode query selector :

 var lien = document.querySelector("p a");                  //Permet d'acceder a tous les liens 'a' contenu dans nos paragraphes 'p'.
 var p = document.querySelectorAll('.para');                //Permet d'acceder a tous les elements ayant la classe para ( comme en css pour ecrire les class et les ID).

 alert('Informations dans lien : ' + lien +
       '\nDans p[0] : ' + p[0]+                     //Les methodes crées des tableaux si par exemple dans nore DOM HTML  il y a plusieurs elements avec la meme classe.
       '\Dans p[1] : ' + p[1]);


// Comment acceder au contenu de nos elements HTML  :

var titre = document.getElementById('Mettre l\id correspondant').innerHTML;             //Permet d'acceder au contenu du titre avec un ID  ' '.

alert(titre);


var p = document.querySelector('.para').innerHTML;          //Permet d''acceder aux contenus de nos elements comportant la class 'para'.

alert(p);                                                   //La methode query selector permet d'acceder jsute aux premiers elements de notre script html comportant la class para.



//innerHTML permet d'acceder aux contenu global de nos elements avec text content sa permet d'acceder seulement au contenu visuel de nos elements :

var p = document.querySelector('.para').innerHTML;                      //Acces aux contenus global de notre elements.
var t = document.querySelector('.para').textContent;                    //Acces aux contenus visuels.

alert('Contenu récupéré avec inner HTML : \n' + p +
      '\n\nContenu récupéré avc textcontent : \n ' + t);


// Propriété lié a l'objet document :

var titre_page = document.title;                //Permet d'acceder aux contenus de titre de l'enfant direct de document.
var page = document.body;                       //Permet d'acceder aux contenus de body de notre objet document qui du coup est notre script HTML.
var lien = document.links;                      //Permet d'acceder aux contenus non visuels si aucun indice indiqué car pour rappel LES METHODES D'OBJETS CREE DES TABLEAUX.

alert('Contenu de notre titre : '+ titre_page + 
      '\n Contenu de notre body : ' + page +
      '\nContenu de notre lien : ' + lien[0]);      //L'indice indiqué permet d'acceder aux contenu visuels.       


//Modifier du contenu HTML :




//Inserer un element html avec appendChild :

var newPara = docoment.createElement('p');
newPara.id = 'nouveau';

var texte = document.createTextNode('texte qu\'on veut ajouter');

newPara.appendChild(texte);

document.body.appendChild(newPara);

var para1 = document.querySelector('.para');          //insérer un element HTML ou on veut grace a la fonction insertBefore.

document.body.insertBefore(newPara,para1);            //On place en premier argument l'objet a inseré et en deuxieme l'objet avant lequel on veut le mettre.


// supprimer des elements HTML :

var titre = document.getElementById('placez l\'id cible');
var parent = document.body;

parent.removeChild(titre);

//Modifier un element HTML :

var titre = document.getElementById('placez l\'id cible');
var parent = document.body;

var nouveauTitre = documet.createElement('h2');             //ici on creer un nouvel element, dans cet exemple c'est un titre.
nouveauTitre.id = 'tritre_moyen';                           //on lui met un ID.
nouveauTitre.innerHTML = 'Titre modifié en Js';             // et on insere ici le nouveau texte.

parent.replaceChild(nouveauTitre,titre);                    //en 1er argument on met l'element de rempalcement et en 2eme argment l'element a remplacer.

