import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Collegue } from '../auth/auth.domains';

@Component({
  selector: 'app-gestion-produits',
  templateUrl: './gestion-produits.component.html',
  styles: []
})
export class GestionProduitsComponent implements OnInit {
  @Input() obsVisiteur: Observable<Collegue>
  visiteur: Collegue

  constructor() {
    this.visiteur = new Collegue({ nom: "", prenom: "", email: "", motDePasse: "", roles: [] })
  }

  ngOnInit() {
    this.obsVisiteur.subscribe(coll => this.visiteur = coll);
  }

}
