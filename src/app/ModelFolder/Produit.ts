export class Produit {
    nomSaga: string;
    nomImage: string;
    personnage: string;
    nomFigurine: string;
    taille: number;
    prix: number;
    description: string;
    numeroFigurine: number;

    constructor(nomSaga: string, nomImage: string, personnage: string, nomFigurine: string, taille: number, prix: number, description: string, numeroFigurine: number) {
        this.nomSaga = nomSaga;
        this.nomImage = nomImage;
        this.personnage = personnage;
        this.nomFigurine = nomFigurine;
        this.taille = taille;
        this.prix = prix;
        this.description = description;
        this.numeroFigurine = numeroFigurine;
    }

}