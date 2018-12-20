import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Produit } from "../ModelFolder/Produit";
import { ProduitComponent } from "../produit/produit.component";

const URL_BACKEND = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private _http: HttpClient) { }

  //version Promise
  listerProduits(): Promise<Produit[]> {
    return this._http.get(URL_BACKEND + 'gestion-produit/liste-produits').toPromise()
      .then((tabProd: any[]) => tabProd.map(prod => new Produit(prod.nomSaga, prod.nomImage, prod.personnage, prod.nomFigurine, prod.taille, prod.prix, prod.description, prod.numeroFigurine)))
  }

  //chercher par nomFigurine
  chercherParNom(nomFigurine: string): Observable<Produit> {
    return this._http.get<Produit>(URL_BACKEND + `gestion-produit/${nomFigurine}`)
  }

  //base posée A MODIFIER
  modifierProduit(unProduit: Produit, produit: Produit): Promise<Produit> {
    return this._http.patch(`${URL_BACKEND}gestion-produit/modif-produit/${unProduit.nomFigurine}`,
      produit, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .toPromise().then((p: Produit) => p)
  }

  SupprimerProduit(nomFigurine: string): Observable<void> {
    return this._http.delete<void>(`${URL_BACKEND}gestion-produit/supprimer/${nomFigurine}`)
  }

}