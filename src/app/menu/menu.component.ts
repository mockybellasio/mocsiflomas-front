import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Collegue } from '../auth/auth.domains';
import { RechercheService } from '../ServiceFolder/recherche.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() rechercheAll
  searchText: string
  visiteur: Collegue

  constructor(private _recherche: RechercheService, private _authSrv: AuthService, private _router: Router, private _authService:AuthService) {
    this._authService.collegueConnecteObs.subscribe(v => {this.visiteur = v; console.log(this.visiteur)});
  }

  ngOnInit() {
  }

  seDeconnecter() {
    //la deconnection redirige sur la page accueil
    this._authSrv.seDeconnecter().subscribe(
      () => this._router.navigate(['/accueil'])
    );
  }
}
//   rechercheFigurines() {
//     this._recherche.rechercheAll(this.searchText)._subscribe(r => r)
//   }
// }

