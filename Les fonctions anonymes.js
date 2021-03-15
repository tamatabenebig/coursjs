//une fonction anonyme n'a pas de nom et permet de stocker une fonction dans une variable pour par la suite la reutilisé plus simplement en rappelant que la variable.


var carre = function(x){                        //ici on vient stocker la function dans la variable carre
    alert('carré de '+ x + ' = ' + x*x);        //ici on ecrit l'instruction a executer
};      

var y = prompt('Entrez un nombre');  //prompt permet d'afficher une boite contenant une ligne d'écriture pour l'utilisateur, ici c'est pour demander a l'utilisateur d'ecrire un nombre.

carre(y);                            //ici on rappel la variable carre qui contient notre function et on met comme argument la variable "y" qui stocke le resultat de l'utilisateur.