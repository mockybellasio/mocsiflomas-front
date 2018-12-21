import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collegue } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';
import { Produit } from '../ModelFolder/Produit';
import { ProduitService } from '../ServiceFolder/produit.service';
import { ModifierUnProduitService } from './modifier-un-produit.service';

@Component({
  selector: 'app-modifier-un-produit',
  templateUrl: `./modifier-un-produit.component.html`,
  styles: []
})
export class ModifierUnProduitComponent implements OnInit {
  file;
  produit: Produit
  nomFigurine: string
  visiteur = new Collegue({})

  constructor(private _route: ActivatedRoute, private route: Router, private _produitService: ProduitService, private _authService: AuthService, private _modifProduitService: ModifierUnProduitService) {
    this.nomFigurine = this._route.snapshot.paramMap.get("nomFigurine")
    this._produitService.chercherParNom(this.nomFigurine)
      .subscribe(op => this.produit = op)
    this._authService.collegueConnecteObs.subscribe(v => this.visiteur = v)
    if (this.visiteur.estAnonyme()) {
      this.route.navigateByUrl("/accueil")
    }
  }

  ngOnInit() {
  }

  submit() {
    //utilise modifier-un-produit.service dans le dossier modifier-un-produit
    if (this.file != this.produit.nomImage) {
      this._modifProduitService.creerProduit(this.file).subscribe(prod => this._modifProduitService.modifierProduit(this.produit, prod).then(() => this.route.navigateByUrl("/gestion-produit")))
    } else {
      this._modifProduitService.modifierProduit(this.produit, undefined).then(() => this.route.navigateByUrl("/gestion-produit"));
    }
  }

  onFileChanged(event) {
    this.file = event.target.files[0];
  }
}
