import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiKey = '54f1fc2cf1d083d604ab9a0f8297c9eb';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  private imgBaseUrl = 'https://image.tmdb.org/t/p/';

  constructor( private http: HttpClient ) { }

  private getURL(request: string, language: string): string {
    return `${ this.urlMoviedb }${ request }&api_key=${ this.apiKey }&language=${ language }&append_to_response=genere`;
  }

  getImgUrl( path: string, size: string ) {
    return `${ this.imgBaseUrl }/${ size }${ path }`;
  }

  getPopularMovies() {

    const url = this.getURL( '/discover/movie?sort_by=popularity.desc', 'en' );

    return this.http.jsonp( url, 'callback=JSONP_CALLBACK' )
      .pipe( map( data => data['results'] ) );

  }

}
