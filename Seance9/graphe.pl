chemin(X,Y):-rejoint(X,Y).
chemin(X,Y):-rejoint(X,Z),chemin(Z,Y).



/* faits correspondant à X rejoint T */
rejoint(1,2).
rejoint(1,3).
rejoint(2,4).
rejoint(2,5).
rejoint(3,5).
rejoint(4,5).
rejoint(4,6).
rejoint(5,6).