import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-user-score',
  templateUrl: './user-score.component.html',
  styleUrls: ['./user-score.component.css'],
  animations: [
    trigger('right', [
      state('init', style({
        transform: 'rotate(0deg);',
      })),
      state('full',   style({
        transform: 'rotate({{rightDegress}}deg)',
      }), { params: { rightDegress: 0 } } ),
      transition('* => *', animate('{{timeRight}}s linear'), { params: { timeRight: 1.8 } }),
    ]),
    trigger('left', [
      state('init', style({
        transform: 'rotate(0deg);',
      })),
      state('full',   style({
        transform: 'rotate({{leftDegress}}deg)',
      }), { params: { leftDegress: 0 } } ),
      transition('* => *', animate('{{timeLeft}}s {{delay}}s linear'), { params: { timeLeft: 0, delay: 1.8 } }),
    ])
  ]
})
export class UserScoreComponent implements OnInit {


  @Input() score = 0;
  start = 0;

  rightDegress: number;
  leftDegress: number;

  timeRight: number;
  timeLeft: number;

  color: string;

  lowColor = '#c43e15';
  medColor = '#c2c51a';
  highColor = '#08c450';

  constructor() { }

  ngOnInit() {
    this.score = this.score * 10;
    this.setProgress();
    this.setOdometer();
  }

  setOdometer() {

    const totalTime = this.timeLeft + this.timeRight;

    const timeInterval = (totalTime * 1000) / this.score;

    const interval = setInterval( () => {
      if ( this.start < this.score ) {
        this.start++;
      }
    }, timeInterval);

    setTimeout(() => {

      clearInterval(interval);
      if ( this.start !== this.score ) {
        this.start = this.score;
      }

    }, (totalTime + 2) * 1000);

  }

  setProgress() {

    if ( this.score <= 50 ) {

      this.rightDegress = this.calculateDegrees(this.score);
      this.leftDegress = 0;

      this.timeRight = this.calculateTime(this.rightDegress);
      this.timeLeft = 0;

      this.color = this.lowColor;

      return;
    }

    if ( this.score < 75 ) {
      this.color = this.medColor;
    } else {
      this.color = this.highColor;
    }

    this.rightDegress = 180;
    this.timeRight = 1.8;

    this.leftDegress = this.calculateDegrees( this.score - 50 );
    this.timeLeft = this.calculateTime(this.leftDegress);

  }

  calculateDegrees( percent: number ) {

    return ( 180 * percent ) / 50;

  }

  calculateTime( percent: number ) {

    return ( 1.8 * percent ) / 180;

  }

}
