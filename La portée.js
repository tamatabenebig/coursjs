// la portee en javascript peut etre global ou local. 
// une variable local est une variable qui est utilisé dans une fonction et ne peut etre utilisé que dans cette fonction.
// Alors qu'une variable global pourra quant a elle etre utilisé dans tout le script.
// Remarque: pour une question de lisibilité du script ne pas utilisé de variable global pour une utilisation local.


// Variable local :

function local(){                           //ici on utilise une variable local.
    var x = 4;

}
alert('x local vaut: '+ local());


//Variable global :

var x = 5;                                  //ici on declare une variable global.

function local(){
    var x = 7;                              //ici on declare une variable local, variale local car elle est declarée au sein d'une fonction.
    return x;
}

alert('x global : '+ x + 
      '\n x local : ' + local());           //et ici on alerte le resultat de x global et de x local.




      // le javascript sait faire la difference entre une variable global et une variable local.
