var tab = [1, 5, 2, 4, 3];
//version lambda
console.log("version simple");
var double = tab.map(function (v) { return v * 2; });
var triple = tab.map(function (v) { return v * 3; });
var square = tab.map(function (v) { return Math.pow(v, 2); }); // version maths
var squareSimple = tab.map(function (v) { return v * v; }); // version simple 
var mapMaximize_3 = tab.map(function (v) { return (v > 3 ? 3 : v); });
console.log("double: " + double);
console.log("triple: " + triple);
console.log("square: " + square);
console.log("squareSimple: " + squareSimple);
console.log("mapMaximize_3: " + mapMaximize_3);
// version lambda + ordre supérieur pour triple
console.log("version avec odrdre supérieur");
var calculMap = function (nb) { return tab.map(function (v) { return v * nb; }); };
var maxiMap = function (m) { return tab.map(function (v) { return (v > m ? m : v); }); };
console.log(("double: " + calculMap(2)));
console.log(("triple: " + calculMap(3)));
console.log(("Maxi3: " + maxiMap(3)));
console.log(("Maxi2: " + maxiMap(2)));
