import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../ModelFolder/Produit';
import { ProduitService } from '../ServiceFolder/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: `./produit.component.html`,
  styles: []
})
export class ProduitComponent implements OnInit {

  @Input() produit: Produit



  constructor(private _produitService: ProduitService) {

  }

  ngOnInit() {
    console.log(this.produit.nomFigurine)
  }
}



