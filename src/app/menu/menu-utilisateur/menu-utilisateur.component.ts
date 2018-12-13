import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-utilisateur',
  templateUrl: './menu-utilisateur.component.html',

})
export class MenuUtilisateurComponent implements OnInit {

  constructor(private _authSrv: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  seDeconnecter() {
    this._authSrv.seDeconnecter().subscribe(
      value => this._router.navigate(['/accueil'])
    );
  }

}

