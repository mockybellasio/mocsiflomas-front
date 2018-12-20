import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


const URL_BACKEND = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class FormInscriptionService {

  constructor(private _http: HttpClient) { }


  CreateUser(file): Observable<any> { 

    console.log("creat");
    
    return this._http.post(URL_BACKEND + 'collegue/upload/' + file.name, file, { responseType: 'text' });
  }

  saveClient(form,img):Promise<any>{

    console.log("save")

    return this._http.post(URL_BACKEND.concat("collegue/nouveau"),

    {
      prenom: form.prenom,
      nom: form.nom,
      date: form.dateN,
      password: form.password,
      adresse: form.adress,
      phone: form.phone,
      email: form.email,
      imgProfil: img
    }

  ).toPromise()
  }

  modifClient(form) {

    return this._http.patch(URL_BACKEND.concat("collegue/modifier"),

      {
        prenom: form.prenom,
        nom: form.nom,
        date: form.dateN,
        password: form.password,
        adresse: form.adress,
        phone: form.phone,

      }

    ).toPromise()

}
}