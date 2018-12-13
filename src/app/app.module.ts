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
import { FooterComponent } from './footer/footer.component';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { GestionProduitsComponent } from './gestion-produits/gestion-produits.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { MenuAdministrateurComponent } from "./menu/menu-administrateur/menu-administrateur.component";
import { MenuUtilisateurComponent } from "./menu/menu-utilisateur/menu-utilisateur.component";
import { MenuVisiteurComponent } from "./menu/menu-visiteur/menu-visiteur.component";
import { ProduitComponent } from "./produit/produit.component";
import { TechComponent } from './tech/tech.component';
import { DetailsProduitsComponent } from './details-produits/details-produits.component';



const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'inscription', component: FormInscriptionComponent },
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService] }, // /tech accessible uniquement si connecté
  { path: 'auth', component: AuthComponent },
  { path: 'ajoutProduit', component: AjouterUnProduitComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'gestion-produits', component: GestionProduitsComponent },
  { path: 'liste-figurines', component: ListeProduitsComponent },
  { path: 'produits', component: ProduitComponent },
  {path:'details-produits/:nomFigurine', component: DetailsProduitsComponent} ,
];


@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    AuthComponent,
    AccueilComponent,
    FormInscriptionComponent,
    MenuAdministrateurComponent,
    MenuUtilisateurComponent,
    MenuVisiteurComponent,
    GestionProduitsComponent,
    ProduitComponent,
    AjouterUnProduitComponent,
    ListeProduitsComponent,
    FooterComponent,
    DetailsProduitsComponent,

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
