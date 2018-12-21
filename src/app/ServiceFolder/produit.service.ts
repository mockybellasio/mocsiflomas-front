import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Produit } from "../ModelFolder/Produit";

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

  //chercher par nomSaga
  listerParSaga(nomSaga: string): Observable<Produit> {
    return this._http.get<Produit>(URL_BACKEND + `gestion-produit/${nomSaga}`)
  }

  //chercher par nomFigurine
  chercherParNom(nomFigurine: string): Observable<Produit> {
    return this._http.get<Produit>(URL_BACKEND + `gestion-produit/${nomFigurine}`)
  }

  //modifier un produit
  modifierProduit(unProduit: Produit, produit: Produit): Promise<Produit> {
    return this._http.patch(`${URL_BACKEND}gestion-produit/modif-produit/${unProduit.nomFigurine}`,
      produit, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })

      .toPromise().then((p: Produit) => p)
  }

  //supprimer un produit
  SupprimerProduit(nomFigurine: string): Observable<void> {
    return this._http.delete<void>(`${URL_BACKEND}gestion-produit/supprimer/${nomFigurine}`)
  }

  //bases
  ActiverDesactiver(nomFigurine: string) {
    return this._http.get(status)
  }

}