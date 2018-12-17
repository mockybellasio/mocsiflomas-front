import { Injectable } from '@angular/core';
import { Produit } from '../ModelFolder/Produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor() { }

  addPanier(qte:number ,pops: Produit): void {
    let panier: Map<Produit,number>=new Map();
    let retrievedObject = localStorage.getItem('panier');
    if (retrievedObject !== undefined) {
      panier = new Map(JSON.parse(retrievedObject).map(i=>[i[0],i[1]]));
      console.log(panier.has(pops))

    }
    panier.set(pops,qte);
    let arrayPanier=Array.from((panier))
    localStorage.setItem('panier', JSON.stringify(arrayPanier));
    console.log(new Map(JSON.parse(retrievedObject).map(i=>[i[0],i[1]])));
  }
}
