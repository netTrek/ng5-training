import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { UserModule } from './user/user.module';
import { CommonUiModule } from './common-ui/common-ui.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeViewComponent } from './home-view/home-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';


@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    HomeViewComponent,
    ContactViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UserModule,
    CommonUiModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
