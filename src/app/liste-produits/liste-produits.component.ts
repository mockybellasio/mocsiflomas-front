import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collegue } from '../auth/auth.domains';
import { Produit } from '../ModelFolder/Produit';
import { ProduitService } from '../ServiceFolder/produit.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.scss']
})
export class ListeProduitsComponent implements OnInit {
  filter: string

  lesProduits: Produit[]
  collegueConnecte: Observable<Collegue>;

  constructor(private _produitService: ProduitService) {
    //utilise produit.service dans le dossier ServiceFolder
    this._produitService.listerProduits().then(col => { this.lesProduits = col, console.log(col) })
  }

  ngOnInit() {
  }

}
