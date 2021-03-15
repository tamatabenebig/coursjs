//les evenements servent a interagir avec les elements HTML soit par des attributs HTML soit par des propriété javascript.

//propriete onclick exemple 1 :

var p1 = document.querySelector('p');                       //on commence par selectionner l'elements a modifier et on le stocke dans une variable.

p1.onclick = bravo;

function bravo(){                                           //on creer notre function bravo avec entre crochet les choses a modifier.
    this.innerHTML = '<strong>Bravo ! </strong>';           //le mot this sert de reference
    this.style.color = 'orange';
};

//propriete onclick exemple 2 :

var p1 = document.querySelector('p');                       //ici on fait pareil que dans l'exemple 1.

p1.onclick = function(){                                    //Mais ici on declare une function anonyme qui ce declenche quand on clique dessus(onclick).
    this.innerHTML = '<strong>Bravo ! </strong>';
    this.style.color = 'orange';
};


//Methode addeventlistener :

var p1 = document.querySelector('p');                       //on commence par selectionner l'element HTML a modifier  et on le stocke dans uen variable.

p1.addEventListener('click', changeTexte);       //en premier argument on met l'evenement declencheur puis la function a executer quand l'utilisateur ou la page declenche l'evenement.

function changeTexte(){
    this.innerHTML = '<strong>Bravo ! </strong>';
    this.style.color = 'orange';
};

// Ajouter plusieur evenement a un meme elements:

var p1 = document.querySelector('p');

p1.addEventListener('mouseover',fonction1);
p1.addEventListener('mousedown',fonction2);

function fonction1(){                 //les arguments liés aux fonctions sont conservé meme si la fonction2 est declenché , il faut si non souhaité configuré voir exemple ci dessous.
    this.innerHTML = 'Cliquez moi maintenant';
    this.style.backgroundColor = 'orange';
};

function fonction2(){
    this.innerHTML = 'Bravo !';
    this.style.color = '#26C';
    this.style.fontWeight = 'bold';
    this.style.fontSize = '24px';
};

//configurer le retour a la normal apres l'execution d'un nevenement :

var p1 = document.querySelector('p');

p1.addEventListener('mouseover',fonction1);
p1.addEventListener('mouseout',Reset1);                             //ici on rajoute l'eveement qui va permettre de revenir a l'etat initial apres l'execution de la function1
p1.addEventListener('mousedown',fonction2);                         
p1.addEventListener('mouseup',Reset2);                              //pareil pour la function2.

function fonction1(){                 
    this.innerHTML = 'Cliquez moi maintenant';                      //execution de la function1
    this.style.backgroundColor = 'orange';
};

function Reset1(){
    this.innerHTML = 'remettre le texte d\'origine';                //quand le curseur va sortir de la zone d'evenement cette fonction s'executera.
    this.style.backgroundColor = '';                                // le fait de pas mettre d'argument permet de revenir a l'option par defaut.
}       

function fonction2(){
    this.innerHTML = 'Bravo !';
    this.style.color = '#26C';
    this.style.fontWeight = 'bold';
    this.style.fontSize = '24px';
};

function Reset2(){
    this.innerHTML = 'remettre le texte d\'origine';                //quand le bouton de la souris sera relevé cette fonction s'executera.
    this.style.color = '';
    this.style.fontWeight = '';                         //ne pas mettre d'argument permet de revenir a l'etat par defaut de l'element HTML.
    this.style.fontSize = '';
}




//function declencheur d'evenement :

/*ce declenche:
mouseover =  quand le curseur passe dessus.
mousedown = quand le bouton de la souris est en bas.
mouseup = quand le bouton de la souris et en haut.
mouseout = quand le curseur est sorti d'un evenement.

*/ 

