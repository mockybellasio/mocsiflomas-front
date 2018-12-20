import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collegue } from '../auth/auth.domains';
import { Produit } from '../ModelFolder/Produit';
import { ProduitService } from '../ServiceFolder/produit.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.scss']
})
export class ListeProduitsComponent implements OnInit {
  filter: string
  visiteur = new Collegue({})
  lesProduits: Produit[]
  collegueConnecte: Observable<Collegue>;

  constructor(private _produitService: ProduitService, private _authService: AuthService) {
    //utilise produit.service dans le dossier ServiceFolder
    this._produitService.listerProduits().then(col => this.lesProduits = col)
    this._authService.collegueConnecteObs.subscribe(v => this.visiteur = v)
  }

  ngOnInit() {
  }

}
