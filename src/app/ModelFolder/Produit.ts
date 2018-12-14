export class Produit {
    nomSaga: string;
    nomFigurine: string;
    nomImage: string;
    personnage: string;
    taille: number;
    prix: number;
    description: string;
    numeroFigurine: number;

    constructor(nomSaga: string, nomImage: string, personnage: string, nomFigurine: string, taille: number, prix: number, description: string, numeroFigurine: number) {
        this.nomSaga = nomSaga;
        this.nomFigurine = nomFigurine;
        this.nomImage = nomImage;
        this.personnage = personnage;
        this.taille = taille;
        this.prix = prix;
        this.description = description;
        this.numeroFigurine = numeroFigurine;
    }

}