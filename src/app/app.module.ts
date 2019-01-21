import { BrowserModule } from '@angular/platform-browser';
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
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
