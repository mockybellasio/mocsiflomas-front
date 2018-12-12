export class Produit {
    nomDeLaSaga: string;
    nomDelaFigurine: string;
    image: string;
    personnage: string;
    taille: number;
    prix: number;
    description: string;
    numeroDelaFigurine: number;

    constructor(nomDeLasaga: string,nomDelaFigurine: string, image: string, personnage: string, taille: number, prix: number, description: string, numerodeLafigurine: number) {
        this.nomDeLaSaga = nomDeLasaga;
        this.nomDelaFigurine = nomDelaFigurine;
        this.image = image;
        this.personnage = personnage;
        this.taille = taille;
        this.prix = prix;
        this.description = description;
        this.numeroDelaFigurine = numerodeLafigurine;
    }
}