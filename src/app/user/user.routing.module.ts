import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserComponent} from './user.component';
import {UserViewComponent} from './components/user-details/user-view/user-view.component';
import {UserEditComponent} from './components/user-details/user-edit/user-edit.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: UserListComponent},
      {
        path: 'details/:id', component: UserDetailsComponent, children: [
          {path: '', component: UserViewComponent},
          {path: 'edit', component: UserEditComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
