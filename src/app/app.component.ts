import { Component, OnInit } from '@angular/core';
import { Collegue } from "./auth/auth.domains";
import { AuthService } from "./auth/auth.service";

/**
 * Composant principal de l'application.
 */
@Component({
  selector: 'app-root',
  templateUrl: `./app.html`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  /**
   * A l'initialisation, le composant s'abonne au flux du collègue courant connecté.
   *
   * Celui lui permet de rester à jour en fonction des connexions et déconnexions.
   */
  ngOnInit(): void {

  }



}
