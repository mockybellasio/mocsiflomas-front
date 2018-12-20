import { Component, OnInit } from '@angular/core';
import { AjouterUnProduitService } from './ajouter-un-produit.service';
import { AjoutProduit } from './AjoutProduit';
import { Router } from '@angular/router';
import { Collegue } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-ajouter-un-produit',
  templateUrl: `./ajouter-un-produit.component.html`,
  styleUrls: [`./ajouter-un-produit.component.scss`]
})
export class AjouterUnProduitComponent implements OnInit {
  ajouterProduit = new AjoutProduit();
  file;
  visiteur = new Collegue({})

  constructor(private _ajoutProduitService: AjouterUnProduitService, private route: Router, private _authService: AuthService) {
    this._authService.collegueConnecteObs.subscribe(v => this.visiteur = v)
    if (this.visiteur.estAnonyme()) {
      this.route.navigateByUrl("/accueil")
    }
  }

  ngOnInit() {
  }

  submit() {
    //utilise ajouter-un-produit.service dans le dossier ajouter-un-produit

    if (this.file) {
      this._ajoutProduitService.creerProduit(this.file).subscribe(prod => this._ajoutProduitService.ajouterProduit(this.ajouterProduit, prod).then(() => this.route.navigateByUrl("/gestion-produit")))
    } else {
      this._ajoutProduitService.ajouterProduit(this.ajouterProduit, undefined).then(() => this.route.navigateByUrl("/gestion-produit"))
    }
  }

  onFileChanged(event) {
    this.file = event.target.files[0];
  }

}
