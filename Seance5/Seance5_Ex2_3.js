// Observateur concret
var ObservateurFibonacci = /** @class */ (function () {
    function ObservateurFibonacci(nom) {
        this.nom = nom;
        this.valeur = null;
    }
    ObservateurFibonacci.prototype.actualiser = function (identifiant, valeur) {
        this.valeur = valeur;
        console.log("Observateur: " + this.nom + " le factoriel de " + this.valeur + " vient d'\u00EAtre calcul\u00E9");
    };
    return ObservateurFibonacci;
}());
var Fibonacci = /** @class */ (function () {
    function Fibonacci(limite) {
        this.limite = limite;
        this.nb1 = 0;
        this.nb2 = 1;
        this.compteur = 0;
        this.tabObservateurs = new Array;
    }
    Fibonacci.getInstance = function (limite) {
        if (this.singleton)
            console.log("une instance existe d\u00E9j\u00E0");
        else
            console.log("création d'une nouvelle instance");
        return this.singleton || (this.singleton = new this(limite));
    };
    Fibonacci.prototype.hasnext = function () {
        return this.compteur < this.limite;
    };
    Fibonacci.prototype.next = function () {
        var resultat;
        if (this.compteur == 0) {
            resultat = 0;
        }
        else {
            resultat = this.nb1 + this.nb2;
            this.nb1 = this.nb2;
            this.nb2 = resultat;
        }
        this.compteur++;
        return resultat;
    };
    // méthode pour inscrire un nouvel observateur, je n'ai pas trouver comment utiliser une ArrayList comme en Java pour utiliser add au lieu de push
    Fibonacci.prototype.ajouterObservateur = function (O) {
        console.log("inscription d'un observateur, le nombre d'observateur est " + this.tabObservateurs.push(O));
    };
    // méthode pour supprimer un observateur, je n'ai pas trouver comment utiliser une ArrayList comme en Java pour utiliser remove au lieu de pop
    Fibonacci.prototype.supprimerObservateur = function () {
        console.log("suppression de l'observateur " + this.tabObservateurs.pop().nom);
    };
    // méthode pour notifier un observateur inscrit
    Fibonacci.prototype.notifierObservateur = function () {
        var _this = this;
        this.tabObservateurs.forEach(function (element) {
            console.log(element.actualiser(element.nom, _this.limite));
        });
    };
    // methode mise à jour afin d'intéger la notification
    Fibonacci.prototype.affichage = function () {
        while (this.hasnext()) {
            console.log(this.next() + " ");
        }
        if (!this.hasnext())
            this.notifierObservateur();
    };
    return Fibonacci;
}());
// instanciation de 2 Observateurs
var toto = new ObservateurFibonacci("toto");
var titi = new ObservateurFibonacci("titi");
// instanciation d'un objet suite pour calculer la suite Fibonacci pour 10'
var suite10 = Fibonacci.getInstance(10);
// inscription des deux observateurs pour obtenir les notification de changement d'état
suite10.ajouterObservateur(toto);
suite10.ajouterObservateur(titi);
// Affichage de la suite
suite10.affichage();
// desincription d'un obsrvateur
suite10.supprimerObservateur();
// Affichage de la suite
suite10.affichage();
// test d'instanciation d'une nouvelle suite
console.log("tentative d'instanciation de suite 5");
var suite5 = Fibonacci.getInstance(5);
// Affichage de la suite
suite5.affichage();
