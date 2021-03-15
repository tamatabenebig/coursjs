//Presentation de la methode d'objet Random qui permet de generer un nombre decimal aleatoire entre 0 et 1.

var x = Math.random();                      
var y = Math.random();

alert( 'Le contenu de x : ' + x +
       '/nLe contenu de y : ' + y);


// Pour generer un nombre entre 0 et 1000 par la methode math.random il suffit juste de le *1000.

var x = Math.random()*1000;
var y = Math.round(x);                          //la methode Math.round permet d'arrondir le resulat, Ne pas oublier de mettre l'argument( variable a arrondir)

alert('Le contenu de x : ' + x +
      '/nLe contenu de x arrondi : ' + y);


//Methode floor et ceil :


var x = Math.random();

var inf = Math.floor(x);                        // Ici floor permet d'arrondir a l'inferieur le nombre decimal aleatoire de x.
var sup = Math.ceil(x);                         // Ici ceil permet d'arrondir au superieur le nombre decimal aleatoire de x.

alert('Contenu de x : ' + x +
      '\nArrondi inferieur : ' + inf + 
      '\nArrondi superieur : ' + sup);


// MEthode Math.min et Math.max :

var min = Math.min(0, 200  , -10 ,50,79);               //La methode min permet d'afficher le plus petit nombre d'une serie.
var max = Math.max(0, 200  , -10 ,50,79);               // Et la methode max permet d'afficher le plus grand nombre d'une serie.

alert('Plus petit nombre : ' + min +
      'Plus grand nombre : '+ max);


//Methode abs de l'objet math :

var x = 30;
var y = -4;

var absx = Math.abs(x);
var absy = Math.abs(y);                                                     //La methode abs permet d'afficher la valeur absolu d'un nombre c'est a dire la valeur positif d'un nombre.

alert('Valeur de x : ' + x + ' ' + 'Valeur absolu de x : ' + absx + 
      '\nValeur de y : ' + y + ' ' + 'Valeur absolu de y : ' + absy);



//Methode de l''objet Math : 

var x = 5, y = 3, z = 0.5;

var power = Math.pow(x,y);                  // Permet d'afficher l'exposant.
var rac = Math.sqrt(x);                     //Permet d'afficher la racine carée d'un nombre declaré en argument(x).
var cos = Math.cos(z);                      //Permet de calculer le cosinus d'un nombre.
var sin = Math.sin(z);                      //Permet de calculer le sinus d'un nombre.
var pi = Math.PI;                           //Permet d'afficher le nombre pi du moins l'approximation car lordinateur ne peut pas afficher le nombre complet.
      
      