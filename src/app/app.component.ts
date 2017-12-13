import { Component } from '@angular/core';
import userList from './user/user.model';
import { User } from './user/user';

@Component ( {
  selector   : 'bm-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  title          = 'bm';
  list: User[] = [];
  private intervalId: number;

  constructor () {

    this.list = [ ...userList ];

    // for ( let i = 0; i < 10; i++ ) {
    //   this.list.push( 'random user' + Math.floor( Math.random() * 1000 ) );
    // }
    // this.autoDel ();

    // console.log ( userList );
  }

  private autoDel () {
    this.intervalId = window.setInterval ( () => {
      if ( this.list.length > 0 ) {
        this.list.pop ();
      } else {
        window.clearInterval ( this.intervalId );
      }
    }, 500 );
  }
}
