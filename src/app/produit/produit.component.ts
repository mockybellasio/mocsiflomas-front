import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../ModelFolder/Produit';
import { ProduitService } from '../ServiceFolder/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: `./produit.component.html`,
  styles: []
})
export class ProduitComponent implements OnInit {
  produit: Produit

  constructor(private _produitService: ProduitService) {
  }

  ngOnInit() {
    
  }
}



