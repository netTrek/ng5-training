import { AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'bm-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterContentInit {

  @ContentChild (UserComponent)
  user: UserComponent;

  @ContentChildren (UserComponent)
  users: QueryList<UserComponent>;

  constructor( ) { }

  ngOnInit() {
  }

  ngAfterContentInit (): void {
    console.log( this.user, this.users.toArray()  );
  }
}
