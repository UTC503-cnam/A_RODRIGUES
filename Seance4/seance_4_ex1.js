// implements Mesurable permet de forcer l'implementation de l'interface mesurable et de garantir son utilisation
var Trajet = /** @class */ (function () {
    function Trajet(nom, length) {
        this.nom = nom;
        this.length = length;
    }
    // methode mermettant de retourner les inroration d'un trajet
    Trajet.prototype.toString = function () {
        return "Trajet " + this.nom + " de " + this.length + "Km";
    };
    return Trajet;
}());
// Penser a extends afin de pouvoir utiliser length de mesurable length
// length est également une variable permettant de connaitre le nombre de caractere d'un String (elle existe aussi pour les tableaux...)
// le fait d'avoir l'interface Mesurable implementee dans Trajet permet d'utiliser length indifféremment entre une chaine de caracteres et un trajet 
var MinMax = /** @class */ (function () {
    function MinMax(t) {
        this.max = t[0];
        this.min = t[0];
        // appel de la methodes computeMinMax afin d'affecter les bonne valeurs a min et max
        this.computeMinMax(t);
    }
    MinMax.prototype.computeMinMax = function (t) {
        // permet de parcourrir chaque case 'e' du tableau 't'
        for (var _i = 0, t_1 = t; _i < t_1.length; _i++) {
            var e = t_1[_i];
            if (e.length < this.min.length)
                this.min = e;
            else if (e.length > this.max.length)
                this.max = e;
        }
    };
    // permet de retourner min
    MinMax.prototype.getMin = function () {
        return this.min;
    };
    //permet de retourner max
    MinMax.prototype.getMax = function () {
        return this.max;
    };
    return MinMax;
}());
var trajets = new Array(new Trajet("a", 271), new Trajet("b", 161), new Trajet("c", 314));
var trajetMinMax = new MinMax(trajets);
console.log("Le plus grand trajet est : " + trajetMinMax.getMax());
console.log("Le plus petit trajet est : " + trajetMinMax.getMin());
var chaines = new Array("chaineDe9", "chDe5", "grandeChaineDe16");
var chaineMinMax = new MinMax(chaines);
console.log("La plus grande chaine est : " + chaineMinMax.getMax());
console.log("La plus petite chaine est : " + chaineMinMax.getMin());
