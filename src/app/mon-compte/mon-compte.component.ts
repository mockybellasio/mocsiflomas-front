import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUser } from '../ModelFolder/FormUser';
import { FormInscriptionService } from '../form-inscription/form-inscription.service';
@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
    
  styles: []
})
export class MonCompteComponent implements OnInit {
  file;
  monModel: FormUser = new FormUser();
  messageError: string;
  verif: string;

  constructor(protected pService: FormInscriptionService, private router: Router) {
  }
  ngOnInit() {
  }

  submit() {
    if (this.monModel.verifPassWord(this.verif)) {
      console.log(this.monModel)
      if (this.file) {
        this.pService.CreateUser(this.file).subscribe(col => {
          this.pService.saveClient(this.monModel, col)
            .then(val => this.router.navigate(['/auth']).catch(error => console.log("toto")))
        });
      } else {
        this.pService.saveClient(this.monModel, undefined)
          .then(val => this.router.navigate(['/auth']))
          .catch(error=>{this.messageError=error.error.message; console.log(error);})
      }
    } else {
      this.messageError = "mot de passe differant"
    }
  }

}
