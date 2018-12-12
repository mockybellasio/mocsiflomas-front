import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../ModelFolder/Produit';
import { ProduitService } from '../ServiceFolder/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: `./produit.component.html`,
  styles: []
})
export class ProduitComponent implements OnInit {
  produits: Produit = new Produit('Harry potter', '', 'harry potter ', 10, 30, 'figurine harry Potter ', 101)
  // Injection du service ActivatedRoute

  constructor(private route: ActivatedRoute, private prod: ProduitService) {
    // récupération du paramètre id
    this.produits.personnage = this.route.snapshot.paramMap.get("personnage")
    //this.prod.produitsParPersonnage(this.produits.personnage).then((c: Produit) => this.produits = c);
  }

  ngOnInit() {
  }
}



