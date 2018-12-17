import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { AjoutProduit } from "../ajouter-un-produit/AjoutProduit";
import { Produit } from "../ModelFolder/Produit";

const URL_BACKEND = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private _http: HttpClient) { }

  //version Promise
  listerProduits(): Promise<Produit[]> {
    return this._http.get(URL_BACKEND + 'produits').toPromise()
      .then((tabProd: any[]) => tabProd.map(prod => new Produit(prod.nomSaga, prod.nomImage, prod.personnage, prod.nomFigurine, prod.taille, prod.prix, prod.description, prod.numeroFigurine)))
  }

  //chercher par nomFigurine
  chercherParNom(nomFigurine: String): Observable<Produit> {
    return this._http.get<Produit>(URL_BACKEND + `${nomFigurine}`)

  }

  //base posée A MODIFIER
  modifierProduit(unProduit: Produit, produit: Produit): Promise<Produit> {
    return this._http.patch(`${URL_BACKEND}gestion-produits/${unProduit.nomFigurine}`,
      produit, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .toPromise().then((p: Produit) => p)
  }

  //
  ajouterProduit(prod: AjoutProduit): Observable<any> {
    return this._http.post(`${URL_BACKEND}produit/creer`, prod);
    //.subscribe((c: AjoutProduit) => c = new AjoutProduit())
    // .then((c: AjoutProduit) => c = new AjoutProduit())
  }



}