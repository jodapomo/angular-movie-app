import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform( time: any ): any {

    let hours = 0;
    let mins = 0;

    if ( time >= 60 ) {
      hours = Math.floor( time / 60 );
      mins = time - (hours * 60);

      return `${hours}h ${mins}m`;

    } else {
      return `${time}m`;
    }

  }

}
