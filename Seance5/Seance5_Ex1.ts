interface Iterateur <T> {
    hasnext() : boolean;
    next() : T;
}

class Fibonacci implements Iterateur<number>{
    nb1: number;
    nb2: number;
    limite: number;
    compteur : number;

   constructor(limite: number){
    this.limite = limite;
    this.nb1=0;
    this.nb2=1;
    this.compteur=0;
    }  

    hasnext(){
        return this.compteur<this.limite;
    }

    next() : number{
        let resultat:number;
        if (this.compteur==0){
             resultat=0;
        }
        /*else if (this.compteur==1){
             resultat=1;
        }*/
        else {
            resultat= this.nb1+this.nb2;
            this.nb1=this.nb2;
            this.nb2=resultat;
        }
        this.compteur++;
        return resultat;
    }
    affichage(){
        while (this.hasnext()){
            console.log(`${this.next()} `);
        }
    }
   }

let suite10= new Fibonacci(10);
suite10.affichage();
   











