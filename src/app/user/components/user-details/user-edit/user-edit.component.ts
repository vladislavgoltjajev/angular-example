import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {filter, mergeMap} from 'rxjs/operators';
import * as _ from 'lodash';
import {User} from '../../../interfaces/user/user';
import {UserForm} from '../../../forms/user.form';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  userForm: UserForm;

  constructor(private _route: ActivatedRoute,
              private _userService: UserService) {
  }

  ngOnInit(): void {
    this._route.parent.params
      .pipe(
        filter((params: Params) => !_.isNil(params['id'])),
        mergeMap((params: Params) => this._userService.getUser(+params['id']))
      )
      .subscribe((user: User) => this.userForm = new UserForm(user));
  }
}
