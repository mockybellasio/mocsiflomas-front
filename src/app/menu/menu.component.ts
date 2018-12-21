import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collegue } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() rechercheAll
  searchText: string
  visiteur: Collegue
  saga: string

  constructor(private _router: Router, private _authService: AuthService/*, private _produitService: ProduitService*/) {
    this._authService.collegueConnecteObs.subscribe(v => this.visiteur = v);
  }

  ngOnInit() {
  }

  chercherParSaga(saga) {
    // this._produitService.listerParSaga()
  }

  seDeconnecter() {
    //la deconnection redirige sur la page accueil
    this._authService.seDeconnecter().subscribe(
      () => this._router.navigate(['/accueil'])
    );
  }
}
//   rechercheFigurines() {
//     this._recherche.rechercheAll(this.searchText)._subscribe(r => r)
//   }
// }

