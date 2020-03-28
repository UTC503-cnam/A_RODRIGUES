var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figure = /** @class */ (function () {
    // constructeur
    function Figure(longueur) {
        this.nbCote = 0;
        this.longueur = longueur;
    }
    // methode à surcharger pour obtenir des info en plus à afficher
    Figure.prototype.specificite = function () { };
    // methode d'affichage du rapport
    Figure.prototype.rapport = function () {
        var texte = "je suis un " + this.typeFigure() + " je possède " + this.nbCote + " cotes leur longueur est  "
            + this.longueur + "mm, mon aire est " + this.calculeAire() + "mm² mon perimetre est " + this.calculePerimetre();
        if (this.typeFigure() == "losange")
            return texte + this.specificite();
        else
            return texte;
    };
    // methode permettant de retrouver le type de figure (a faire evoluer au besoin)
    Figure.prototype.typeFigure = function () {
        if (this.nbCote == 3)
            return "triangle";
        else if (this.nbCote == 4)
            return "losange";
    };
    // methodes permettant de calculer le perimetre commune à toute les figures
    Figure.prototype.calculePerimetre = function () {
        return this.nbCote * this.longueur;
    };
    return Figure;
}());
// class héritée de Figure
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nbCote = 3;
        return _this;
    }
    // définition de la methode abstraite
    Triangle.prototype.calculeAire = function () {
        return (this.longueur * (this.longueur * Math.sqrt(3) / 2)) / 2;
    };
    return Triangle;
}(Figure));
// class héritée de Figure
var Losange = /** @class */ (function (_super) {
    __extends(Losange, _super);
    function Losange(longueur, diag2) {
        var _this = _super.call(this, longueur) || this;
        _this.nbCote = 4;
        _this.diag1 = longueur;
        _this.diag2 = diag2;
        _this.longueur = Math.sqrt(Math.pow(_this.diag1 / 2, 2) + Math.pow(_this.diag2 / 2, 2)); // calcul de la longueur d'un coté
        return _this;
    }
    // définition de la methode abstraite
    Losange.prototype.calculeAire = function () {
        return this.diag1 * (this.diag2) / 2;
    };
    // surcharge de la methode specificite pour le fun
    Losange.prototype.specificite = function () {
        if (this.diag1 == this.diag2)
            return " je suis aussi un carre";
        else
            return "";
    };
    return Losange;
}(Figure));
var t1 = new Triangle(5);
var t2 = new Triangle(10);
var l1 = new Losange(5, 6); // diagonale1, diagonale2
var l2 = new Losange(4, 4);
var figures = [t1, t2, l1, l2];
for (var _i = 0, figures_1 = figures; _i < figures_1.length; _i++) {
    var f = figures_1[_i];
    console.log(f.rapport());
}
