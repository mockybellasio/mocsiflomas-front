import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL_BACKEND = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class FormInscriptionService {

  constructor(private _http: HttpClient) { }

  onUpload(selectedFile) {
    // this.http is the injected HttpClient
    return this._http.post(URL_BACKEND+'file-upload', selectedFile)
      .subscribe();
  }
}
