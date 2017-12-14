import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { UserDetailViewComponent } from './user/user-detail-view/user-detail-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeViewComponent
  },
  {
    path: 'users',
    component: UserViewComponent
  },
  {
    path: 'user/:id',
    component: UserDetailViewComponent
  },
  {
    path: 'contact',
    component: ContactViewComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
