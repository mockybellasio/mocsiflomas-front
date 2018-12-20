import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../ModelFolder/Produit';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AjoutProduit } from '../ajouter-un-produit/AjoutProduit';

const URL_BACKEND = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class ModifierUnProduitService {
  @Input() produit: Produit
  newProduit= new AjoutProduit();

  constructor(private _http: HttpClient) { }

  creerProduit(file): Observable<any> {
    return this._http.post(URL_BACKEND + 'gestion-produit/upload/' + file.name, file, { responseType: 'text' });
  }

  modifierProduit(newProduit: AjoutProduit, img:string): Promise<Produit> {
    newProduit.nomImage = img;
    return this._http.patch(`${URL_BACKEND}gestion-produit/modif-produit/${newProduit.nomFigurine}`,
    newProduit, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).toPromise().then((p: AjoutProduit) => p)
  }
}
