import {Injectable} from '@angular/core';
import {HttpService} from '../../shared/services/http.service';
import {Observable} from 'rxjs';
import {User} from '../interfaces/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpService: HttpService) {
  }

  getUsers(): Observable<User[]> {
    return this._httpService.get<User[]>('/users');
  }

  getUser(userId: number): Observable<User> {
    return this._httpService.get<User>('/users/' + userId);
  }

  addUser(user: User): Observable<User> {
    return this._httpService.post<User>('/users', user);
  }

  updateUser(userId: number, user: User): Observable<User> {
    return this._httpService.put<User>('/users/' + userId, user);
  }

  deleteUser(userId: number): Observable<object> {
    return this._httpService.delete<object>('/users/' + userId);
  }
}
