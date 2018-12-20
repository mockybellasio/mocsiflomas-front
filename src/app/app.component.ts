import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collegue } from "./auth/auth.domains";
import { AuthService } from "./auth/auth.service";

/**
 * Composant principal de l'application.
 */
@Component({
  selector: 'app-root',
  templateUrl: `./app.html`,
  styles: []
})
export class AppComponent implements OnInit {
  visiteur = new Collegue({})
  utilisateurConnecte: Observable<Collegue>

  constructor(private _authService: AuthService) {
    this._authService.collegueConnecteObs.subscribe(v => this.visiteur = v)
  }

  /**
   * A l'initialisation, le composant s'abonne au flux du collègue courant connecté.
   *
   * Celui lui permet de rester à jour en fonction des connexions et déconnexions.
   */
  ngOnInit() {
    this.utilisateurConnecte = this._authService.collegueConnecteObs
  }



}
