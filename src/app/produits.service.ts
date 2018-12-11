import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Produits } from '../app/model';
 //import { environment } from '../environment/environment';

//const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'

})
export class ProduitsService {


    
  constructor( private _http : HttpClient) { }

}
      
 /*   
 listerProduits(): Observable <Produits[]> {

 return this._http.get(URL_BACKEND + '/produits')

 .then((tabColServeur : any []) => tabColServeur.map(cServeur => new Produits (cServeur.nomDeLasaga,cServeur.image,cServeur.personnage,cServeur.taille, cServeur.prix, cServeur.description,cServeur.numerodeLafigurine )));
 

}
*/



// ProduitsParPersonnage ( personnage : string) : Observable<Produits> {


// return this._http<Produits> (`${URL_BACKEND}/produits/${personnage}`)

// }


