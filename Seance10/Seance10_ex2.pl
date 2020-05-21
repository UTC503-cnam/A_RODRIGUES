/* règles */
/* D: départ , A: arrivée, X, étape */
chemin(D, A, []):- arc(D, A).
chemin(D, A, [X|Q]):- arc(D , X), chemin(X, A, Q).

/* réponses aux questions de l'exercice

Quels sont les chemins menant à ff?
chemin(D,ff,E).

Quels sont les chemins partant de aa?
chemin(aa,A,E).


Quels sont tous les chemins possibles ?
chemin(D,A,E).

Quels sont les chemins dont dd est exactement le 2 ème point intermédiaire ?
chemin(D,A,[bb|E]).

La solution proposée(, chemin(X, Y, [P, dd | Q]).) ne fonctionne pas car dd correspond à la 3ème étape essayé plusieurs fois

*/

/* faits */
arc(aa,bb).
arc(aa,cc).
arc(cc,dd).
arc(bb,dd).
arc(bb,ee).
arc(dd,ff).
arc(ee,ff).
