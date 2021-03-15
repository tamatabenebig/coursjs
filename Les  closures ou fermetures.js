function compteur(){
    var i = 0;

    return function(){
        return i++;
    }
}

var PlusUn = compteur();
var autreInstance = compteur();

alert('Premier tour : ' + PlusUn() +
      '\nDeuxieme Tour : ' + PlusUn() +
      '\Premier tour autre Instance : ' + autreInstance() +
      '\nTroisieme tour : ' + PlusUn());