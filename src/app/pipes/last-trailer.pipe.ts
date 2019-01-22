import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastTrailer'
})
export class LastTrailerPipe implements PipeTransform {

  transform( videos: any[] ): any {

    if ( videos.length === 0 ) {
      return null;
    }

    const trailer = this.lookForType( videos, 'Trailer');

    if (trailer) {
      return trailer;
    }

    const teaser = this.lookForType( videos, 'Teaser');

    if (teaser) {
      return teaser;
    }

    return videos[ videos.length - 1 ];
  }


  lookForType( videos: any[], type: string ) {
    for (let i = videos.length - 1; i >= 0; i--) {
      const video = videos[i];

      if ( video.type === type ) {
        return video.key;
      }
    }
    return null;
  }

}
