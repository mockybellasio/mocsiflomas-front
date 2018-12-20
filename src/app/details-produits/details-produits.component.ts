import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collegue } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';
import { Produit } from '../ModelFolder/Produit';
import { ProduitService } from '../ServiceFolder/produit.service';

@Component({
  selector: 'app-details-produits',
  templateUrl: `./details-produits.component.html`,
  styleUrls: ['./details-produit.component.scss']
})
export class DetailsProduitsComponent implements OnInit {
  visiteur: Collegue
  produit: Produit
  nomFigurine: string

  constructor(private route: ActivatedRoute, private ps: ProduitService, private _authService: AuthService) {
    this.nomFigurine = this.route.snapshot.paramMap.get("nomFigurine")
    this.ps.chercherParNom(this.nomFigurine)
      .subscribe(op => { this.produit = op, console.log(op) })
    this._authService.collegueConnecteObs.subscribe(v => this.visiteur = v)//IIIIIIIIIIIIMMMMMMMMMMMPOOOOOOOOOOOOOOOORRRRRRRRRTTTTTTTAAAAAANNNNNNNTTTTTTT
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