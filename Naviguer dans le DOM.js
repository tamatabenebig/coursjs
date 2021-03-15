// Nous allons voir plusieurs propriétés qui sert a ciblé un element :

// Propirété parentNode :

var p = document.querySelector('.para');        //ici on selectionne l'élément a modifier
var div = p.parentNode;                         //Sert a acceder au parent de l'élément avant le point. donc ici on va selectionner la div ou est insérer les element p.

div.style.color = 'orange';                     // Ensuite on a plus qu'a appliquer le changement


//Propirété childNodes et nodeValue :

var b = document.body;              //ici on creer une variable qui stocke notre element body

var div = b.childNodes[3];          //ici childNodes creer des tableaux de Noeuds et les espaces compte comme un noeud(type texte).donc ici on veut selectionner le 3eme element de notre body.

var p1 = div.childNodes[1];         //pareil sauf qu'ici on veut selectionner le 1er element de notre div.

var texte = p1.childNodes[0].nodeValue;     //ici on veut acceder au noeud de type texte que l'élément selectionner precedemment contient grace a nodeValue.

alert(texte);

//Propriété firstChild et lastChild :

    //Permet d'acceder au premier et dernier element d'un noeud.

var p2 = document.querySelectorAll('.para')[1];

var premier = p2.firstChild;
var dernier = p2.lastChild;

var inner1 = premier.nodeValue;
var inner2 = dernier.textContent;

alert('Contenu du Premier Enfant : ' + inner1 +
      '\nContenu du dernier enfant : ' + inner2);

      //Propriété nextSibling :

        //permet d'acceder aux noeuds freres

      var titre = document.getElementById('gros_titre');

      var div = titre.nextSibling.nextSibling;                  // permet d'acceder aux noeuds frere de son frere =).

      div.innerHTML = '<p>div totalement modifier';

      