import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CosmetiquesComponent } from './cosmetiques/cosmetiques.component';
import { AddCosmetiqueComponent } from './add-cosmetique/add-cosmetique.component';
import { FormsModule } from '@angular/forms';
import { UpdateCosmetiqueComponent } from './services/update-cosmetique/update-cosmetique.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParRayonComponent } from './recherche-par-rayon/recherche-par-rayon.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeRayonsComponent } from './liste-rayons/liste-rayons.component';
import { UpdateRayonComponent } from './update-rayon/update-rayon.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CosmetiquesComponent,
    AddCosmetiqueComponent,
    UpdateCosmetiqueComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParRayonComponent,
    RechercheParNomComponent,
    ListeRayonsComponent,
    UpdateRayonComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
