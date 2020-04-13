var Fibonacci = /** @class */ (function () {
    function Fibonacci(limite) {
        this.limite = limite;
        this.nb1 = 0;
        this.nb2 = 1;
        this.compteur = 0;
    }
    Fibonacci.prototype.hasnext = function () {
        return this.compteur < this.limite;
    };
    Fibonacci.prototype.next = function () {
        var resultat;
        if (this.compteur == 0) {
            resultat = 0;
        }
        /*else if (this.compteur==1){
             resultat=1;
        }*/
        else {
            resultat = this.nb1 + this.nb2;
            this.nb1 = this.nb2;
            this.nb2 = resultat;
        }
        this.compteur++;
        return resultat;
    };
    Fibonacci.prototype.affichage = function () {
        while (this.hasnext()) {
            console.log(this.next() + " ");
        }
    };
    return Fibonacci;
}());
var suite10 = new Fibonacci(10);
suite10.affichage();
