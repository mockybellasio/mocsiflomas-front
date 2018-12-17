import { Injectable } from '@angular/core';
import { Produit } from '../ModelFolder/Produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor() { }

  addPanier(qte:number ,pops: Produit): void {
    let panier: Map<Produit,number>;
    if (localStorage.getItem('panier') !== undefined) {
      panier = JSON.parse(localStorage.getItem('panier'));
    }
    panier.set(pops,qte);
    localStorage.setItem('testObject', JSON.stringify(panier));
  }
}
