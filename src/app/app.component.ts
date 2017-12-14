import { Component } from '@angular/core';
import userList from './user/user.model';
import { User } from './user/user';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component ( {
  selector   : 'bm-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  title        = 'bm';
  list: User[] = [];
  private intervalId: number;

  constructor () {

    const subj: BehaviorSubject<number> = new BehaviorSubject( 0 );

    subj.next( 1 );
    subj.next( 2 );
    subj.subscribe( next => console.log ( next ));
    subj.next( 3 );
    subj.next( 4 );



    // const observable: Observable<number> = Observable.range ( 3, 10 );
    // const observable: Observable<number> = Observable.create ( ( observer ) => {
    //
    //   console.log ( 'cold oberservable start working' );
    //   /*
    //         observer.next( 1 );
    //         observer.next( 2 );
    //         // observer.error( 'ups' );
    //         observer.next( 3 );
    //         observer.complete();*/
    //
    //   let counter    = 0;
    //   let id: number = window.setInterval ( () => {
    //       observer.next( ++counter );
    //       if ( counter === 5 ) {
    //         window.clearInterval( id );
    //         observer.complete();
    //       }
    //   }, 500 );
    //
    // } );
    // const subscription: Subscription     = observable
    // // .filter ( crr => crr % 2 === 0 )
    //   .map ( crr => crr * 10 )
    //   // .filter( ( crr ): boolean => {
    //   //   return crr % 2 === 0;
    //   // })
    //   // .map( ( crr ) => {
    //   //   return crr * 10;
    //   // })
    //   .subscribe (
    //     next => console.log ( next ),
    //     error => console.error ( error ),
    //     () => {
    //       console.log ( 'ich habe fertig' );
    //     }
    //     // ( next: number ) => {
    //     //   console.log ( next );
    //     // }
    //   );
    //
    // observable.subscribe (
    //   next => console.log ( next ),
    //   error => console.error ( error ),
    //   () => {
    //     console.log ( 'ich habe fertig' );
    //   }
    // );

    this.list = [ ...userList ];
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
