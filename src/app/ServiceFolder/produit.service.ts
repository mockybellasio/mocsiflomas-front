import { HttpClient } from "@angular/common/http";
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
      .then((tabProd: any[]) => tabProd.map(prod => new Produit(prod.nomSaga, prod.nomFigurine, prod.nomImage, prod.personnage, prod.taille, prod.prix, prod.description, prod.numeroFigurine)))
  }

//chercher par nomFigurine

chercherParNom(nomFigurine:String):Observable<Produit> {

  return this._http.get<Produit>(URL_BACKEND + `${nomFigurine}`)

}



  ajouterProduit(prod: AjoutProduit): Observable<any> {
    return this._http.post(`${URL_BACKEND}produit/creer`, prod);
    //.subscribe((c: AjoutProduit) => c = new AjoutProduit())
    // .then((c: AjoutProduit) => c = new AjoutProduit())
  }
}