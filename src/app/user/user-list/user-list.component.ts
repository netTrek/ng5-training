import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'bm-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {

  @ViewChild (UserComponent)
  user: UserComponent;

  @ViewChildren (UserComponent)
  users: QueryList<UserComponent>;

  @ViewChild ('listheader')
  listheader: ElementRef;

  constructor( ) { }

  ngOnInit() {
  }

  ngAfterViewInit (): void {
    console.log( this.user, this.users.toArray(), this.listheader  );
    // this.listheader.nativeElement.style.backgroundColor = 'red';
  }
}
