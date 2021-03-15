// Il existe deux types de fonctions en javascript : les fonctions natives( fonctions creer par la communauté) 
// et les fonctions utilisateurs ( qui sont creer par l'utilisateur a des fins specifiques)


function multiplication(x,y){// ici nous avons cree une fonctions 'multiplication' qui a pour "TEMOIN" 'x,y'(*certaines fonctions non pas besoin de témoins*) mais tjr ecrire les "()"
    alert(x*y);              // on affiche avec la fonction native 'alert' le resultat de x*y
}

multiplication(5,10);        // et la on utilise la fonction qu'on a creer pour multiplié les ARGUMENTS 5,10   
multiplication(-4,60);       // pareil pour ici



function multiplciation(x,y){                       // ici autre exemple avec la fonction return
    return x*y;                                     // la fonction natives return permet de stocker le resultat obtenu dans une variable qu'on aura creer 
    alert("Ce message ne sera jamais affiché");     // ATTENTION apres le return la fonction s'arrete, c'est a dire que tous ce qu'il y aura apres ne s'executera pas.
}


var resultat1 = multiplication(5,10);               // ici les deux variables creer pour stocker le resultat grace a la fonction return
var resultat2 = multiplication(-4,60);




