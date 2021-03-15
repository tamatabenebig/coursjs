// Les objets en javascripts sont constitué de PROPRIETE, de METHODES et de FONCTIONS.
// Les fonctions en javascript peuvent etre utilisé avec les variables de types objets et les variables de types primitives 
//la seul difference entre les deux et qu'on ne peut pas comparé des objets entre eux

var primitive = "Je suis une valeur primitive";         // synthaxe d'une variable simple qui stocke une valeur dite PRIMITIVE

var moi = {                                 //Synthaxe d'une propriété
    prenom : "Jeremy",                      // ici on creer une variable moi qui stocke : les propriétés 'prenom,nom et age' qui stocke une valeur
    nom : "Oger",
    age : 23,

identite : function(){                      //Ensuite, on assigne une methode c'est a dire on ecrit une propriété suivie d'une function() ici elle est "anonyme"
    return 'Prénom : ' + this.prenom +       //et la on vient stocker tous sa avec la function return
           '\nNom : ' + this.nom +
           '\nAge : ' + this.age;
    }
}
    alert(moi.identite());              //on indique d'abord la propriete puis la methode.


    // FONCTIONS CONSTRUCTEURS :
        // Creation d'une fonction constructeur>>>


    function Identite(p,n,a){
        this.prenom = p,
        this.nom = n,
        this.age = a;
    }

    var jeremy = new Identite("Jeremy","Oger",23);
    var joanna = new Identite("Joanna","Oger",27);
    var virgile = new Identite("Virgile","Haurie",27);
    alert('Age de Jeremy : ' + jeremy.age +
          '\nAge de Joanna : ' + joanna.age +
          '\nAge de Virgile' + virgile.age);

    //Methode basique qui reprend l'exemple au-dessus mais sans utilisé de fonction constructeur     
var soeur = "joanna";
var age = 27;

var frere = "virgile";
var age1 = 27;

var me = "jeremy";
var age2 = 23;

alert('Age de joanna : ' + age +
      '\nAge de Virgile : ' + age1 +
      '\nAge de Jeremy : ' + age2);


// Copie d'une variable premitive, permet de modifier une variable primitive sans changer l'original
// Ceci ne peut pas etre fait avec des variable de types objets car cela changerai toutes les valeurs de l'objets meme celle d'origine.

var x = 10;
var y = x;

y += 20 ;

 /*
 donc ici y est egal a 30 
et x est toujours egal a 10 */