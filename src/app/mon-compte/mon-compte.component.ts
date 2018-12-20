import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collegue } from '../auth/auth.domains';
import { CollegueService } from '../ServiceFolder/collegue.service';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
    
  styles: []
})
export class MonCompteComponent implements OnInit {
  visiteur = new Collegue ({})
  user:any
  nom: string
  email: string
 imgUrl : string
  constructor(private _authService: AuthService, private _collegueService: CollegueService) {
    this._authService.collegueConnecteObs.subscribe(v => {console.log(v);this.visiteur = v ; this._collegueService.chercherParNom(this.visiteur.nom).then(u =>{ this.user = u;console.log(this.user)})})

    //this.nom = route.snapshot.paramMap.get("nomCollegue")
    //his._collegueService.chercherParNom(this.nom)
    

  }

  ngOnInit() {
  }

}