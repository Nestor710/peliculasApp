import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peli-info',
  templateUrl: './peli-info.component.html',
  styleUrls: ['./peli-info.component.css']
})
export class PeliInfoComponent implements OnInit {

  peliculas:any;
  regresarA:string = "";
  constructor( public _ps:PeliculasService,
    private router:Router,
    private route:ActivatedRoute ) {

      this.route.params.subscribe( params =>{
        this.regresarA = params.pag
        console.log(params);

          this._ps.getPelicula( params['id'] )
                  .subscribe( pelicula => {
                    this.peliculas = pelicula 
                    console.log(pelicula);
                    
                  })
      } )
}

  ngOnInit(): void {
  }

}
