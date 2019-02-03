import {Component} from '@angular/core';
import {UserForm} from '../../forms/user.form';
import {UserService} from '../../services/user.service';
import {finalize} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {

  userForm: UserForm;
  savingData: boolean = false;

  constructor(private _userService: UserService,
              private _toastr: ToastrService) {
    this.userForm = new UserForm();
  }

  saveUser(): void {
    this.savingData = true;
    this.userForm.form.disable();
    this._userService.addUser(this.userForm.form.value)
      .pipe(
        finalize(() => {
          this.savingData = false;

          if (this.userForm.form.disabled) {
            this.userForm.form.enable();
          }
        })
      )
      .subscribe(() => {
        this._toastr.success('New user added');
      }, () => this._toastr.error('Error adding new user'));
  }
}
