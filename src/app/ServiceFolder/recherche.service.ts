import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produit } from '../ModelFolder/Produit';
const URL_BACKEND = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})

export class RechercheService {

  constructor(private _http: HttpClient) { }

  //Recherche produits par nomSaga
rechercheParSaga(nomSaga:String): Observable<any> {
  return this._http.get<Produit>(`${URL_BACKEND}recherche?=${nomSaga}`)
}

  //Recherche produits par personnage
  rechercheParPerso(personnage:String): Observable<any> {
    return this._http.get<Produit>(`${URL_BACKEND}recherche?=${personnage}`)
}
  //Recherche produits bis
  rechercheAll(personnage:String, nomSaga:String) {
    const URL_BACKEND = environment.baseUrl + `recherche?personnage=${personnage}&nomSaga=${nomSaga}`;
    return this._http.get<Produit[]>(URL_BACKEND);
}
}
