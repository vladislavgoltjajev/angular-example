import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserRoutingModule} from './user.routing.module';
import {UserService} from './services/user.service';
import {SharedModule} from '../shared/shared.module';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserCoreComponent} from './components/user-core/user-core.component';
import {UserAddComponent} from './components/user-add/user-add.component';

@NgModule({
  declarations: [
    UserCoreComponent,
    UserListComponent,
    UserDetailsComponent,
    UserAddComponent,
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
