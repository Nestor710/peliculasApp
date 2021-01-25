import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable()
export class PeliculasService {

  peliculas:any[] = [];
  private apikey:string = "58095738dd09381a88792fbbe3792165"; // 58095738dd09381a88792fbbe3792165
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor( private httpClient:HttpClient ) { }

  getCartelera(){
/*     let desde = new Date();
    let hasta = new Date();
    hasta.setDate( hasta.getDate() + 7 )

    let desdeString = `${ desde.getFullYear() }-${ desde.getMonth() + 1 }-${ desde.getDay()}`
    let hastaString = `${ hasta.getFullYear() }-${ hasta.getMonth() + 1 }-${ hasta.getDay()}` */

    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=2020-10-15&primary_release_date.lte=2020-10-22&api_key=${ this.apikey }&language=es`
    /* let urlC = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeString }&primary_release_date.lte=${ hastaString }&api_key=${ this.apikey }&language=es`; */
    return this.httpClient.jsonp( url, 'callback' );
  }
  

  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?with_genres=18&primary_release_year=2020&api_key=${ this.apikey }&language=es`;
    return this.httpClient.jsonp(url,'callback');

  }

  getPopularesNinos(){

    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.httpClient.jsonp(url,'callback');
    
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`; // &callback=JSONP_CALLBACK
    
    return this.httpClient.jsonp( url, 'callback' )
    .pipe( map( (res:any) => {
      
      this.peliculas = res.results
      console.log(this.peliculas);
    }))
  }

  getPelicula( id:string ){
    let url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es`;
    return this.httpClient.jsonp(url,'callback');
  }

}
