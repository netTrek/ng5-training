import {
  AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild,
  ViewChildren
} from '@angular/core';
import { UserComponent } from '../user/user.component';
import { User } from '../user';

@Component({
  selector: 'bm-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit, OnChanges {


  private _bool: boolean;

  @Input()
  userList: User[] = [];

  selectedUsr: User;

  get bool (): boolean {
    return this._bool;
  }
  @Input()
  set bool ( value: boolean ) {
    this._bool = String(value) === 'true';
  }

  @Input()
  icon = 'fa-list';

  @Input()
  num: number;


  @ViewChild (UserComponent)
  user: UserComponent;

  @ViewChildren (UserComponent)
  users: QueryList<UserComponent>;

  @ViewChild ('listheader')
  listheader: ElementRef;

  constructor( ) { }

  setSelectedUsr ( selectedUsr: User ) {
    this.selectedUsr = selectedUsr;
  }

  ngOnInit() {
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    console.log ( changes );
  }

  ngAfterViewInit (): void {
    console.log( this.user, this.users.toArray(), this.listheader  );
    // this.listheader.nativeElement.style.backgroundColor = 'red';

    console.log( this.bool === true );
  }
}
