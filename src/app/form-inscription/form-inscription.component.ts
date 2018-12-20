import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormUser } from "../ModelFolder/FormUser";
import { FormInscriptionService } from "./form-inscription.service";

@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.scss']
})
export class FormInscriptionComponent implements OnInit {

  constructor(protected pService: FormInscriptionService, private router: Router) { }

  file;
  monModel: FormUser = new FormUser();
  messageError: string;
  verif: string;

  submit() {
    if (this.monModel.verifPassWord(this.verif)) {
      console.log(this.monModel)
      if (this.file) {
        this.pService.CreateUser(this.file).subscribe(col => {
          this.pService.saveClient(this.monModel, col)
            .then(() => this.router.navigate(['/auth']).catch(error => console.log("toto")))
        });
      } else {
        this.pService.saveClient(this.monModel, undefined)
          .then(() => this.router.navigate(['/auth']))
          .catch(error => { this.messageError = error.error.message; console.log(error); })

      }
    } else {
      this.messageError = "mot de passe differant"
    }

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
