//Methode array pour creer un tableau

var prenom = ['Jeremy','pierre','charlotte','joanna'];

alert(prenom[3]);


//Methode pour modifier un element dans notre tableau


var prenom = ['Jeremy','pierre','charlotte','joanna'];
prenom[3]='Maylis';

alert(prenom[3]);


// methode pour afficher le nombre d'elements dans notre Tableau

var prenom = ['Jeremy','pierre','charlotte','joanna'];

alert('Notre Tableau contient' + prenom.length + 'elements');                   // .length est une propriete qui permet de calculer le nombre que contient un tableau, une string

//Methode qui permet d'ajouter un elements a la fin de notre tableau

var prenom = ['Jeremy','pierre','charlotte','joanna'];

prenom[prenom.lenght] = 'Virgile';
prenom[prenom.lenght] = 'Maylis';

alert("On a ajouté " + prenom[4] + ' et ' + prenom[5] + ' a notre Tableau');


// Utilisation d'une boucle For avec un tableau

var prenom = ['Jeremy','pierre','charlotte','joanna'], p = '';

for(i=0; i<prenom.length ; i++){
    p += ' Prenom n° ' + (i+1)+ ' : ' + prenom[i] + '\n';
}
alert(p);

// objet litteral , creation d'un tableau d'objet litteral

var prenom  = {
    prenom1 : ' pierre',                                            // Un tableau d'objet litteral est strictement different d'un Array 
    prenom2: ' jeremy',                                             // Les methodes et propriete relatives au ARRAY ne peuvent etre utilisé sur les tableaux d'objets litteraux
    prenom3 : 'virgile',
    prenom4 : 'joanna'

};

alert(prenom.prenom2);


// Utilisation d'une boucle for in dans un tableau d'objet litteral ( permet de faire comme une boucle for sur un ARRAY)


var prenom  = {
    prenom1 : ' pierre',                                            
    prenom2: ' jeremy',                                             
    prenom3 : 'virgile',
    prenom4 : 'joanna'

}, p = '';


for ( var clefs in prenom){
    p+= clefs + ' : ' + prenom[clefs] + ' \n';
}

alert(p);