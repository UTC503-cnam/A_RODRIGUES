// interface permetant aux classes l'implementant d'utiliser la variable length
interface Mesurable {
    length: number
}

// implements Mesurable permet de forcer l'implementation de l'interface mesurable et de garantir son utilisation
class Trajet implements Mesurable{
    private nom: string;
    length: number;

    constructor( nom : string, length : number){
        this.nom=nom;
        this.length =length;
    }
    // methode mermettant de retourner les inroration d'un trajet
    toString(): string {
        return `Trajet ${this.nom} de ${this.length}Km`;
    }
}

// Penser a extends afin de pouvoir utiliser length de mesurable length
// length est également une variable permettant de connaitre le nombre de caractere d'un String (elle existe aussi pour les tableaux...)
// le fait d'avoir l'interface Mesurable implementee dans Trajet permet d'utiliser length indifféremment entre une chaine de caracteres et un trajet 
class MinMax<T extends Mesurable> {
    private max : T;
    private min : T;


    constructor(t: Array<T>){
        this.max=t[0];
        this.min=t[0];
        // appel de la methodes computeMinMax afin d'affecter les bonne valeurs a min et max
        this.computeMinMax(t);
    }

    private computeMinMax(t: Array<T>){
        // permet de parcourrir chaque case 'e' du tableau 't'
        for(let e of t){
            if(e.length<this.min.length) this.min=e;
            else if(e.length>this.max.length) this.max=e;
        }
    }
    // permet de retourner min
    getMin(): T {
       return this.min;
    }
    //permet de retourner max
    getMax(): T{
        return this.max;

    }
}

let trajets: Array<Trajet> = new Array(new Trajet("a", 271), new Trajet("b", 161), new Trajet("c", 314));
let trajetMinMax = new MinMax(trajets);
console.log(`Le plus grand trajet est : ${trajetMinMax.getMax()}`);
console.log(`Le plus petit trajet est : ${trajetMinMax.getMin()}`);

let chaines: Array <String>= new Array("chaineDe9", "chDe5", "grandeChaineDe16");
let chaineMinMax = new MinMax(chaines);
console.log(`La plus grande chaine est : ${chaineMinMax.getMax()}`);
console.log(`La plus petite chaine est : ${chaineMinMax.getMin()}`);
