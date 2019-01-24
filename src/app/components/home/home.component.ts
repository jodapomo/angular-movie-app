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
  popularKidsMovies: any[];
  upcomingMovies: any[];
  nowPlayingMovies: any[];

  constructor( public _ms: MoviesService ) {
    this.loading = true;
  }

  ngOnInit() {
    this.getPopularMovies();
    this.getPopularKidsMovies();
    this.getUpcomingMovies();
    this.getNowPlayingMovies();
  }

  getPopularMovies() {
    this._ms.getPopularMovies()
      .subscribe( data => {
        this.popularMovies = data;
        this.loading = false;
      });
  }

  getPopularKidsMovies() {
    this._ms.getPopularKidsMovies()
      .subscribe( data => {
        this.popularKidsMovies = data;
        this.loading = false;
      });
  }

  getUpcomingMovies() {
    this._ms.getUpcomingMovies()
      .subscribe( data => {
        this.upcomingMovies = data;
        this.loading = false;
      });
  }

  getNowPlayingMovies() {
    this._ms.getNowPlayingMovies()
      .subscribe( data => {
        this.nowPlayingMovies = data;
        this.loading = false;
      });
  }

}
