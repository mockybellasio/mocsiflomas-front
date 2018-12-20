import { Injectable } from '@angular/core';
import { Produit } from '../ModelFolder/Produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor() { }

  addPanier(qte: number, pops: Produit): void {
    //variable pour verifier si l'on fait une maj du pagné
    let upadate: Boolean = false;
    //panier version map
    let mapPanier: Map<Produit, number> = new Map();
    //panier aprés la transformation en array
    let panierArray
    //etat actuel du panier
    let panier = localStorage.getItem('panier');
    //Si le panier contien un element
    if (panier !== null) {
      panierArray = JSON.parse(panier)
      /*mettre l'element sous form array pour le comparer au élément du panier*/
      mapPanier.set(pops, qte);
      let elementArray = Array.from(mapPanier);

      panierArray.forEach(element => {
        //si le panier contien dejat un élément du même nom alors met a jour élément 
        if (element[0].nomFigurine == elementArray[0][0].nomFigurine) {
          console.log(elementArray[0][1]);

          element[1] = elementArray[0][1];
          upadate = true
        }
      });
      //passer array en map pour ajouter nouvel element ou mettre a jour array
      mapPanier = new Map(panierArray);
      if (!upadate) {
        mapPanier.set(pops, qte);
      }

      let arrayPanier = Array.from((mapPanier))
      localStorage.setItem('panier', JSON.stringify(arrayPanier));
    } else {
      mapPanier.set(pops, qte);
      //console.log(pops,qte);
      let arrayPanier = Array.from((mapPanier))
      localStorage.setItem('panier', JSON.stringify(arrayPanier));
    }
  }

  readPanier(): Array<any> {
    let panier = localStorage.getItem('panier');
    if (panier !== null) {
      return JSON.parse(panier);
    } else {
      return null;
    }
  }

  remouvePanier(elem) {
    let panier = localStorage.getItem('panier');
    //Si le panier contien un element
    let panierArray = JSON.parse(panier)
    panierArray.forEach(element => {
      //si le panier contien dejat un élément du même nom alors met a jour élément 
      if (element[0].nomFigurine == elem.nomFigurine) {
        let mapPanier = new Map(panierArray);
        console.log(mapPanier)
        mapPanier.delete(element[0])
        console.log(mapPanier)
        let arrayPanier = Array.from((mapPanier))
        localStorage.setItem('panier', JSON.stringify(arrayPanier));
      }
    });
  }
}
