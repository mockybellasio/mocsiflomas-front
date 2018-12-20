import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../ModelFolder/Produit';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../ServiceFolder/produit.service';

@Component({
  selector: 'app-details-produits',
  templateUrl: `./details-produits.component.html`,
  styles: []
})
export class DetailsProduitsComponent implements OnInit {

  @Input() produit: Produit
  prod: Produit
  nomFigurine: string

  constructor(private route: ActivatedRoute, private ps: ProduitService) {

    this.nomFigurine = route.snapshot.paramMap.get("nomFigurine")
    ps.chercherParNom(this.nomFigurine)
      .subscribe(op => this.produit = op)
  }

  ngOnInit() {
  }

}

/*
  collegue:Collegue  = new Collegue('rob ', 800, [], 'robert', 'dupont', 'robert@hotmail.fr', '7 rue de la gare ');


  pseudo: string;

  // Injection du service ActivatedRoute
  constructor(private route: ActivatedRoute , private nawak:CollegueService) {

      // récupération du paramètre id
      this.pseudo = this.route.snapshot.paramMap.get("pseudo")
      this.nawak.colleguesParPseudo(this.pseudo).then((c:Collegue)=>this.collegue = c); */