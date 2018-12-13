import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { FormUser, User } from '../ModelFolder/FormUser';
import { Observable } from 'rxjs';

const URL_BACKEND = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class FormInscriptionService {

  constructor(private _http: HttpClient) { }


  CreateUser(form: FormUser, file): Observable<any> {
    //let filePath=this.onUpload(file,file.name,file.type);
    //console.log("data");
    let data = this._http.post(URL_BACKEND + 'collegue/upload/' + file.name, file, { responseType: 'text' })

    return this._http.post(URL_BACKEND.concat("collegue/nouveau"),
      {
        prenom: form.prenom,
        nom: form.nom,
        date: form.dateN,
        password: form.password,
        adresse: form.adress,
        phone: form.phone,
        imgProfil: data
      }
    )
  }
}
