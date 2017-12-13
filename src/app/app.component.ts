import { Component } from '@angular/core';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'bm';
  msg = 'msg prop';

  getFeedback( msg?: string): string {
    if ( !! msg ) {
      return `I'm a feedback::: ${msg} ${this.title} `;
    }
    return `I'm a feedback::: ${this.title} `;
  }


}
