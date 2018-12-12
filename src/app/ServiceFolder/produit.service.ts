import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment.prod";
import { Produit } from "../ModelFolder/Produit";
import { AjoutProduit } from "../ajouter-un-produit/AjoutProduit";
import { Observable } from "rxjs";

const URL_BACKEND = environment.production;
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
    return this._http.post(`${URL_BACKEND}/ajoutProduit`, prod);
    //.subscribe((c: AjoutProduit) => c = new AjoutProduit())
      // .then((c: AjoutProduit) => c = new AjoutProduit())
  }
}