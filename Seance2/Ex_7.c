/*
 ============================================================================
 Name        : MonPogC.c
 Author      : Tonio
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>


void mapDouble(int e[], int r[]){
// Aide : lire la ième case du tableau e : e[i]
// Aide : affecter la ième case du tableau r : r[i] = valeur;
// Aide : le tableau est accessible de 0 à N – 1, ie de e[0] à e[4] en l’occurrence
// Codez les 3 lignes ici


	for(int n=0; n<5; n++){
		r[n]=2*e[n];
	}
}
void mapCalc(int e[], int r[], int val){
	for(int n=0; n<5; n++){
		r[n]=val*e[n];
	}
}
void mapSquare(int e[], int r[]){
	for(int n=0; n<5; n++){
		r[n]=e[n]*e[n];
	}

}
void mapMaximize3(int e[], int r[]){
	for(int n=0; n<5; n++){
		if(e[n]<3){
			r[n]=e[n];
		}
		else{
			r[n]=3;
		}
	}

}
int main() {
int e[5] = {1, 5, 2, 4, 3};
int r_double[5];
mapCalc(e, r_double,2); // r_double contiendra {2, 10, 4, 8, 6}
for(int n=0; n<5; n++){
	printf("double[%d] = %d\n", n, r_double[n] );
}
printf("\n");

int r_triple[5];
mapCalc(e, r_triple, 3); // r_triple contiendra {3, 15, 6, 12, 9}
for(int n=0; n<5; n++){
	printf("triple[%d] = %d\n", n, r_triple[n] );
}
printf("\n");
int r_square[5];
mapSquare(e, r_square); // r_square contiendra {1, 25, 4, 16, 9}
for(int n=0; n<5; n++){
	printf("square[%d] = %d\n", n, r_square[n] );
}
printf("\n");
int r_maximize3[5];
mapMaximize3(e, r_maximize3); // r_maximize3 contiendra {1, 3, 2, 3, 3};
for(int n=0; n<5; n++){
	printf("maximize3[%d] = %d\n", n, r_maximize3[n] );
}

}
