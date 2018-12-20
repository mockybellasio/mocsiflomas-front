import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Collegue } from '../auth/auth.domains';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-produits',
  templateUrl: './gestion-produits.component.html',
  styles: []
})
export class GestionProduitsComponent implements OnInit {
visiteur = new Collegue({})
  constructor(private _authService: AuthService, private route: Router) {
    this._authService.collegueConnecteObs.subscribe(v => this.visiteur = v)
    if (this.visiteur.estAnonyme()) {
      this.route.navigateByUrl("/accueil")
    }
  }

  ngOnInit() {
  }

}
