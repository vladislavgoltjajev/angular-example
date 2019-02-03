import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../../services/user.service';
import {filter, finalize, mergeMap} from 'rxjs/operators';
import * as _ from 'lodash';
import {User} from '../../interfaces/user/user';
import {UserForm} from '../../forms/user.form';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userForm: UserForm;
  loading: boolean = false;
  editMode: boolean = false;
  savingData: boolean = false;
  private _user: User;

  constructor(private _route: ActivatedRoute,
              private _userService: UserService,
              private _toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this._route.params
      .pipe(
        filter((params: Params) => !_.isNil(params['id'])),
        mergeMap((params: Params) => this._userService.getUser(+params['id'])),
      )
      .subscribe((user: User) => {
        this.userForm = new UserForm(user);
        this._user = user;
        this.loading = false;
      }, () => this.loading = false);
  }

  edit(): void {
    this.editMode = true;
  }

  cancelEdit(): void {
    this.editMode = false;
    this.userForm = new UserForm(this._user);
  }

  saveUser(): void {
    this.savingData = true;
    this.userForm.form.disable();
    this._userService.updateUser(this._user.id, this.userForm.form.value)
      .pipe(
        finalize(() => {
          this.savingData = false;

          if (this.userForm.form.disabled) {
            this.userForm.form.enable();
          }
        })
      )
      .subscribe((user: User) => {
        this.userForm = new UserForm(user);
        this._user = user;
        this.editMode = false;
        this._toastr.success('User updated');
      }, () => this._toastr.error('Error updating user'));
  }
}
