import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Produit } from "../ModelFolder/Produit";
import { ActivatedRoute, Router } from '@angular/router';

const URL_BACKEND = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private _http: HttpClient) { }

  //version Promise
  listerProduits(): Promise<Produit[]> {
    return this._http.get(URL_BACKEND + 'produits/liste-produits').toPromise()
      .then((tabProd: any[]) => tabProd.map(prod => new Produit(prod.nomSaga, prod.nomImage, prod.personnage, prod.nomFigurine, prod.taille, prod.prix, prod.description, prod.numeroFigurine)))
  }

  //chercher par nomFigurine
  chercherParNom(nomFigurine: String): Observable<Produit> {
    return this._http.get<Produit>(URL_BACKEND + `produit/${nomFigurine}`)
  }

  //base posée A MODIFIER
  modifierProduit(unProduit: Produit, produit: Produit): Promise<Produit> {

    return this._http.patch(`${URL_BACKEND}gestion-produits/modifier-produit/${unProduit.nomFigurine}`,

      produit, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      
      .toPromise().then((p: Produit) => p)
  }

  // supprimer produit 

 SupprimerProduit(nomFigurine : string ): Observable<void> {

    //console.log(`${URL_BACKEND}supprimer/${nomFigurine}`);

    //this._http.delete(`${URL_BACKEND}supprimer/${nomFigurine}`) //.subscribe(() => this.router.navigate(['/RonPop']));
    
const URL_BACKEND = environment.baseUrl + `produits/${nomFigurine} `;

return this._http.delete<void>( URL_BACKEND);



  }

ActiverDesactiver(nomFigurine : string ){

  return this._http.get(status)
}

}