import { Component, OnInit } from '@angular/core';
import { AjouterUnProduitService } from './ajouter-un-produit.service';
import { AjoutProduit } from './AjoutProduit';

@Component({
  selector: 'app-ajouter-un-produit',
  templateUrl: `./ajouter-un-produit.component.html`,
  styleUrls: [`./ajouter-un-produit.component.scss`]
})
export class AjouterUnProduitComponent implements OnInit {
  ajouterProduit = new AjoutProduit();
  file;

  constructor(private _ajoutProduitService: AjouterUnProduitService) {
  }

  ngOnInit() {
  }

  submit() {
    //utilise ajouter-un-produit.service dans le dossier ajouter-un-produit
    this._ajoutProduitService.creerProduit(this.file).subscribe(prod => this._ajoutProduitService.ajouterProduit(this.ajouterProduit, prod))

  }

  onFileChanged(event) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

}
