
//Methode toLowerCase permet de mettre tout les caractéres en minuscule
// Methode toUpperCase permet de mettre tout les caracteres en majsucule
//ATTENTION bien mettre les majuscules au bonne endroit sur les methodes d'objets

var texte = "J'apprend le JAVASCRIPT";              //Declare une variable de type string

var texteMin = texte.toLowerCase();                 //Declare une autre variable pour stocker la modification + synthaxe d'utilisation de methode d'objet sur variable primitive
var texteMaj = texte.toUpperCase();

alert('Texte de base : ' + texte +                  //Petite fonction alert pour afficher la modification apporté
      '\nTexte en majuscule : ' + texteMaj +
      '\nTexte en Minuscule : ' + texteMin);


    //Methode charAt permet de savoir quelle caractere occupe quel position (en index) dans la chaine de caractere 

    var texte = "J'apprendle JAVASCRIPT";           //On commence par declarer la variable texte

    var pos0 = texte.charAt(0);                     // on declare la variable ensuite on ecrit le nom de la variable(texte) on separe avec le '.' 
    var pos3 = texte.charAt(3);                     //puis on ecrit la methode (charAt) suivie de l'index rechercher
    var pos11 = texte.charAt(11);

    alert('Position 0 : ' + pos0 + 
          '\nPosition 3 : ' + pos3 +
          '\nPosition 11 : ' + pos11); 


    //Methode indexOf et lastIndexOf

    var texte = "J'apprends le JAVASCRIPT";                  //on commence encore par declaré notre variable primitive

    var premiere = texte.indexOf(p);                        // ici on va trouvé le p a l'index 3
    var derniere = texte.lastIndexOf(p); //ici on va trouvé le dernier p a l'index 4 car cette methode respecte la case donné ici le p est en minuscule alors que le dernier est en maj
    var sequence = texte.indexOf('le');                   // ici on recherche une sequence de caractere 'le' qui ce trouve a l'index 12 car c'est la il fini (L=11 et e=12)
    var lettreJ = texte.indexOf(J,3);                        // ici on recherche la lettre 'J' a partir de l'index 2 donc de "a" MAIS on compte depuis le debut (J=14)
                          
    alert('Le premier p trouvé est a : ' + permiere +           // Si le caractere indiqué n'est pas dans la chaine de caractére il sera indiqué " -1 "
          '\nDernier p trouvé est a : ' + derniere +
          '\nPremier "le" trouvé est a : ' + sequence);


    //Methode replace permet de remplacer une chaine de caractere


    var texte = "J'apprends le JAVASCRIPT";             //on declare la variable de type string

    alert(texte.replace("JAVASCRIPT","PHP"));           //ici pas besoin de stocker la nouvelle vairable car il n'y en a qu'une
                                                        // on ecrit la variable.replace("CARACTERE A CHANGER","CARACTERE REMPLACANT")

        
    //Methode Slice permet d'extraire un morceau d'une chaine de caracter pour en creer une autre

    var texte = "J'apprends le JAVASCRIPT ";        //on declare notre variable come toujours

    var texteTronque = texte.slice(0,10);           // On peut aussi la stocker dans une variable pour la reutiliser
    alert(texte.slice(0,10));                       // ici on veut extraire une chaine a partir de l'index 0 jusqu'a l'index 10 donc ici sa sera "J'apprends"  

    var texteTronque2 = texte.slice(-11,-1);        // On peut egalement extraire une chaine de caractere en partant de la fin en indiquant un nombre negatif

                                                    // ici on part de l'index -1 qui est l'espace car si on met pas d'espace le T ne sera pas pris en compte
    alert(texteTronque2);                           //Donc on part de -1 jusqu'a -11 dont on affichera le mot "JAVASCRIPT"


    //Methode trim permet d'effacer les espaces inutile comme par exemple pour nettoyer les données envoyés par l'utilisateur

    var texte = "      Hello World            ";        // ici pour l'exemple on declare la variable avec des espaces inutiles

    var texteNettoye = texte.trim();                    // on stocke le resultat de la methode trim dans une variable

    alert('avant trim : ' + texte +
          '\nApres trim : ' + texteNettoye);                // on affiche le resultat et ceci nous donnera "Hello World"
    