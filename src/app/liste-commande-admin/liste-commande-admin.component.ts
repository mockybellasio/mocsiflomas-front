import { Component, OnInit } from '@angular/core';
import { ListeCommandeAdminService } from './liste-commande-admin.service';

@Component({
  selector: 'app-liste-commande-admin',
  templateUrl: './liste-commade-admin.component.html',
  styles: []
})
export class ListeCommandeAdminComponent implements OnInit {
  listCommande:any;

  constructor(private _listComService: ListeCommandeAdminService) {
    this._listComService.readAllCommande().subscribe(col=>this.listCommande=col)
  }
 
sommeTotal(elem):number{
  var total:number=0;
  elem.achat.forEach(element => {
    total+=element.achatProduits.prix*element.quantité;
  });
 return total;
}

  ngOnInit() {
  }

}
