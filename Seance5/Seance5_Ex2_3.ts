// interface pour iterateur
interface Iterateur <T> {
    hasnext() : boolean;
    next() : T;
}

// interface pour Observateur
interface Observateur{
    actualiser(identifiant : string , valeur : number);
}
// interface pour Observable
/* Je n'ai pas réussi à trouver d'équivalent au ArrayList en Java afin de stocker mes observateurs
/  J'ai pris parti de conservé le principe du pattern en remplacant l'ArrayList par une Array moin realiste mais
/  fonctionne quand même
*/

interface Observable{
    ajouterObservateur(O : ObservateurFibonacci);
    supprimerObservateur()                       //supprimerObservateur(O : ObservateurFibonacci); serait plus indiqué si ArrayList
    notifierObservateur();                       // notifierObservateur(O : ObservateurFibonacci); cette methode est possible pour arralist ou tableau
}


// Observateur concret
class ObservateurFibonacci implements Observateur{
    nom:string;
    valeur: number;
    constructor(nom : string ){
        this.nom=nom;
        this.valeur=null;
    }
    actualiser(identifiant : string , valeur : number){
        this.valeur=valeur;
        console.log(`Observateur: ${this.nom} le factoriel de ${this.valeur} vient d'être calculé`)
    }
}

class Fibonacci implements Iterateur<number>, Observable{
    nb1: number;
    nb2: number;
    limite: number;
    compteur : number;
    tabObservateurs : Array<ObservateurFibonacci>;
    
    private static singleton : Fibonacci;

    public static getInstance(limite : number){
        if (this.singleton) console.log(`une instance existe déjà`);
        else console.log("création d'une nouvelle instance");

        return this.singleton || (this.singleton = new this(limite))
   }


   private constructor(limite: number){
    this.limite = limite;
    this.nb1=0;
    this.nb2=1;
    this.compteur=0;
    this.tabObservateurs = new  Array ;
    }  

    hasnext(){
        return this.compteur<this.limite;
    }

    next() : number{
        let resultat:number;
        if (this.compteur==0){
             resultat=0;
        }
        else {
            resultat= this.nb1+this.nb2;
            this.nb1=this.nb2;
            this.nb2=resultat;
        }
        this.compteur++;
        return resultat;
    }
    // méthode pour inscrire un nouvel observateur, je n'ai pas trouver comment utiliser une ArrayList comme en Java pour utiliser add au lieu de push
    ajouterObservateur(O : ObservateurFibonacci){
        console.log(`inscription d'un observateur, le nombre d'observateur est ${this.tabObservateurs.push(O)}`);
    }
    // méthode pour supprimer un observateur, je n'ai pas trouver comment utiliser une ArrayList comme en Java pour utiliser remove au lieu de pop
    supprimerObservateur(){
        console.log(`suppression de l'observateur ${this.tabObservateurs.pop().nom}`);

    }
    // méthode pour notifier un observateur inscrit
    notifierObservateur(){
        this.tabObservateurs.forEach(element => {
            console.log(element.actualiser(element.nom, this.limite))
        });

    }

    // methode mise à jour afin d'intéger la notification
    affichage(){
        while (this.hasnext()){
            console.log(`${this.next()} `);
        }
        if(!this.hasnext())this.notifierObservateur();
    }

   }

// instanciation de 2 Observateurs
let toto=new ObservateurFibonacci("toto");
let titi=new ObservateurFibonacci("titi");
// instanciation d'un objet suite pour calculer la suite Fibonacci pour 10'
let suite10= Fibonacci.getInstance(10);
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
console.log("tentative d'instanciation de suite 5")
let suite5= Fibonacci.getInstance(5);
// Affichage de la suite
suite5.affichage();  











