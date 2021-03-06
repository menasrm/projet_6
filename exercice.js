
// //--------------------------------------------------------------------------------
// //---------------------------------- CODE PEN 1 ----------------------------------
// //--------------------------------------------------------------------------------

class Chien{
    constructor(nom, race, taille){
        this.nom = nom;
        this.race = race;
        this.taille = taille;
        this.decrire();
        this.aboyer();
    }
    // Décrire le chien
    decrire(){
      console.log(`${this.nom} est un ${this.race} mesurant ${this.taille} cm `); 
    }
  	// Aboyer le chien
    aboyer(){
    	if (this.taille > 50 ) {
    		console.log("Grrr ! Grrr !");
    	}
    	else{
    		console.log("Wouaf ! Wouaf");
    	}
    }
}

const crockdur = new Chien("Crockdur", "mâtin de Naples", 75);
const milou = new Chien("Milou", "fox-terrier", 26);





// //--------------------------------------------------------------------------------
// //---------------------------------- CODE PEN 2 ----------------------------------
// //--------------------------------------------------------------------------------

class Personnage2{
	constructor(nom, sante, force){
		this.nom = nom;
		this.sante = sante;
		this.force = force;
		this.xp = 0;
		this.pieces = 5;
		this.cle = 5;
	}

	decrire(){
		return`${this.nom} a ${this.sante} points de vie, ${this.force} en force et ${this.xp} points d'expérience, ${this.pieces} pièces d'or et ${this.cle} clé `;
	}

	attaquer(cible){
		if (cible.sante >= 0) {
			this.pieces += cible.pieces;
			this.cle += cible.cle;
			this.xp += 10;
			const degats = this.force;
			cible.sante -= degats;
        }
        else{
        	cible.sante = 0;
        	return"le monstre est tué";
        }
	}
}

// "Aurora a 150 points de vie, 25 en force et 0 points d'expérience, 10 pièces d'or et 1 clé(s)"
const aurora = new Personnage2("Aurora", 150, 25);

console.log(aurora.decrire());

const monstre = new Personnage2("ZogZog", 20, 10);
monstre.attaquer(aurora);
aurora.attaquer(monstre); // Le monstre est tué

// "Aurora a 140 points de vie, 25 en force et 10 points d'expérience, 20 pièces d'or et 2 clé(s)"
console.log(aurora.decrire());


// //--------------------------------------------------------------------------------
// //---------------------------------- CODE PEN 3 ----------------------------------
// //--------------------------------------------------------------------------------


class Bancaire{
	constructor(titulaire, solde){
		this.titulaire = titulaire;
		this.solde = solde;
	}

	crediter(montant){
		this.solde += 1000;
		return`${this.solde}`;
	}

	decrire(){
		return`${this.titulaire} gagne 1000€`;
	}


}

const Alex = new Bancaire("Alex", 500);
const Clovis = new Bancaire("Clovis", 800);
const Marco = new Bancaire("Marco", 300);

let arr = new Array(Alex, Clovis, Marco);
 for (let i = 0; i < arr.length; i++) {
 	arr[i];
 }

console.log(arr[0]);
console.log(arr[0].crediter());
console.log(arr[0].decrire());

// //--------------------------------------------------------------------------------
// //---------------------------------- CODE PEN 3 ----------------------------------
// //--------------------------------------------------------------------------------