import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PeliInfoComponent } from './components/peli-info/peli-info.component';


export const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'buscar', component: BuscadorComponent },
    { path: 'buscar/:texto', component: BuscadorComponent },
    { path: 'info/:id/:pag', component: PeliInfoComponent },
    { path: 'info/:id/:pag:busqueda', component:PeliInfoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);