import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cast-card',
  templateUrl: './cast-card.component.html',
  styleUrls: ['./cast-card.component.css']
})
export class CastCardComponent implements OnInit {

  @Input() person: any;

  @Input() crew = false;

  constructor() { }

  ngOnInit() {
  }

}
