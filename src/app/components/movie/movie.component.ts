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

  id: number;
  movie: any;

  constructor(  private _ms: MoviesService,
                private route: ActivatedRoute ) {
    this.loading = true;
  }

  ngOnInit() {

    this.route.params.subscribe( params => {
      this.getMovie( params['id'] );
    });

  }

  getMovie( id: number ) {

    this._ms.getMovie(id)
      .subscribe( movie => {

        console.log(movie);
        this.movie = movie;

        this.loading = false;

    });

  }

}
