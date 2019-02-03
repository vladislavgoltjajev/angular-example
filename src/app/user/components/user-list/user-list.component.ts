import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../interfaces/user/user';
import {catchError, finalize} from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  loading: boolean = false;

  constructor(private _userService: UserService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this._userService.getUsers()
      .pipe(
        catchError(() => this.users = []),
        finalize(() => this.loading = false)
      )
      .subscribe((users: User[]) => this.users = users);
  }
}
