import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AjoutProduit } from './AjoutProduit';

const URL_BACKEND = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class AjouterUnProduitService {
  constructor(private _http: HttpClient) { }

  CreerProduit(file): Observable<any> {
    console.log("creat");
    return this._http.post(URL_BACKEND + 'gestion-produit/upload/' + file.name, file, { responseType: 'text' });
  }

  ajouterProduit(form: AjoutProduit, img): Promise<any> {
    console.log("save")
    form.nomImage = img;
    return this._http.post(URL_BACKEND.concat("gestion-produit/creer"),form)
    .toPromise().then()
  }
}