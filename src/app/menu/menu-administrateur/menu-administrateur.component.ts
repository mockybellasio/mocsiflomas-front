import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-menu-administrateur',
  templateUrl: './menu-administrateur.component.html'
})
export class MenuAdministrateurComponent implements OnInit {

  constructor(private _authSrv: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  seDeconnecter() {
    this._authSrv.seDeconnecter().subscribe(
      value => this._router.navigate(['/accueil'])
    );
  }
}
