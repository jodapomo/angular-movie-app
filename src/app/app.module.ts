import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ImgurlPipe } from './pipes/imgurl.pipe';
import { MovieGroupComponent } from './components/home/movie-group/movie-group.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { MovieComponent } from './components/movie/movie.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { LoadingComponent } from './components/loading/loading.component';
import { YoutubeVideoPipe } from './pipes/youtube-video.pipe';
import { LastTrailerPipe } from './pipes/last-trailer.pipe';
import { UserScoreComponent } from './components/movie/user-score/user-score.component';
import { MovieInfoComponent } from './components/movie/movie-info/movie-info.component';
import { CastCardComponent } from './components/movie/cast-card/cast-card.component';
import { TimePipe } from './pipes/time.pipe';
import { CrewInfoComponent } from './components/movie/crew-info/crew-info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    ImgurlPipe,
    MovieGroupComponent,
    CardMovieComponent,
    MovieComponent,
    BackButtonComponent,
    LoadingComponent,
    YoutubeVideoPipe,
    LastTrailerPipe,
    UserScoreComponent,
    MovieInfoComponent,
    CastCardComponent,
    TimePipe,
    CrewInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
