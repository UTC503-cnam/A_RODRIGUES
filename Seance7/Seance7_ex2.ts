let list = [1, 9, 2, 8, 5];
let nombrePair = n => n % 2 == 0;
let and = f1 => f2 => x => (f1(x) && f2(x));// Ecrivez la fonction 'and' sous sa forme curryfiée qui permet au code ci-dessous de fonctionner
let result = list.filter(and(nombrePair)(n => n > 4));
console.log(result); // [8]