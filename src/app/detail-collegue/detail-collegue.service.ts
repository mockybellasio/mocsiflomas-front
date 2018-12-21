import { Injectable } from '@angular/core';
import { Collegue } from '../auth/auth.domains';
import { FormUser, User } from '../ModelFolder/FormUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const URL_BACKEND = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class DetailCollegueService {

  collegue: Collegue
  newCollegue = new User();

  constructor(private _http: HttpClient) { }

  creerCollegue(file): Observable<any> {

    return this._http.post(URL_BACKEND + 'gestion-produit/upload/' + file.name, file, { responseType: 'text' });
  }

  modifierCollegue(newCollegue: User, img: string): Promise<User> {
    newCollegue.imgProfil= img;
    return this._http.patch(`${URL_BACKEND}gestion-produit/modif-produit/${ newCollegue.nom}`,
    newCollegue, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).toPromise().then((p: User) => p)
  }



}
