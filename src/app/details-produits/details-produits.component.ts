import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../ModelFolder/Produit';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../ServiceFolder/produit.service';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-details-produits',
  templateUrl: `./details-produits.component.html`,
  styles: []
})
export class DetailsProduitsComponent implements OnInit {
  @Input() produit: Produit

  titre:string

  constructor(private route: ActivatedRoute, private ps:ProduitService) {

    this.titre = route.snapshot.paramMap.get("nomFigurine")
     ps.chercherParNom(this.titre)
     .subscribe( op => this.produit = op)
   }

  ngOnInit() {
  }

}
