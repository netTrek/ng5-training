import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component ( {
  selector   : 'bm-user',
  templateUrl: './user.component.html',
  // template : `
  //   <hr>
  //   hello <br>
  //   <strong (click)="clickMe()">world</strong>
  //   <hr>
  // `,
  styleUrls  : [ './user.component.scss' ],
  // styles: [ `
  //
  //
  //
  //             strong {
  //               color: #000000;
  //             }
  //
  //           ` ]
  encapsulation: ViewEncapsulation.Emulated // Native
} )
export class UserComponent implements OnInit {

  @Input()
  name = 'unknown';

  @Output()
  selected: EventEmitter<string> = new EventEmitter();

  constructor () {
  }

  clickMe () {
    console.log ( `hello world ${this.name}` );
    this.selected.next( this.name );
  }

  ngOnInit () {
  }

}
