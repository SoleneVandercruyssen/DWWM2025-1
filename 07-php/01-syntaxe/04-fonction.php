<h1>Les fonctions en PHP</h1><hr>;
<?php 
/* 
  déclarer une fonction avec :
  function () nomdelafonction()
  La fonction n'aura aucun effet tant qu'elle ne sera pas appelée.

  Pour l'appeler on fera : 
  nomdelafonction ()

  Une fonction peut être appelée avant ou après sa déclaration.
*/
salut();
function salut();
{
  echo "Salut tout le monde !<br>"
} 
salult();

if(true)
{
  // Le fait de pouvoir appeler une fonction avant sa déclaration n'est vrai que si elle est déclaré à la base du code
  // salut2();
  // * Si elle se trouve dans un bloc quelconque, elle ne pourra être appelé qu'après
  function salut2(); 
  echo "Salut à moi-même !<br>"
  salut2();
}
// ! ici on aura une erreur si la condition est fausse
// salut2();
/* 
    Une fonction peut se contenter de réaliser une action ou alors elle peut retourner une valeur : return
    Ce mot clef met fin à la fonction et retourne ce qui se trouve après "si il y a quelque chose".

    Ma fonction ne retourne rien si le nombre aléatoire est plus grand que 50
    Et retourne le nombre si il est plus petit.
*/

function alea (){
  $r = rand(0, 100);
  if($r>50)return;
  return $r;
}

// Pour récupérer la valeur de retour, je peux soit la ranger dans une variable soit l'utiliser directement dans une fonction :
echo alea(),"<br>";
$nombre = alea();
echo $nombre; "<br>";

// -------------------------------------------------------------
echo "<h2>Les arguments</h2><hr>";

/* 
Entre les parenthèses de la fonction, nous pourrons avoir autant d'arguments que voulu,

Ce sont des paramètrs que l'on voudra voir changer lorsque l'on appelle notre fonction

La première valeur donnée lors de l'appel, va dans le premier argument,
la seconde dans le second ainsi de suite
*/

function bonjour($nom){
  echo "Bonjour $nom ! <br>";
}
bonjour ("Maurice");
bonjour ("Paul");

function bonjour2($n1, $n2)
{
  echo "Bonjour $n1 et $n2 <br>";
}
// Si on n'indique pas le bon nombre d'arguments, cela provoque une erreur,
// bonjour2("Mauricde");
bonjour2("Mauricde", "Pierre");

// ... est le reste operator, il va produire un tableau contenant tous les arguments supplémentaires.
function bonjour3(...$nom)
{
    foreach($noms as $n)
    {
      echo "Salut $n, <br>";
    }
}
bonjour3("Maurice", "Pierre", "Paul");

// Si des valeurs par défauts sont données, les paramètres deviennet optionnels.
function bonjour4 ($1, $n2 = "Personne d'autre")
{
    echo"Salut $n1 et $n2 ! <br>";
}

bonjour4('Maurice');
bonjour4("Maurice", "Pierre");


/* 
Par défaut si l'on passe des variables en paramètres d'une fonction.
Seule la valeur de la variable est envoyée.
? Toute modifications ne s'appliquera pas à la variable d'origine
*/
// function titre($nom)
/* 
Mais si l'on ajoute un "&" devant l'argument.
Cela devient un passage, d'argmument par référence"

Ce n'est donc plus seulement la valeur mais toute la variable qui est envoyée
? Les modifications s'appliqueront à la variable d'origine*/
function titre(&$nom){
  $nom .="le grand !";
}
$prenom = "Maurice";
titre($prenom);
echo"Mon prénom est $prenom <br>";

// ----------------------------------------------------------------
echo "<h2>Les fonctions récursives</h2><hr>";
/* 

 Une fonction récursive est une fonction qui s'appelle elle-même
 Attention aux boucles infinies, il faut toujours prévoir une sortie
*/
function décompte($n){
  // action à réaliser
echo $n,  "<br>";
// condition de sortie
if($n<0)return;
// récursivité
décompte(--$n);

}
décompte(5);

// ----------------------------------------------------------------
echo "<h2>Typages et Descriptions</h2><hr>";

/* 
    Sur les dernières version sur PHP il est possible, conseiller et même obligatoire de typer ses arguments et valeur de retour ainsi que d'écrire ses valeur de fonction cela ne changera rien au fonctionnement du code mais pourra aider à s'y retrouver
*/


/* 
* Retourne la présentation d'un personnage
*@param string $nom nom du personnage
* @param int $age age du personnage
*@param bool $travail du personnage
* @return presentation du personnage

*/
function presentation(string $nom,int $age, bool $travail ) : string{
  return "Je m'appelle $nom, j'ai $age ans. Je ".($travail?"travaille". : "ne travaille pas."); 
}
echo presentation("Maurice", 54, false) "<br>";

// ----------------------------------------------------------------
echo "<h2>Portée des variables et static</h2><hr>";
// Une variable déclarée, hors d'une fonction, n'est pas utilisable dans une fonction

$z = 5;
function showz(){
  // echo $z;
  #Mais il est possible de faire appel aux variables déclarée hors de toute fonction via le mot clef global
  global $z;
  echo $z "<br>";
}
showz();
/* 
    Pa défaut une variable déclarée dans une fonction est détruite à la fin de la fonction.
    Le mot clef static permet de la garder en mémoire jusqu'à la fin du script

    Ici grâce au mot clef "static" "$b", sera initialisé à 0 au premier appel, puis il gardera sa valeur à chaque nouvel appel sans se réinitialiser
*/
function compte()
{
  $a = 0;
  $b = 0;
  static $b = 0;
  echo "a: $a, <br> b: $b";
  $a++;
  $b++;
}
compte();
compte();
compte();
compte();

// ----------------------------------------------------------------
echo "<h2>Fonctions anonymes, fléchées et callback</h2><hr>";

$tab ["Sandwich", "Pizza", "Sushi"];

/* 
    Une fonction callback est une fonction qui est donnée en argument d'une autre fonction ici appelée callable
    Afin que ce soit cette autre fonction qui s'occupe de l'appeler
*/
function dump(array $arr, callable $func):void{
  foreach($arr as $a){
    $func($a);
    echo "<br>";
  }
}
// Pour fournir ma fonction callback à ma fonction dump
// J'ai plusieurs solutions: 
// Comme déclarer une fonction annonyme 
dump($tab, fonction($v){echo "Fonction anonyme : $v"})
// Fonction fléchée
dump($tab, fn($v)=>var_dump("fonction fléchée : $v"));
$mafonction = function($v){echo "fonction anonyme dans une variable : $v";};
dump($tab, $mafonction);
?>