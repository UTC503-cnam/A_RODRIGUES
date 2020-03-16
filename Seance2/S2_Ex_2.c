/*
 ============================================================================
 Name        : S2_Ex_2.c
 Author      : Tonio
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>
int main(void) {
	int fact=1;
	int n=5;
	while(n>0){
		fact=n*fact;
		n--;
	}
	printf("factoriel ex2:=  %d", fact);

	return 0;
}
