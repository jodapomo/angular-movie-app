import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiKey = '54f1fc2cf1d083d604ab9a0f8297c9eb';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  private imgBaseUrl = 'https://image.tmdb.org/t/p';
  private language = 'en';

  constructor( private http: HttpClient ) { }

  private getURL(request: string, language: string): string {

    let querySymbol = '&';

    if ( !request.includes('?') ) {
      querySymbol = '?';
    }

    return `${ this.urlMoviedb }${ request }${querySymbol}api_key=${ this.apiKey }&language=${ language }`;
  }

  getImgUrl( path: string, size: string ) {
    return `${ this.imgBaseUrl }/${ size }${ path }`;
  }

  getPopularMovies() {

    const url = this.getURL( '/discover/movie?sort_by=popularity.desc', this.language );

    return this.http.jsonp( url, 'callback=JSONP_CALLBACK' )
      .pipe( map( data => data['results'] ) );

  }

  getPopularKidsMovies() {

    const url = this.getURL( '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc', this.language );

    return this.http.jsonp( url, 'callback=JSONP_CALLBACK' )
      .pipe( map( data => data['results'] ) );

  }

  getMovie( id: number ) {

    const url = this.getURL( `/movie/${id}?append_to_response=videos,release_dates`, this.language );

    return this.http.jsonp( url, 'callback=JSONP_CALLBACK' );
  }

  getMovieCredits( id: number ) {

    const url = this.getURL( `/movie/${id}/credits`, this.language );

    return this.http.jsonp( url, 'callback=JSONP_CALLBACK' );
  }


}
