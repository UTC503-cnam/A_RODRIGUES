// Ecrivez en lambda la fonction de composition f o g 
var fog = function (f1) { return function (f2) { return function (x) { return f1(f2(x)); }; }; };
var square = function (x) { return x * x; };
var double = function (x) { return x * 2; };
console.log('f o g (10) = ' + fog(square)(double)(10));
