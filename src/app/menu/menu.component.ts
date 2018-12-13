import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Collegue } from '../auth/auth.domains';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() obsVisiteur: Observable<Collegue>
  visiteur: Collegue

  constructor(private _authSrv: AuthService, private _router: Router) {
    this.visiteur = new Collegue({ nom: "", prenom: "", email: "", motDePasse: "", roles: [] })
  }

  ngOnInit() {
    this.obsVisiteur.subscribe(coll => this.visiteur = coll);
  }

  seDeconnecter() {
    this._authSrv.seDeconnecter().subscribe(
      value => this._router.navigate(['/accueil'])
    );
  }
}
