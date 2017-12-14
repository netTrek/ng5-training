import {
  Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { User } from '../user';
import { ErrorMsgService } from '../../common-ui/error-msg.service';

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
  user: User;

  @Input ()
  selectedUsr: User;

  @Output ()
  selected: EventEmitter<User> = new EventEmitter ();

  @HostBinding ( 'class.selected' )
  isSelected = false;

  @HostBinding ( 'style.color' )
  color: string | null = null;

  constructor ( public  $errMsg: ErrorMsgService ) {
  }

  @HostListener ( 'click', [ '$event',
                             'user'
  ] )
  clickMe ( evt: MouseEvent ) {
    this.selected.next ( this.user );
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    if ( !! changes.selectedUsr ) {
      this.isSelected = this.selectedUsr === this.user;
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
