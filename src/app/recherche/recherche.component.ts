import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../ModelFolder/Produit';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../ServiceFolder/produit.service';
import { RechercheService } from '../ServiceFolder/recherche.service';

@Component({
  selector: 'app-recherche',
  templateUrl: `./recherche.component.html`,
  styleUrls: ['./recherche.component.css']
})

  export class RechercheComponent implements OnInit {

   @Input() produits: Produit[] 
    nomSaga:string
    personnage:string



   constructor(private route: ActivatedRoute,private _httpClient: HttpClient, private _rechService: RechercheService){ 

    this.nomSaga = route.snapshot.paramMap.get("nomSaga")
    this.personnage = route.snapshot.paramMap.get("personnage")
  }
  submit() {

    this._rechService.rechercheAll(this.nomSaga, this.personnage).subscribe((prod) => this.produits = prod);

  }

   ngOnInit() {
  }

  }