import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styles: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(/*private _collegueService: ProduitService*/) {
  }

  ngOnInit() {
    /*this._produitsService.listerProduits()
      .then(prod => this.listerProduits = prod)*/
  }

}
