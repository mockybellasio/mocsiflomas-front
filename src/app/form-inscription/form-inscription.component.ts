import { Component, OnInit } from '@angular/core';
import {FormInscriptionService} from "./form-inscription.service";
import {FormUser} from "../ModelFolder/FormUser";
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styles: []
})
export class FormInscriptionComponent implements OnInit {
  
  
  constructor(protected pService: FormInscriptionService, private router: Router) { }

  file
  monModel: FormUser = new FormUser();
  messageError:string;
  img

  submit() {
    //console.log(this.monModel);
    this.pService.CreateUser(this.monModel,this.file).subscribe(col=>{
      this.img=col;
      console.log(col)
    })
      // .then(() => this.router.navigate(['/']))
      // .catch((error) => {
      //   this.messageError=error.error;
      // });

  }

  onFileChanged(event) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  ngOnInit() {
  }

}
