/* fonctions à modifier:
function maximize_3 (v)
    if (v > 3)
        return 3
    else
        return v
}

function maximize_4 (v)
    if (v > 4)
        return 4
    else return v
}
*/
// Fonction sous forme de fonction lambda
// fonction maximize 3
var maximize_3 = function (v) { return v > 3 ? 3 : v; }; // je n'avais pas mis la condition en forme condensée
var maximize_4 = function (v) { return v > 4 ? 4 : v; }; // y penser pour les fonctions Lambda
console.log(maximize_3(4));
console.log(maximize_3(1));
console.log(maximize_3(3));
console.log(maximize_4(4));
console.log(maximize_4(5));
console.log(maximize_4(1));
