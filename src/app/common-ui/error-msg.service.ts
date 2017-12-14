import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ErrorMsgService {

  errorBotschaft$: BehaviorSubject<string> = new BehaviorSubject ( null );

  constructor( ) {}



}
