import { Component, OnInit } from '@angular/core';
import { Produit } from '../ModelFolder/Produit';
import { ProduitService } from '../ServiceFolder/produit.service';
import { Observable } from 'rxjs';
import { Collegue } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styles: []
})
export class ListeProduitsComponent implements OnInit {
  lesProduits: Produit[]
  collegueConnecte: Observable<Collegue>;

  constructor(private _produitService: ProduitService, private _authSrv: AuthService, private _router: Router) {
    //utilise produit.service dans le dossier ServiceFolder
    this._produitService.listerProduits().then(col => { this.lesProduits = col, console.log(col) })
  }

  ngOnInit() {
    this.collegueConnecte = this._authSrv.collegueConnecteObs;
  }

}
