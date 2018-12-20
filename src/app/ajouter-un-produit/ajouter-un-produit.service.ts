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

  creerProduit(file): Observable<any> {
    return this._http.post(URL_BACKEND + 'gestion-produit/upload/' + file.name, file, { responseType: 'text' });
  }

  ajouterProduit(form: AjoutProduit, img: string): Promise<any> {
    if (img == null) {
      img = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pas_d%27image_disponible.svg/240px-Pas_d%27image_disponible.svg.png"
    }
    form.nomImage = img;
    return this._http.post(URL_BACKEND.concat("gestion-produit/creer"), form)
      .toPromise().then()
  }
}