import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../interfaces/user/user';
import {ActivatedRoute, Params} from '@angular/router';
import {filter, mergeMap} from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  user: User;

  constructor(private _route: ActivatedRoute,
              private _userService: UserService) {
  }

  ngOnInit(): void {
    this._route.params
      .pipe(
        filter((params: Params) => !_.isNil(params['id'])),
        mergeMap((params: Params) => this._userService.getUser(+params['id']))
      )
      .subscribe((user: User) => this.user = user);
  }
}
