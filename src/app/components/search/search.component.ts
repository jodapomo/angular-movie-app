import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  loading: boolean;

  term: string;

  movies: any[];

  constructor(  private _ms: MoviesService,
                private route: ActivatedRoute,
                private location: Location ) {

    this.loading = false;
    this.term = '';
    this.movies = [];

  }

  ngOnInit() {

    this.route.queryParams.subscribe( params => {
      if ( params.query ) {
        this.term = params.query;
        this.searchMovie();
      }
    });

  }

  searchMovie() {

    this.loading = true;

    if ( this.term.length > 0 ) {

      this._ms.searchMovie( this.term )
        .subscribe( (movies: any) => {

          this.movies = movies;
          this.location.replaceState('/search', 'query=' + this.term);
          this.loading = false;

        });

    } else {
      this.location.replaceState('/search');
      this.movies = [];
      this.loading = false;
    }

  }
}
