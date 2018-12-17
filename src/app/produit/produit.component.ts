import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collegue } from '../auth/auth.domains';
import { Produit } from '../ModelFolder/Produit';
import { ProduitService } from '../ServiceFolder/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: `./produit.component.html`,
  styles: []
})
export class ProduitComponent implements OnInit {
  @Input() obsVisiteur: Observable<Collegue>
  visiteur: Collegue
  @Input() produit: Produit

  constructor(private _produitService: ProduitService) {
    this.visiteur = new Collegue({ nom: "", prenom: "", email: "", motDePasse: "", roles: [] })
  }

  ngOnInit() {
    this.obsVisiteur.subscribe(coll => this.visiteur = coll);
  }
  supprimer(){
    this._produitService.SupprimerProduit("RonPop")
  }
}



