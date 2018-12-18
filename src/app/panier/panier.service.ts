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
    if (retrievedObject !== null) {
      panier = new Map(JSON.parse(retrievedObject).map(i=>[i[0],i[1]]));
      console.log(panier.has(pops))

    }
    panier.set(pops,qte);
    let arrayPanier=Array.from((panier))
    localStorage.setItem('panier', JSON.stringify(arrayPanier));
    console.log(new Map(JSON.parse(retrievedObject).map(i=>[i[0],i[1]])));
  }

      // let a=new Produit("","","","",5,3,"",5)
    // panier.set(a,5)
   /* addPanier(qte: number, pops: Produit): void {

      let mapPanier: Map<Produit, number> = new Map();
      let panierArray
      let panier = localStorage.getItem('panier');
      if (panier !== null) {
        // panier = new Map(
        //   JSON.parse(retrievedObject)
        //   .map(i=>[i[0],i[1]]));
        panierArray = JSON.parse(panier)
        mapPanier.set(pops, qte);
        console.log(Array.from(mapPanier)[0])
        panierArray.forEach(element => {  
          //console.log(element[0])
          //console.log(element[0] === Array.from(mapPanier)[0]);
        });
        mapPanier =new Map(panierArray);
        mapPanier.set(pops, qte);
        let arrayPanier = Array.from((mapPanier))
        localStorage.setItem('panier', JSON.stringify(arrayPanier));
        //passer array en map pour ajouter nouvel element ou mettre a jour array
  
      }
  
  
      //let arrayPanier = Array.from((panierArray))
      //localStorage.setItem('panier', JSON.stringify(arrayPanier));
      //console.log(new Map(JSON.parse(retrievedObject).map(i=>[i[0],i[1]])));
    }*/
}
