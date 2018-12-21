import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const URL_BACKEND = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ListeCommandeAdminService {

  constructor(private _http: HttpClient) { }

  readAllCommande():Observable<any>{
    return this._http.get(URL_BACKEND.concat("commandes/liste"));
  }
}
