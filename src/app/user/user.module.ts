import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { CommonUiModule } from '../common-ui/common-ui.module';

@NgModule({
  imports: [
    CommonModule,
    CommonUiModule
  ],
  declarations: [UserComponent, UserListComponent, UserGroupComponent],
  exports: [UserComponent, UserListComponent, UserGroupComponent]
})
export class UserModule { }
