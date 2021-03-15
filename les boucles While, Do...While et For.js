// la boucle while( TANT QUE) permet de repeter une condition
// Toujours incrementé ou decrementer sinon BOUCLE INFINIE DANGER !!! 
 

var x = 0 ;

while ( x < 10 ){                    //Tant que ma variable X est inferieur a 10  
    alert (" 'x vaut : " + x);       // afficher le message " x vaut : "       
    x++;                            // ajouter 1 a ma variable x
                                    // repeter cette operation TANT QUE (x < 10 = TRUE)
}

// ici la boucle DO WHILE permet d'effectuer une premiere boucle avant de s'arrreter
// la boucle DO WHILE fera toujours une premiere boucle meme si celle ci est FAUSSE des le depart


var x = 0 ;

do{                                 // affiche moi "x vaut : " tant que x > 10 = TRUE
    alert;("x vaut : " + x);          
   x--; 
}
while ( x > 10);


// La boucle FOR



var i = "";                                     // on commence par declaré sa variable

for (i = 0; i< 10 ; i++){                       // 1: on initialise la variable, 2: on ecrit notre condition, 3: on incrémente/décrémente.   
    alert(" i contient la valeur : " + i);      // et si la condition est remplie afficher le message  " i contient la valeur : " .

}
