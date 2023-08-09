1- Écrire un programme qui affichera le message « Hello World ».
<script>
console.log("Hello World");
</script>
2- Demander à l’utilisateur d’entrer un message qu’on affichera après.
<script>
const message = prompt("Entrez votre message :");

console.log("Vous avez saisi : " + message);
</script>
3- Demander à l’utilisateur d’entrer un enter qu’on multpliera par 5 après et l’afficher.
<script>
const input = prompt("Entrez un nombre :");

const number = parseFloat(input);

if (!isNaN(number)) {
  const result = number * 5;

  console.log("Le résultat de la multiplication est : " + result);
} else {
  console.log("Vous n'avez pas saisi un nombre valide.");
}
</script>
4- Tester si un enter saisi est pair ou impair.
<script>
const input = prompt("Entrez un nombre :");

const number = parseInt(input);

if (!isNaN(number)) {
  if (number % 2 === 0) {
    console.log("Le nombre saisi est pair.");
  } else {
    console.log("Le nombre saisi est impair.");
  }
} else {
  console.log("Vous n'avez pas saisi un nombre valide.");
}
</script>
5- Écrire un programme qui teste si l’enter saisi correspond à l’âge d’une personne majeure.
<script>
  const input = prompt("Entrez votre âge :");
  const age = parseInt(input);

  if (!isNaN(age) && age >= 18) {
    alert("Vous êtes une personne majeure.");
  } else {
    alert("Vous n'êtes pas encore majeur.");
  }
</script>
6- Calculer le plus grand nombre parmi trois nombres entiers.
<script>
  const input1 = prompt("Entrez le premier nombre :");
  const input2 = prompt("Entrez le deuxième nombre :");
  const input3 = prompt("Entrez le troisième nombre :");

  const number1 = parseInt(input1);
  const number2 = parseInt(input2);
  const number3 = parseInt(input3);

  if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
    let max = number1;

    if (number2 > max) {
      max = number2;
    }

    if (number3 > max) {
      max = number3;
    }

    console.log("Le plus grand nombre est : " + max);
  } else {
    console.log("Vous n'avez pas saisi des nombres valides.");
  }
</script>
7- Tester si trois nombres entier sont triés dans l’ordre croissant.
<script>
  const input1 = prompt("Entrez le premier nombre :");
  const input2 = prompt("Entrez le deuxième nombre :");
  const input3 = prompt("Entrez le troisième nombre :");

  const number1 = parseInt(input1);
  const number2 = parseInt(input2);
  const number3 = parseInt(input3);

  if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
    if (number1 < number2 && number2 < number3) {
      console.log("Les nombres sont triés dans l'ordre croissant.");
    } else {
      console.log("Les nombres ne sont pas triés dans l'ordre croissant.");
    }
  } else {
    console.log("Vous n'avez pas saisi des nombres valides.");
  }
</script>
8- Calculer le produit de deux nombres.
<script>
  const input1 = prompt("Entrez le premier nombre :");
  const input2 = prompt("Entrez le deuxième nombre :");

  const number1 = parseFloat(input1);
  const number2 = parseFloat(input2);

  if (!isNaN(number1) && !isNaN(number2)) {
    const product = number1 * number2;
    console.log("Le produit des deux nombres est : " + product);
  } else {
    console.log("Vous n'avez pas saisi des nombres valides.");
  }
</script>
9- Aﬀectez les variables temps et distance par les valeurs 6,892 et 19,7. Calculez et affichez la
valeur de la vitesse.
<script>
  const temps = 6.892;
  const distance = 19.7;
  const vitesse = distance / temps;
  console.log("La valeur de la vitesse est : " + vitesse);
</script>
10- Écrire une boucle afchant et incrémentant la valeur de a tant qu’elle reste inférieure à celle
de b.
<script>
  const a = 5;
  const b = 10;

  while (a < b) {
    console.log("La valeur de a est : " + a);
    a++;
  }
</script>
11- Saisir 10 enters et calculer la diﬀérence entre la somme des éléments paires et la somme des
éléments impaires.
Exemple : 1 2 3 4 5 6 => (2 + 4 + 6) - (1 + 3 + 5)
<script>
  const nombres = [];
  for (let i = 0; i < 10; i++) {
    const input = prompt("Entrez un nombre :");
    const nombre = parseInt(input);
    if (!isNaN(nombre)) {
      nombres.push(nombre);
    } else {
      console.log("Vous n'avez pas saisi un nombre valide. Veuillez réessayer.");
      i--;
    }
  }
  
  let sommePairs = 0;
  let sommeImpairs = 0;
  for (let nombre of nombres) {
    if (nombre % 2 === 0) {
      sommePairs += nombre;
    } else {
      sommeImpairs += nombre;
    }
  }

  const difference = sommePairs - sommeImpairs;
  console.log("Différence : " + difference);
</script>
12- Échanger les valeurs de deux nombres entier.
<script>
let nb1 = 5;
let nb2 = 10;

console.log("Avant :");
console.log("nb1 =", nb1);
console.log("nb2 =", nb2);

let temp = nb1;
nb1 = nb2;
nb2 = temp;

console.log("Après:");
console.log("nb1 =", nb1);
console.log("nb2 =", nb2);
</script>
13- Tester si un nombre saisi est un nombre premier
<script>
const input = prompt("Entrez un nombre :");

const number = parseInt(input);

if (!isNaN(number)) {
  if (premier(number)) {
    console.log(number + " est un nombre premier.");
  } else {
    console.log(number + " n'est pas un nombre premier.");
  }
} else {
  console.log("Vous n'avez pas saisi un nombre valide.");
}
// Fonction pour tester si un nombre est premier
function premier(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
</script>
14- Écrire un programme qui affichera les 100 premiers nombres premiers
</script>
for (let i = 2; i <= 100; i++) {
  let premier = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      premier = false;
      break;
    }
  }

  if (premier) {
    console.log(i);
  }
}
</script>
15- Faire une boucle pour afficher les letres d'un mot une par une.
<script>
const mot = "mot";

for (let i = 0; i < mot.length; i++) {
  console.log(mot[i]);
}
</script>
16- L’ordre lexicographique est celui du dictonnaire. Saisir deux mots, comparez-les pour trouver
le « plus petit » et afficher le résultat.
<script>
const mot1 = prompt("Entrez le premier mot :");
const mot2 = prompt("Entrez le deuxième mot :");

if (mot1 < mot2) {
  console.log("Le mot le plus petit d'après l'ordre lexicographique est : " + mot1);
} else if (mot2 < mot1) {
  console.log("Le mot le plus petit d'après l'ordre lexicographique est : " + mot2);
} else {
  console.log("Les deux mots sont identiques.");
}
</script>
17- Vérifer si un mot est un palindrome.
 <script>
      var mot = prompt("Entrer un mot:");
      
      var motTest = mot.toLowerCase();
      var motInverse = motTest.split("").reverse().join("");
      
      if (motTest === motInverse) {
        console.log("\"" + mot + "\" est un palindrome.");
      } else {
        console.log("\"" + mot + "\" n'est pas un palindrome.");
      }
  </script>
18- Vérifer si une chaine est un e-mail en regardant la présence de « @ » et de « . » puis de 3
caractères maximum après le « . »
<script>
function estEmail(chaine) {
  const regex =  /^[^@]+@[^@]+\.[^.]{1,3}$/;
  return regex.test(chaine);
}

const email = prompt("Entrez une adresse e-mail :");

if (estEmail(email)) {
  console.log("L'adresse e-mail est valide.");
} else {
  console.log("L'adresse e-mail n'est pas valide.");
}
</script>
19- Compter le nombre de mots dans une chaîne de caractères
<script>
const chaine = prompt("Entrez une chaîne de caractères :");

const mots = chaine.split(" ");
const nombreMots = mots.length;

console.log("Le nombre de mots dans la chaîne \"" +chaine+ "\" est : " + nombreMots);
</script>
20- Écrire une boucle qui affiche le résultat suivant :
****
****
****
****
<script>
for (let i = 0; i < 4; i++) {
  console.log("****");
}
</script>
21- Écrire une boucle qui affiche le résultat suivant :
*
***
*****
*******
<script>
for (let i = 1; i <= 7; i += 2) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}
</script>
22- Écrire une boucle qui affiche le résultat suivant :
     *
    ***
   *****
  *******
<script>
const vide = 4;

for (let i = 1; i <= vide; i++) {
  let espace = " ".repeat(vide - i);
  let etoiles = "*".repeat(2 * i - 1);
  console.log(espace + etoiles);
}
</script>
23- Écrire un programme qui saisit 6 enters et les stocke dans une liste, puis affiche le contenu de
ce tableau une fois qu’il est rempli.
24- Reprendre la parte saisie du programme précédent pour écrire un nouveau programme qui
recherche et affiche le plus grand élément du tableau.25- Soit la liste : liste = [12, 48, 50, 5, 33]. Eﬀectuer les actons suivantes :
- Trier la liste et afficher la liste
- Ajouter l’élément 15 et afficher la liste
- Renverser et afficher la liste
- afficher l’indice de l’élément 48
- Enlever l’élément 50 et afficher la liste
- Chercher la valeur minimale et l’afficher
- Chercher la valeur maximale et l’afficher
26- Soit le dictonnaire : dico = {"nom": "", "prenom": "", "age": 0}. Remplir le dictonnaire grâce
aux données entrées par l’utlisateur puis l’afficher sous forme de présentaton d’une personne.
Exemple : Je m’appelle Casandra Blanc et j’ai 20 ans.
27- Écrire un programme qui eﬀectue les actons suivantes :
- Initaliser une liste vide
- Demander à l’utlisateur d’entrer un fruit qu’il aime
- Demander jusqu’à ce qu’il soit satisfait
- afficher tous les fruits que l’utlisateur aime
28- Soit la liste de dictonnaire :
data = [
{
"alias": "utlisateur1",
"email": "utlisateur1@email.com",
"password": "mon mot de passe utlisateur 1"
},
{
"alias": "utlisateur2",
"email": "utlisateur2@email.com",
"password": "mon mot de passe utlisateur 2"
},
{
"alias": "utlisateur3",
"email": "utlisateur3@email.com",
"password": "mon mot de passe utlisateur 3"
}
]
Eﬀectuer les actions suivantes :
- Saisir l’adresse e-mail
- Saisir le mot de passe
- Si l’adresse e-mail et le mot de passe se correspondent, afficher « connecté »
Sinon afficher « erreur de connexion »
Tuyaux : ce type de données est en format JSON. Google a toujours été votre ami
29- Écrire un programme qui initalisera un nombre au hasard. Demander à l’utlisateur de deviner
le nombre en question, soyez explicite pour que l’utlisateur sache ce qu’il doit faire s’il se
trompe
30- Créer un programme original qui sera le fruit de votre imaginaton
 