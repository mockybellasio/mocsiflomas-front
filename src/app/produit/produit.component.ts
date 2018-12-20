import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collegue } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';
import { Produit } from '../ModelFolder/Produit';
import { PanierService } from '../panier/panier.service';
import { ProduitService } from '../ServiceFolder/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: `./produit.component.html`,
  styles: []
})
export class ProduitComponent implements OnInit {
  visiteur: Collegue
  @Input() produit: Produit
  qte: number;

  constructor(private _panierService: PanierService, private __produitService: ProduitService, private route: Router, private _authService: AuthService) {
    this._authService.collegueConnecteObs.subscribe(v => this.visiteur = v)
  }

  ajouterProduit() {
    this._panierService.addPanier(this.qte, this.produit)
  }

  ngOnInit() {
  }

  supprimer() {
    this.__produitService.SupprimerProduit(this.produit.nomFigurine).subscribe(() => this.route.navigateByUrl("/gestion-produit"));
  }

}




