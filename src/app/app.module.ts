import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { TilbudComponent } from './tilbud/tilbud.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { TilbudSlideComponent } from './tilbud/tilbud-slide/tilbud-slide.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    TilbudComponent,
    KontaktComponent,
    TilbudSlideComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
