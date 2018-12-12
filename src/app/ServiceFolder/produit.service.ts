import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { AjoutProduit } from "../ajouter-un-produit/AjoutProduit";

const URL_BACKEND = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private _http: HttpClient) { }

  listerProduits(): Observable<any> {
    return this._http.get(URL_BACKEND + '/produits');
    // .then((tabprod: any[]) => tabprod
    //     .map(prod => new Produit(prod.nomDeLasaga, prod.nomDelaFigurine, prod.image, prod.personnage, prod.taille, prod.prix, prod.description, prod.numerodeLafigurine)));
  }

  ajouterProduit(prod: AjoutProduit): Observable<any> {
    return this._http.post(`${URL_BACKEND}produit/creer`, prod);
    //.subscribe((c: AjoutProduit) => c = new AjoutProduit())
    // .then((c: AjoutProduit) => c = new AjoutProduit())
  }
}