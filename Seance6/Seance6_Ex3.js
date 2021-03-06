// exercice en suivant le cours
// attention ne pas indiquer de type au niveau des paramètres d'execution sinon cela entraine des preblème d'execution
function maximize(maxi) {
    return function (valeur) {
        return valeur > maxi ? maxi : valeur;
    };
}
var max3 = maximize(3);
var max4 = maximize(4);
console.log("en classique");
console.log(max3(5));
console.log(max3(2));
console.log(max4(6));
console.log(max4(3));
// exercice avec lambda + ordre supérieur
/* 1er essai qui ne marche pas
let defMax = m => m;
let maxi = v => v>defMax ? defMax : v;
console.log("en lambda: ")
let maxi3=defMax(3);
console.log(maxi(5));
console.log(maxi(2));
*/
// deuxième essai
console.log("en lambda: ");
var maximizeLambda = function (m) { return function (v) { return v > m ? m : v; }; };
// instanciation de faço, compacte, le 1er attribut correspond au maxi (m) le second à la valeur à comparer (v)
console.log("compact: ");
console.log(maximizeLambda(3)(5));
console.log(maximizeLambda(3)(2));
// instanciation de faço, compacte, le 1er attribut correspond au maxi (m) le second à la valeur à comparer (v)
console.log("en 2 temps");
var max_3 = maximizeLambda(3);
console.log(max_3(2));
console.log(max_3(5));
