import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collegue } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';
import { Produit } from '../ModelFolder/Produit';
import { ProduitService } from '../ServiceFolder/produit.service';
import { RechercheService } from '../ServiceFolder/recherche.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styles: []
})
export class ListeProduitsComponent implements OnInit {
  searchText:string
  personnage:String
   nomSaga:String
  lesProduits: Produit[]
  collegueConnecte: Observable<Collegue>;

  constructor(private _recherche: RechercheService, private _produitService: ProduitService, private _authSrv: AuthService) {
    //utilise produit.service dans le dossier ServiceFolder
    this._produitService.listerProduits().then(col => { this.lesProduits = col, console.log(col) })
    // this._recherche.rechercheAll(this.personnage, this.nomSaga).subscribe(rec => { this.searchText = rec})
  }

  ngOnInit() {
    this.collegueConnecte = this._authSrv.collegueConnecteObs;
  }

}
