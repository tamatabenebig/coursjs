//Fonction anonymes:


var carre = function(x){                        
    alert('carré de '+ x + ' = ' + x*x);        
};      

var y = prompt('Entrez un nombre');  

carre(y);                        


//Fonction auto-invoquée:

(function(x){
    x=prompt('Entrez un Nombre');
    alert("carré de "+ x +' = ' + x*x);
})();