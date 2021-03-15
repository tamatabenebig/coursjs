var heure = 21;
//les valeurs en Javascript sont comparait par default a True, donc true n'est pas necessaire


if (heure <= 0 && heure < 12 == true){                          // Structure conditionelle ++ Operateur logique ( && )
    alert("Bonsoir")

}
else if (heure === 12 == true){
    alert("Il est midi");
}
else if ( heure > 12 && heure <= 24 == true)
    alert("C'est l'apres-midi ou le soir");
else {
    alert("La Valeur n'est pas valide");
}                                                               //FIN Structure conditionelle ++ Operateur logique ( && )


var heure = 10 ; 

if ( heure < 0 || heure > 24 == true){                          //Structure conditionelle ++ Operateur logique ( || )
    alert( " L'heure saisie est invalide");
}
else {                                                          // les conditions if finissent toujours par un else et n'a pas besoin d'etre testé.
    alert("L'heure semble correct");
}                                                               //FIN Structure conditionelle ++ Operateur logique ( || )


var heure = 18 ;

if (! heure <=16 == true ){
    alert( "Il est plus de 16h");
}
else {
    alert("Il est moins de 16h");
}                                                               //FIN Structure conditionelle ++ Operateur logique ( ! )
/* 

Operateur logique :

ET(AND) : &&
OU(OR)  : ||
NON     : !   sert a nier, a inverser la comparaison 

*/