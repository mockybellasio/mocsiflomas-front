import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../ServiceFolder/produit.service';
import { AjoutProduit } from './AjoutProduit';

@Component({
  selector: 'app-ajouter-un-produit',
  templateUrl: `./ajouter-un-produit.component.html`,
  styles: []
})
export class AjouterUnProduitComponent implements OnInit {
  ajouterProduit = new AjoutProduit();

  constructor(private _produitService: ProduitService) {
  }

  ngOnInit() {
  }

  submit() {
    this._produitService.ajouterProduit(this.ajouterProduit).subscribe((c: AjoutProduit) => c = new AjoutProduit())
  }

}
