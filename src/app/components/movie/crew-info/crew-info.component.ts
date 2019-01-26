import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-crew-info',
  templateUrl: './crew-info.component.html',
  styleUrls: ['./crew-info.component.css']
})
export class CrewInfoComponent implements OnInit {

  @Input() crew: any;

  featuredCrew: any[] = [];

  featuredJobs = [
    'Director',
    'Screenplay',
    'Novel',
    'Story',
    'Original Music Composer',
    'Music',
    'Casting',
    'Characters',
  ];

  constructor() { }

  ngOnInit() {

    this.featuredJobs.forEach(job => {
      this.findPersonAndPush(job);
    });

  }


  findPersonAndPush( job: string ) {
    const person = this.crew.find( crewMember => crewMember.job === job );

    if ( person ) {
      this.featuredCrew.push( person );
    }

  }

}
