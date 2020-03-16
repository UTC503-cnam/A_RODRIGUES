/*
 ============================================================================
 Name        : S2_Ex_4.c
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
	if(n>0){
		fact=n*factorielle(n-1);
	}
	return fact;
}

int main(void) {
	int n=5;
		printf("factoriel Ex4:=  %d", factorielle(n));

	return 0;
}
