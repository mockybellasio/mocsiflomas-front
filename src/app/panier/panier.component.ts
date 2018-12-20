import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../ModelFolder/Produit';
import { PanierService } from './panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  valuePanier: Array<any>;
  total: number = 0;

  constructor(private panierServ: PanierService) {
    this.valuePanier = panierServ.readPanier()
    this.calculeTotal();
  }

  calculeTotal() {
    this.total = 0;
    this.valuePanier.forEach(element => this.total += element[0].prix * element[1])
  }

  ngOnInit() {
  }

  modifierProduit(elem) {
    this.panierServ.addPanier(elem[1], new Produit("", "", "", elem[0].nomFigurine, 0, 0, "", 0));
    this.calculeTotal();
  }

  supprimerProduit(elem) {
    this.panierServ.remouvePanier(elem[0]);
    this.valuePanier = this.panierServ.readPanier()
  }
}
