import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserCoreComponent} from './components/user-core/user-core.component';
import {UserAddComponent} from './components/user-add/user-add.component';

const routes: Routes = [
  {
    path: '', component: UserCoreComponent, children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: UserListComponent},
      {path: 'add', component: UserAddComponent},
      {path: 'details/:id', component: UserDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
