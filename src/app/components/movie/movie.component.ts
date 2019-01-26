import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {


  loading: boolean;

  trailer: boolean;

  id: number;
  movie: any;
  credits: any;

  constructor(  private _ms: MoviesService,
                private route: ActivatedRoute ) {

    this.loading = true;

    this.trailer = false;

  }

  ngOnInit() {

    this.route.params.subscribe( params => {
      this.id = params['id'];
      this.getMovieAndCredits( this.id );
    });

  }

  getMovieAndCredits( id: number ) {
    this._ms.getMovieAndCredits(id)
      .subscribe( ([movie, credits]) => {
        this.movie = movie;
        this.credits = credits;

        this.loading = false;
      });
  }

  getMovie( id: number ) {

    this._ms.getMovie(id)
      .subscribe( movie => {

        this.movie = movie;

        this.loading = false;

    });

  }

  getMovieCredits( id: number) {

    this._ms.getMovieCredits(id)
      .subscribe( credits => {

        this.credits = credits;

        this.loading = false;

    });

  }

}
