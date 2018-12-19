import { Component, OnInit, Input } from '@angular/core';
import { PanierService } from './panier.service';
import { Collegue } from '../auth/auth.domains';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  @Input() visiteur: Collegue;
  valuePanier:Array<any>;
  total:number=0;

  constructor(private panierServ:PanierService) { 
    this.valuePanier=panierServ.readPanier()
    this.valuePanier.forEach(element=>this.total+=element[0].prix*element[1])
  }

  ngOnInit() {
    console.log(this.valuePanier)
  }

}
