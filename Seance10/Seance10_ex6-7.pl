/* Question */
/* Sachant cela, écrivez les règles du prédicat «
long(L, R) » qui est vrai si R
est égal au nombre d’éléments de la liste L.
etape 1 commencer par déterminer comment vérifier si il y a des éléments dans une liste
long([], 0).
long([X|Q],R):- long(Q, R).

gestion du cas particulier long([],0) afin d'obtenir true en cas de liste vide

etape 2, gestion d'un compeur, dans in autre lange j'aurais initialisé un compteur que j'aurais incrémenté 
à chaque élément renconté dans la liste
n(0).
long([], 0).
long([X|Q],R):- long(Q, R),n+1.

test erreur au niveau de n+1, remplacement n+1 par n is n+1 erreur n n'est pas une fonction
après de nomreux essais non détaillés ici, j'ai fini par trouvé qu'il faut initialiserle compteur 
au niveaul'appel réccursif de long: long(Q,N), dernière subtilité R est ensuite comparé avec N+1 et non N
(correspondant au denier élément trouvé dans la liste.
*/



/* predicat */
long([],0).
long([_|Q],R):- long(Q, N),R is N+1.


