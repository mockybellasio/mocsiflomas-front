import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterUnProduitComponent } from "./ajouter-un-produit/ajouter-un-produit.component";
import { AppComponent } from './app.component';
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { AuthComponent } from './auth/auth.component';
import { StatutConnecteService } from "./auth/statut-connecte.service";
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';
import { DetailsProduitsComponent } from './details-produits/details-produits.component';
import { FooterComponent } from './footer/footer.component';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { GestionProduitsComponent } from './gestion-produits/gestion-produits.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { MenuComponent } from './menu/menu.component';
import { ModifierUnProduitComponent } from './modifier-un-produit/modifier-un-produit.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { PanierComponent } from './panier/panier.component';
import { ProduitComponent } from "./produit/produit.component";
import { RecherchePipeComponent } from "./recherche-pipe/recherche-pipe.component";
import { TechComponent } from './tech/tech.component';
<<<<<<< HEAD
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';
import { ListeCommandeAdminComponent } from './liste-commande-admin/liste-commande-admin.component';

=======
>>>>>>> 367a6c46182212a021096a24be44c7828b48a6d3


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'inscription', component: FormInscriptionComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService] }, // /tech accessible uniquement si connecté
  { path: 'auth', component: AuthComponent },
  { path: 'ajoutProduit', component: AjouterUnProduitComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'gestion-produit', component: GestionProduitsComponent },
  { path: 'liste-figurines', component: ListeProduitsComponent },
  { path: 'produits', component: ProduitComponent },
  { path: 'details-produits/:nomFigurine', component: DetailsProduitsComponent },
  { path: 'gestion-produit/allCommande', component: ListeCommandeAdminComponent },
  { path: 'collegue/moncompte', component: MonCompteComponent },
  { path: 'collegue/modifier', component: DetailCollegueComponent },
  { path: 'gestion-produit/modif-produit/:nomFigurine', component: ModifierUnProduitComponent },
  { path: 'recherche-pipe', component: RecherchePipeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    AuthComponent,
    AccueilComponent,
    FormInscriptionComponent,
    GestionProduitsComponent,
    ProduitComponent,
    AjouterUnProduitComponent,
    ListeProduitsComponent,
    FooterComponent,
    MenuComponent,
    DetailsProduitsComponent,
    ModifierUnProduitComponent,
    PanierComponent,
    MonCompteComponent,
    MonCompteComponent,
    DetailCollegueComponent,
    ListeCommandeAdminComponent,
    RecherchePipeComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
