/* Qu’observez vous pour le but membre(5, [1, 2, 5, 4, 3]) ? 
L'execution de la question continue même après avoir trouvé 5 dans la liste, la liste est entièrement parcourue.

Considérant l’hypothèse qu’un élément n’est présent qu’une fois dans la liste, est ce optimisé ?
Non l'execution pourrais être stoppée à partir du moment où l'élément est trouvé, 
pour cela on peut utiliser un coupe choix.

Modifiez le prédicat pour que la recherche soit optimale. */

/* predicat optimisé */
membreOpt(X,[X|_]):-write("trouvé"),nl,!.
membreOpt(X,[_|Q]):-write("continue"),nl,membreOpt(X,Q).


 
/* predicat de la consigne*/
membre(X,[X|_]):-write("trouvé"),nl.
membre(X,[_|Q]):-write("continue"),nl,membre(X,Q).