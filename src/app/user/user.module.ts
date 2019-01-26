import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserListItemComponent} from './components/user-list/user-list-item/user-list-item.component';
import {UserViewComponent} from './components/user-view/user-view.component';
import {UserComponent} from './user.component';
import {UserRoutingModule} from './user.routing.module';
import {UserService} from './services/user.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    UserListComponent,
    UserListItemComponent,
    UserViewComponent,
    UserComponent
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
