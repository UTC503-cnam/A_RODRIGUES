// methode via reduce (ex 6 vu après)
var numbers = [100, 34, 5, 67, 72];
// test avec reduce pour comprendre le principe
var minimum = numbers.reduce(function (mini, currentValue) { return (currentValue < mini ? mini = currentValue : mini); }, (numbers[0]));
var maximum = numbers.reduce(function (maxi, currentValue) { return (currentValue > maxi ? maxi = currentValue : maxi); }, (numbers[0]));
console.log("Min is " + minimum + ", max is " + maximum);
// methode reccurcive je n'aurais pas pu faire mieux
var numbers2 = [100, 34, 5, 67, 72];
var calcul_min = function (tableau) { return function (ind) {
    if (tableau.length == 0) { // si le tableau est vide retourne null
        return null;
    }
    else if (tableau.length == 1) { // si le tableau n'a qu'une case retourner la valeur de cette case 
        return tableau[0];
    }
    else if (ind == tableau.length - 1) { // quand on est rendu à la dernière case 
        return tableau[ind];
    }
    else { // 
        return Math.min(tableau[ind], calcul_min(tableau)(ind + 1));
    }
}; };
var calcul_max = function (tableau) { return function (ind) {
    if (tableau.length == 0) { // si le tableau est vide retourne null
        return null;
    }
    else if (tableau.length == 1) { // si le tableau n'a qu'une case retourner la valeur de cette case 
        return tableau[0];
    }
    else if (ind == tableau.length - 1) { // quand on est rendu à la dernière case 
        return tableau[ind];
    }
    else { // 
        return Math.max(tableau[ind], calcul_max(tableau)(ind + 1));
    }
}; };
var minimum2 = calcul_min(numbers2);
var maximum2 = calcul_max(numbers2);
console.log("Min2 is " + minimum2 + ", Max2 is " + maximum2);
// correction:
/*let*/ numbers = [100, 34, 5, 67, 72]; // mis en commentaire de let afin de pouvoir utiliser le code
Array.prototype.min = function () {
    // Notre fonction récursive est compute_min.
    // J'ai choisi d'utiliser un index pour parcourir récursivement le tableau :
    // min = Math.min(arr[i], compute_min(arr)(i + 1)
    var compute_min = function (arr) { return function (i) { return arr.length == 0 ? null : arr.length == 1 ? arr[0] : i == arr.length - 1 ? arr[i] : Math.min(arr[i], compute_min(arr)(i + 1)); }; };
    return compute_min(this)(0);
    // On aurait pu choisir d'utiliser slice, plus élégant mais plus couteux, car effectue N copie du tableau :
    // min = Math.min(arr[i], arr.slice(1).min())
};
Array.prototype.max = function () {
    var compute_max = function (arr) { return function (i) { return arr.length == 0 ? null : arr.length == 1 ? arr[0] : i == arr.length - 1 ? arr[i] : Math.max(arr[i], compute_max(arr)(i + 1)); }; };
    return compute_max(this)(0);
};
var minimum3 = numbers.min();
var maximum3 = numbers.max();
console.log("Min is " + minimum3 + ", max is " + maximum3);
