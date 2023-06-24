import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardComponent} from "./components/interpolation/card/card.component";
import { TourCardComponent } from './components/prop-binding/tour-card/tour-card.component';
import { MsgCardComponent } from './components/events-binding/msg-card/msg-card.component';
import { CounterComponent } from './components/events-binding/counter/counter.component';
import { InfoCardComponent } from './components/template-ref/info-card/info-card.component';


@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
        TourCardComponent,
        MsgCardComponent,
        CounterComponent,
        InfoCardComponent,


    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {


  }
}
