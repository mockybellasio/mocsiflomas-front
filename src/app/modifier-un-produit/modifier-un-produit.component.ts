import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../ServiceFolder/produit.service';
import { Produit } from '../ModelFolder/Produit';

@Component({
  selector: 'app-modifier-un-produit',
  templateUrl: `./modifier-un-produit.component.html`,
  styles: []
})
export class ModifierUnProduitComponent implements OnInit {
  produit: Produit

  constructor(private _produitService: ProduitService) { }

  ngOnInit() {
    //this._produitService.modifierProduit(this.produit,this.produit)
  }

  submit(){
    
  }
}
