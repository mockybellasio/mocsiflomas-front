import { Injectable } from '@angular/core';
import { Collegue } from '../auth/auth.domains';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL_BACKEND = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  constructor(private _http: HttpClient) { }

 // chercherParEmail(email: string): Observable<Collegue> {
    //return this._http.get<Collegue>(URL_BACKEND + `gestion-produit/${email}`)

  
    chercherParNom(nom: string): Promise<Collegue> {
      return this._http.get<Collegue>(URL_BACKEND + `collegue/profil/${nom}`).toPromise();


  }
}
