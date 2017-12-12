import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then ( () => {
    // registerLocaleData( localeDe );
    // or ng serve --locale=de
  } )
  .catch(err => console.log(err));
