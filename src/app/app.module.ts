import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

// Servicios
import { PeliculasService } from './services/peliculas.service';
import { NavbarComponent } from './components/navbar/navbar.component';

// Rutas
import { APP_ROUTING } from './app.routes';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { GaleriaComponent } from './components/home/galeria.component';
import { PeliInfoComponent } from './components/peli-info/peli-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscadorComponent,
    NavbarComponent,
    PeliculaImagenPipe,
    GaleriaComponent,
    PeliInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    PeliculasService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
