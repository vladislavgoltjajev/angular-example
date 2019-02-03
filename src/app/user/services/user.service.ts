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

  addUser(userData: any): Observable<User> {
    return this._httpService.post<User>('/users', userData);
  }

  updateUser(userId: number, userData: any): Observable<User> {
    return this._httpService.put<User>('/users/' + userId, userData);
  }

  deleteUser(userId: number): Observable<object> {
    return this._httpService.delete<object>('/users/' + userId);
  }
}
