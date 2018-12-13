import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormUser } from "../ModelFolder/FormUser";
import { FormInscriptionService } from "./form-inscription.service";

@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styles: []
})
export class FormInscriptionComponent implements OnInit {


  constructor(protected pService: FormInscriptionService, private router: Router) { }

  file;
  monModel: FormUser = new FormUser();
  messageError: string;
  img;
  verifPassWord: string;


  submit() {

    this.pService.CreateUser(this.monModel, this.file).subscribe(col => {
      this.img = col;
      console.log(col)
    })
    // .then(() => this.router.navigate(['/']))
    // .catch((error) => {
    //   this.messageError=error.error;
    // });

  }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.file = event.target.files[0];
    console.log(this.file);
  }



  // verifpwd(){
  //   let elem=document.getElementById("defaultRegisterFormPasswordconfirm");
  //   if(this.verifPassWord!=undefined && this.monModel.password){
  //     if(this.verifPassWord===this.monModel.password){
  //       if(elem.className!=){

  //       }
  //     }else{
  //       if(){

  //       }
  //     }
  //   }
  // }
}
