import { Component } from '@angular/core';

@Component ( {
  selector   : 'bm-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  title          = 'bm';
  list: string[] = [ 'saban',
                     'peter',
                     'franz'
  ];
  private intervalId: number;

  constructor () {
    for ( let i = 0; i < 10; i++ ) {
      this.list.push( 'random user' + Math.floor( Math.random() * 1000 ) );
    }
    this.autoDel ();
  }

  private autoDel () {
    this.intervalId = window.setInterval( () => {
      if ( this.list.length > 0 ) {
        this.list.pop();
      } else {
        window.clearInterval( this.intervalId );
      }
    }, 500 );
  }
}
