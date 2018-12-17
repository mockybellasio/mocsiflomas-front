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
  verif: string;

  submit() {
    if (this.monModel.verifPassWord(this.verif)) {
      console.log(this.monModel)

      this.pService.CreateUser(this.file).subscribe(col=>{this.pService.saveClient(this.monModel,col),this.router.navigate(['/'])});
    }
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

  test(value) {

  }


  // verifpwd() {
  //   let elem = document.getElementById("defaultRegisterFormPasswordconfirm");
  //   if (this.verifPassWord != undefined && this.monModel.password) {
  //     if (this.verifPassWord === this.monModel.password) {
  //       if (this.hasClassName("defaultRegisterFormPasswordconfirm", "is-valid")) {
  //         elem.className +="is-valid";
  //       }
  //     } else {
  //       if (this.hasClassName("defaultRegisterFormPasswordconfirm","is-invalid")) {
  //         elem.className +="is-invalid";
  //       }
  //     }
  //   }
  // }

  // hasClassName(elmt, className) {
  //   if (typeof elmt == "string")
  //     elmt = document.getElementById(elmt);
  //   var regex = new RegExp("\\b" + className + "\\b");
  //   return regex.test(elmt.className);
  // }
}
