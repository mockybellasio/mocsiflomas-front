import { Component, OnInit } from '@angular/core';
import { Produit } from '../ModelFolder/Produit';
import { ProduitService } from '../ServiceFolder/produit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  template: `
    <p>
      detail works!
    </p>
  `,
  styles: []
})
export class DetailComponent implements OnInit {

  produit : Produit = new Produit("Harry Potter", "harry", "image", "harry Potter ", 10, 35, "pop figurine de harry potter", 1254)


  nomFigurine: string;

  // Injection du service ActivatedRoute
  constructor(private route: ActivatedRoute , private prod :ProduitService) {

      // récupération du paramètre id
      this.nomFigurine = this.route.snapshot.paramMap.get("nomFigurine")
    //  this.prod.produitParFigurine(this.nomFigurine).then((p:Produit)=>this.produit = p);
  }

  ngOnInit() {

  }

  }
