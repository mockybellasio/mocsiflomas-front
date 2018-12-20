import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collegue } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';

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
