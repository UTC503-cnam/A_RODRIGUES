/* Que donne la question membre(5, L). ?  
la question ne peut pas retourner de réponses car il peut y avoir un nombre infini de liste contenant 5.


*/
/* clauses modifiées  car problème de singleton*/
membre(X,[X|_]).
membre(X, [_|Q]) :- membre(X, Q).