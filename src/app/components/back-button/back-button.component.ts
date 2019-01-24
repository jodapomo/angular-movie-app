import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {

  constructor(  private location: Location,
                private router: Router ) { }

  ngOnInit() {}

  goBack(): void {

    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }

  }

}
