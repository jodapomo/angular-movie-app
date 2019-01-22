import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtubeVideo'
})
export class YoutubeVideoPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) {}

  transform(key: string): any {

    const url = `https://www.youtube.com/embed/${ key }?autoplay=1`;

    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
