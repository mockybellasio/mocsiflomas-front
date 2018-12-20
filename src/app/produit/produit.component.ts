import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collegue } from '../auth/auth.domains';
import { Produit,  } from '../ModelFolder/Produit';
import { ProduitService, } from '../ServiceFolder/produit.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-produit',
  templateUrl: `./produit.component.html`,
  styles: []
})
export class ProduitComponent implements OnInit {
  @Input() obsVisiteur: Observable<Collegue>
  visiteur: Collegue
  @Input() produit: Produit
   lesProduits: Produit[]

  constructor(private _produitService: ProduitService, private route: Router ) {
    this.visiteur = new Collegue({ nom: "", prenom: "", email: "", motDePasse: "", roles: [] })
  }

  ngOnInit() {

    this.obsVisiteur.subscribe(coll => this.visiteur = coll);
  }

  supprimer(){ 

    

    //this.lesProduits.splice( this.lesProduits.findIndex(p => p === produit),1)

    this._produitService.SupprimerProduit(this.produit.nomFigurine).subscribe()
    this.route.navigate[("/gestion-Produits")]


  //this.SupprimerProduit().then(col => { this.lesProduits = col, console.log(col) })

  //produit.filter(p => p !== this.produit)

    //this.produit = this.produit.filter(p => p !== produit)


  // delete(produitASupprimer:Produit){

  //   this.produits.splice(this.produits.findIndex(p => p === produitASupprimer),1)

  //   this._produitsServices.deleteUnProduit(produitASupprimer.reference).subscribe()


}

}


