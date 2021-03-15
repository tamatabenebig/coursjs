//Le switch permet de tester de nombreuse egalité et de definir pour chacune des variables un argument different.


var heure = 10;

switch(heure){                                                  //fonction switch == Si heure est egal a 8 alors afficher le message " Il est 8h "
    case 8 : 
        alert(" Il est 8h");
        break;                      // Break permet de sortir de la condition et permet de ne pas executer tout le reste de la condition
    case 9 : 
        alert("Il est 9h");
        break;
    case 10 :
        alert("Il est 10h");
        break;
    case 11 : 
        alert(" Il est 11h");
        break;
    case 12 : 
        alert(" Il est 12h");
        break;
    default : 
        alert(" Rien a afficher pour cette valeur");            // Toujours finir une condition switch par 'DEFAULT' ce qui correspond au ELSE
                                                                //( comme pour ELSE , il n'y a pas besoin de tester )dans ce cas si pas besoin de break.

}