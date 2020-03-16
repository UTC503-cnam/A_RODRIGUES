/*
 ============================================================================
 Name        : S2_Ex_1.c
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

	calc :
		fact=n*fact;
		n--;
	if(n>0){
		goto calc;
	}
	else{
		printf("factoriel ex1:=  %d", fact);
	}
	return 0;
}
