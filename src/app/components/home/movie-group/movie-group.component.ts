import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-group',
  templateUrl: './movie-group.component.html',
  styleUrls: ['./movie-group.component.css']
})
export class MovieGroupComponent implements OnInit {

  @Input() movieGroupTitle: string;
  @Input() movies: any[];

  constructor() { }

  ngOnInit() {
  }

}
