import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading: boolean;
  popularMovies: any[];

  constructor( public _ms: MoviesService ) {
    this.loading = true;
  }

  ngOnInit() {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this._ms.getPopularMovies()
      .subscribe( data => {
        this.popularMovies = data;
        this.loading = false;
      });
  }

}
