import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularMovies: any[];

  constructor( public _ms: MoviesService ) { }

  ngOnInit() {
    this._ms.getPopularMovies()
      .subscribe( data => {
        console.log(data);
        this.popularMovies = data;
      });
  }

}
