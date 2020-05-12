// Ecrivez en lambda la fonction de composition f o g 
// utilisation de l'encapsulation
let fog = f1 => f2 => x => f1(f2(x));

let square = x => x * x;
let double = x => x * 2;

console.log('f o g (10) = ' + fog(square)(double)(10));