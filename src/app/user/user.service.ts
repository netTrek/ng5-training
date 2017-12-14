import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';

@Injectable ()
export class UserService {

  readonly endpoint = 'http://localhost:3000/users';

  userList: User[];

  constructor ( private $http: HttpClient ) {
    this.updateList ();
  }

  getList (): Observable<User[]> {
    // das nicht tippen
    const params: HttpParams   = new HttpParams ().set ( 'token', 'Saban Ünlü - netTrek' );
    const headers: HttpHeaders = new HttpHeaders ().set ( 'access', 'BEAR netTrek' );
    // das wieder tippen
    return this.$http.get<User[]> ( this.endpoint, { params, headers } );
  }

  getUsrById ( id: number ): Observable<User> {
    return this.$http.get<User> ( `${this.endpoint}/${id}` );
  }

  delUser ( usr: User): Observable<any> {
    return this.$http.delete<any> ( `${this.endpoint}/${usr.id}` )
               .do ( () => {
                 const index = this.userList.indexOf( usr );
                 if ( index !== -1 ) {
                   this.userList.splice( index, 1 );
                 }
               });
  }

  create ( user: User ): Observable<User> {
    return this.$http.post<User> ( this.endpoint, user )
      .do ( usr => {
        this.userList.push( usr );
      })
      ;
  }



  updateList () {
    this.getList ()
        .first()
        .subscribe( next => {
          this.userList = next;
        });
  }

}
