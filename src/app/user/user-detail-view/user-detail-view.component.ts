import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'bm-user-detail-view',
  templateUrl: './user-detail-view.component.html',
  styleUrls: ['./user-detail-view.component.scss']
})
export class UserDetailViewComponent implements OnInit, OnDestroy {


  user: User;

  private subscription: Subscription;
  private userSub: Subscription;

  constructor( private route: ActivatedRoute, $user: UserService ) {
    console.log ( 'constructor' );
    this.subscription = this.route.paramMap
      .map( paramMap => paramMap.get( 'id') )
      .subscribe( id => {
        this.userSub = $user.getUsrById( Number(id) ). subscribe(
          next => this.user = next
        );
      }, null , () => {
        console.log ( 'bye-bye' );
      });

  }

  ngOnInit() {
  }

  ngOnDestroy (): void {
    this.subscription.unsubscribe();
    this.userSub.unsubscribe();
  }

}
