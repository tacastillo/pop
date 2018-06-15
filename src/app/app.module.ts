import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopModule } from 'pop';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
