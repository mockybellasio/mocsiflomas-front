import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProduitsService} from 
import { Produits } from '../model';

@Component({
  selector: 'app-details-produits',
  template: `
    <p>
      details-produits works!
    </p>
  `,
  styles: []
})
export class DetailsProduitsComponent implements OnInit {

  produits : Produits = new Produits('Harry potter' , '', 'harry potter ', 10 , 30 , 'figurine harry Potter ', 101 ) 


  // Injection du service ActivatedRoute
  constructor(private route: ActivatedRoute , private prod:ProduitsService) {

      // récupération du paramètre id
      this.produits.personnage = this.route.snapshot.paramMap.get("personnage")
      this.prod.produitsParPersonnage(this.produits.personnage).then((c:Produits)=>this.produits = c);
  

  }
  ngOnInit() {

  }

}
