import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { CommonUiModule } from '../common-ui/common-ui.module';
import { UserService } from './user.service';
import { UserViewComponent } from './user-view/user-view.component';
import { UserDetailViewComponent } from './user-detail-view/user-detail-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CommonUiModule,
    RouterModule
  ],
  providers: [UserService],
  declarations: [UserComponent, UserListComponent, UserGroupComponent, UserViewComponent, UserDetailViewComponent],
  exports: [UserComponent, UserListComponent, UserGroupComponent, UserViewComponent, UserDetailViewComponent]
})
export class UserModule { }
