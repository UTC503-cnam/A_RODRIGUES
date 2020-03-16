/*
 ============================================================================
 Name        : S2_Ex_3.c
 Author      : Tonio
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>
int factorielle(int n){
	int fact=1;
	while(n>0){
		fact=n*fact;
		n--;
	}
	return fact;
}

int main(void) {
	int n=5;
		printf("factoriel Ex3:=  %d", factorielle(n));

	return 0;
}
