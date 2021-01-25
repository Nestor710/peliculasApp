import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  buscar:string = ""
  
  constructor( public _ps:PeliculasService,
                private router:Router,
                private route:ActivatedRoute ) {

                  this.route.params.subscribe( params =>{
                    if (params['texto']) {
                      this.buscar = params['texto'];
                      this.buscarPelicula();
                    }
                    
                  } )
  }

  ngOnInit(): void {
  }

  buscarPelicula(){
    if (this.buscar.length === 0) {
      return;
    }

    this._ps.buscarPelicula( this.buscar )
            .subscribe()
  }

  verInfo(){
    this.router.navigate( ['/home'] )
  }

}
