import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserComponent} from './user.component';
import {UserRoutingModule} from './user.routing.module';
import {UserService} from './services/user.service';
import {SharedModule} from '../shared/shared.module';
import {UserEditComponent} from './components/user-details/user-edit/user-edit.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserViewComponent} from './components/user-details/user-view/user-view.component';

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserDetailsComponent,
    UserEditComponent,
    UserViewComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  providers: [UserService]
})
export class UserModule {
}
