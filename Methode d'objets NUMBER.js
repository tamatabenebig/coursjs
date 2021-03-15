
//Synthaxe des Proprietes d'objets de type Number


var min = Number.MIN_VALUE;
var max = Number.MAX_VALUE;
var infneg = Number.NEGATIVE_INFINITY;
var infpos = Number.POSITIVE_INFINITY;
var notNumber = Number.NaN;

alert("Min : " + min + 
      "\nMax : " + max +
      "\ninfini negatif : " + infneg +
      "\ninfini positif : " + infpos + 
      "\npas un nombre : " + notNumber);


// Methode d'objet toString

var x = 10;

var t = x.toString();                            // Permet de changer le type de la variable ici on change le type Number en Type STRING

alert('Type x : ' + typeof(x) +
      '\nvaleur de t : ' + typeof(t));


//Methode d'objet toFixed

var x = 10.4526;                

var d = x.toFixed(2);                           // toFixed permet de choisir combien on veut de nombre apres la virgule on indique la variable a changer.toFixed(Le nombre de decimal)

alert("Valeur de d : " + d +                    // La variable modifier devient alors non plus de type NUMBER mais de type STRING
      "\nType de d : " + typeof(d));

//Methode d'objet toPrecision

var x = 10.4724;                                // toPrecision permet d'arrondir le nombre decimal au superieur

var d = x.toPrecision(3);                       // On indique d'abord la variable a modifier.toPrecision(Le nombre de chiffre que l'on veut retenir pour arrondir)

alert("Valeur de d : " + d +                    
      "\nType de d : " + typeof(d));


  //Methode toExponential
  
  var x = 10.4724;                                

  var d = x.toExponential(3);                   //toExponential permet de faire un truc mathematique !     

alert("Valeur de d : " + d +                    
      "\nType de d : " + typeof(d));


// Methode Number 

var t = true;
var f = false;
var d = new Date();                         // La fonction Number permet de retourner un nombre par rapport a une chaine de caractere

alert("True : " + Number(t) +               //True et false sont retourner en Binaire true = 1 , false = 0 
      "\nFalse : " + Number(f) +
      "\nDate : " + Number(d));


// Methode parseInt() et parseFloat()


var x = "10.4531";

var int = parseInt(x);                                      // parseInt() permet de renvoyer un nombre entier par rapport a une chaine de caractere
var dec = parseFloat(x);                                    //parseFloat() permet de renvoyer un nombre deciaml par rapport a une chaine de caractere        

alert ( "parseInt() : " + int + ' - ' + typeof(int) +       // Le type string devient alors de type Number apres modification
        "\nparseFloat() : " + dec +  ' - ' + typeof(dec));