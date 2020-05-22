/* question 
Essayez la question gen (X,10).
X = 0
X = 1
X = 2
X = 3
X = 4
X = 5
X = 6
X = 7
X = 8
X = 9
X = 10


A l’aide de ce prédicat, écrivez la règle du prédicat */

combi_mult(X, A, B ):-between_(1,X,A),between_(1,X,B),X is A * B.


/* predicat enoncé */
gen(X,M):- between_(0, M, X).
/* between _(I,J,K) is true if K is an integer between I and J inclusive.*/
between_(I,J,I):-I =< J.
between_(I,J,K):- I < J, I1 is I+1, between_(I1,J,K).
