import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefectoComponent } from './public/Inicio/defecto/defecto.component';
import { BarraDeNavegacionComponent } from './public/pagina-principal/barra-de-navegacion/barra-de-navegacion.component';
import { MenuLateralComponent } from './public/pagina-principal/menu-lateral/menu-lateral.component';
import { ImagesComponent } from './public/pagina-principal/images/images.component';
import { PieDePaginaComponent } from './public/pagina-principal/pie-de-pagina/pie-de-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    DefectoComponent,
    BarraDeNavegacionComponent,
    MenuLateralComponent,
    ImagesComponent,
    PieDePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
