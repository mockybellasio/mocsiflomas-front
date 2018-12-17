import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collegue } from '../auth/auth.domains';
import { Produit } from '../ModelFolder/Produit';

@Component({
  selector: 'app-produit',
  templateUrl: `./produit.component.html`,
  styles: []
})
export class ProduitComponent implements OnInit {
  @Input() obsVisiteur: Observable<Collegue>
  visiteur: Collegue
  @Input() produit: Produit

  constructor() {
    this.visiteur = new Collegue({ nom: "", prenom: "", email: "", motDePasse: "", roles: [] })
  }

  ngOnInit() {
    this.obsVisiteur.subscribe(coll => this.visiteur = coll);
  }
  
}



