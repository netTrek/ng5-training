import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

@Injectable ()
export class UserService {

  readonly endpoint = 'http://localhost:3000/users';

  userList: User[];

  constructor ( private $http: HttpClient ) {

      this.updateList ();

  }
  getList (): Observable<User[]> {
    // das nicht tippen
    const params: HttpParams = new HttpParams().set( 'token', 'Saban Ünlü - netTrek' );
    // das wieder tippen
    return this.$http.get<User[]>( this.endpoint );
  }

  updateList () {
    this.getList ()
        .first()
        .subscribe( next => {
          this.userList = next;
        });
  }

}
