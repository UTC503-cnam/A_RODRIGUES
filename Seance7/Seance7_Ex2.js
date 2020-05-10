var list = [1, 9, 2, 8, 5];
var nombrePair = function (n) { return n % 2 == 0; };
var and = function (f1) { return function (f2) { return function (x) { return (f1(x) && f2(x)); }; }; }; // Ecrivez la fonction 'and' sous sa forme curryfiée qui permet au code ci-dessous de fonctionner
var result = list.filter(and(nombrePair)(function (n) { return n > 4; }));
console.log(result); // [8]
