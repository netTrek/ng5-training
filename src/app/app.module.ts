import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    [{provide: LOCALE_ID, useValue: 'de'}]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
