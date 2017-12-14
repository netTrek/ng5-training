import { Component, OnInit } from '@angular/core';
import { ErrorMsgService } from '../error-msg.service';

@Component({
  selector: 'bm-error-view',
  templateUrl: './error-view.component.html',
  styleUrls: ['./error-view.component.scss']
})
export class ErrorViewComponent implements OnInit {

  constructor( public $err: ErrorMsgService ) { }

  ngOnInit() {
  }

  reset() {
    this.$err.errorBotschaft$.next( null );
  }

}
