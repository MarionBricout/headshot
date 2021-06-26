# BUT: créer un petit jeu pour améliorer la précision de son clic.

Au démarrage le jeu fait apparaitre un cercle, il faut cliquer dessus le plus rapidement possible.

Quand on clique sur le cercle, il disparait et un nouveau cercle, légèrement plus petit apparait à une position aléatoire et ainsi de suite...
Au bout d'un temps donné, la partie s'arrête et donne le score de l'utilisateur.

## Consignes :
1. créer un doc html avec un div#app qui occupe 100% du viewport
2. créer une fonction qui peut faire apparaitre un div circulaire de taille donnée, à une position aléatoire de #app
3. créer un gestionnaire d'événement qui écoute le clic sur #app. le gestionnaire testera si on a cliqué sur #app lui-même ou sur un enfant de #app.
   si c'est un enfant, on le supprime et on en génère un nouveau, plus petit
4. créer une fonction qui arrête le jeu au bout d'un temps donné, et affiche le score  

> BONUS :
> afficher le temps restant