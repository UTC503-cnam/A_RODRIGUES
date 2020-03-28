abstract class Figure{
    // attributs
    protected nbCote : number;
    protected longueur : number;

   // constructeur
    constructor(longueur : number){
        this.nbCote=0;
        this.longueur=longueur;
    }
    // methode à surcharger pour obtenir des info en plus à afficher
    specificite(){}

    // methode d'affichage du rapport
    rapport(){
        const texte : string = "je suis un " + this.typeFigure() + " je possède " + this.nbCote + " cotes leur longueur est  " 
        + this.longueur + "mm, mon aire est " + this.calculeAire() + "mm² mon perimetre est " + this.calculePerimetre() ;
        if(this.typeFigure()=="losange")return texte + this.specificite()
        else return texte
    }

    // methode permettant de retrouver le type de figure (a faire evoluer au besoin)
    typeFigure(){
        if (this.nbCote==3) return "triangle"
        else if (this.nbCote==4) return "losange"
    }

    // methodes permettant de calculer le perimetre commune à toute les figures
    calculePerimetre(){
        return this.nbCote*this.longueur;
    }

    // methode abstraite à definir pour chaque figure dont on connait les longueur de coté
    abstract calculeAire() : number       
    
}

// class héritée de Figure
class Triangle extends Figure{
    nbCote=3;

    // définition de la methode abstraite
    calculeAire(){
        return (this.longueur*(this.longueur*Math.sqrt(3)/2))/2;
    }
}

// class héritée de Figure
class Losange extends Figure{
     diag1 : number;
     diag2 : number;
     nbCote=4;

    constructor(longueur : number, diag2 : number){     // je triche en utilisant longueur pour une des diagonales
        super(longueur);                                // constructeur de Figure
        this.diag1 = longueur;
        this.diag2 = diag2;
        this.longueur=Math.sqrt(Math.pow(this.diag1/2,2)+Math.pow(this.diag2/2,2));  // calcul de la longueur d'un coté
    }
    // définition de la methode abstraite
    calculeAire(){
        return this.diag1*(this.diag2)/2;
    }
    // surcharge de la methode specificite pour le fun
    specificite(){
        if(this.diag1==this.diag2)return " je suis aussi un carre"
        else return ""
    }
}

let t1 = new Triangle(5);
let t2 = new Triangle(10);
let l1 = new Losange(5, 6); // diagonale1, diagonale2
let l2 = new Losange(4, 4);
let figures:Figure[] = [t1, t2, l1, l2];
for(let f of figures){
    console.log(f.rapport());
}