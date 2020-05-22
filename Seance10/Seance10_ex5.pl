/* Questions */
/*
En vous appuyant sur le prédicat conc et une liste résultante
donnée, écrivez la question qui permet de déterminer le dernier
élément de la liste?
conc(L1,[_,X], [1, 2, 3, 4]).

De même, pour le premier élément de la liste
conc([X,_],L2, [1, 2, 3, 4]).

De même, pour le 2ème élément de la liste
conc([_,X],L2, [1, 2, 3, 4])

** Bonus por le 3ème élément: **
conc([_,_,X],L2,[1, 2, 3, 4, 5]).



*/


/* predicat */
conc([], L2,L2).
conc([X|Q], L2, [X|R3]):-conc(Q,L2,R3).