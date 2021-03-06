import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collegue } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';
import { Produit } from '../ModelFolder/Produit';
import { ProduitService } from '../ServiceFolder/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: `./produit.component.html`,
  styles: []
})
export class ProduitComponent implements OnInit {
  visiteur: Collegue
  @Input() produit: Produit


  constructor(private _produitService: ProduitService, private route: Router, private _authService: AuthService) {
    this._authService.collegueConnecteObs.subscribe(v => this.visiteur = v)
  }

  ngOnInit() {
  }

  supprimer() {
    this._produitService.SupprimerProduit(this.produit.nomFigurine)
      .subscribe(() => setTimeout(() => {
        this.route.navigateByUrl("/gestion-produit")
      }, 2000));
  }

}




