import { Pipe, PipeTransform } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Pipe({
  name: 'imgurl'
})
export class ImgurlPipe implements PipeTransform {

  constructor( private _ms: MoviesService ) {}

  transform(path: string, size: string = 'w300'): string {

    if ( path === null ) {
      return 'assets/img/no-image.png';
    }

    return this._ms.getImgUrl( path, size );
  }

}
