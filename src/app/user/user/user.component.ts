import {
  Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component ( {
  selector     : 'bm-user',
  templateUrl  : './user.component.html',
  // template : `
  //   <hr>
  //   hello <br>
  //   <strong (click)="clickMe()">world</strong>
  //   <hr>
  // `,
  styleUrls    : [ './user.component.scss' ],
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
export class UserComponent implements OnInit, OnChanges {

  @Input ()
  name = 'unknown';

  @Input ()
  selectedUsrName: string;

  @Output ()
  selected: EventEmitter<string> = new EventEmitter ();

  @HostBinding ( 'class.selected' )
  isSelected = false;

  @HostBinding ( 'style.color' )
  color: string | null = null;

  constructor () {
  }

  @HostListener ( 'click', [ '$event',
                             'name'
  ] )
  clickMe ( evt: MouseEvent, name: string ) {
    console.log ( evt, name );
    this.selected.next ( this.name );
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    if ( !! changes.selectedUsrName ) {
      this.isSelected = this.selectedUsrName === this.name;
      this.color = this.isSelected ? 'blue' : null;
      // if ( this.isSelected ) {
      //   this.color = 'blue';
      // } else {
      //   this.color = null;
      // }
    }
  }

  ngOnInit () {
  }

}
