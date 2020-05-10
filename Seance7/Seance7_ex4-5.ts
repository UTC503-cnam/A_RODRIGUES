// methode via reduce (ex 6 vu après)

let numbers = [100, 34, 5, 67, 72];
// test avec reduce pour comprendre le principe
let minimum=numbers.reduce((mini, currentValue) => (currentValue<mini? mini=currentValue : mini),(numbers[0]));
let maximum = numbers.reduce((maxi, currentValue) => (currentValue>maxi? maxi=currentValue : maxi),(numbers[0]));
console.log(`Min is ${minimum}, max is ${maximum}`);


// methode reccurcive je n'aurais pas pu faire mieux
let numbers2 = [100, 34, 5, 67, 72];

     let calcul_min = (tableau : Array<number>) => ind =>
        {
           if(tableau.length == 0){  // si le tableau est vide retourne null
                return null;
            }
            else if (tableau.length==1){ // si le tableau n'a qu'une case retourner la valeur de cette case 
                return tableau[0];
            }
            else if(ind==tableau.length-1){ // quand on est rendu à la dernière case 
                return tableau[ind];
            }
            else{ // 
                return Math.min(tableau[ind], 
                    calcul_min(tableau)(ind + 1));
            }

        }
        let calcul_max = (tableau : Array<number>) => ind =>
        {
           if(tableau.length == 0){  // si le tableau est vide retourne null
                return null;
            }
            else if (tableau.length==1){ // si le tableau n'a qu'une case retourner la valeur de cette case 
                return tableau[0];
            }
            else if(ind==tableau.length-1){ // quand on est rendu à la dernière case 
                return tableau[ind];
            }
            else{ // 
                return Math.max(tableau[ind], 
                    calcul_max(tableau)(ind + 1));
            }

        }


let minimum2 = calcul_min(numbers2);
let maximum2 = calcul_max(numbers2);

console.log(`Min2 is ${minimum2}, Max2 is ${maximum2}`);

// correction:

/*let*/ numbers = [100, 34, 5, 67, 72];  // mis en commentaire de let afin de pouvoir utiliser le code

// Cette interface, couplée aux définitions des prototypes
// ci-dessous permettent d'ajouter les méthodes min et max
// à un tableau.
interface Array<T> {
    min(): T;
    max(): T;
}

Array.prototype.min = function<T>(){
    // Notre fonction récursive est compute_min.
    // J'ai choisi d'utiliser un index pour parcourir récursivement le tableau :
    // min = Math.min(arr[i], compute_min(arr)(i + 1)
    let compute_min = arr => i => arr.length == 0?null:arr.length==1?arr[0]:i==arr.length - 1?arr[i]:Math.min(arr[i], compute_min(arr)(i + 1));
    return compute_min(this)(0);
    // On aurait pu choisir d'utiliser slice, plus élégant mais plus couteux, car effectue N copie du tableau :
    // min = Math.min(arr[i], arr.slice(1).min())
}

Array.prototype.max = function<T>(){
    let compute_max = arr => i => arr.length == 0?null:arr.length==1?arr[0]:i==arr.length - 1?arr[i]:Math.max(arr[i], compute_max(arr)(i + 1));
    return compute_max(this)(0);
}


let minimum3 = numbers.min();
let maximum3 = numbers.max();

console.log(`Min is ${minimum3}, max is ${maximum3}`);

