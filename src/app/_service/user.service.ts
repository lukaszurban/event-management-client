import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../_model/user';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const url = this.apiUrl + '/users';
    return this.http.get<User[]>(url);
  }

  update(user: User): Observable<User> {
    const url = this.apiUrl + '/users/' + user.id;
    return this.http.post<User>(url, user);
  }

  delete(userId: number): Observable<{}> {
    const url = this.apiUrl + '/users/' + userId + '/disable';
    return this.http.put(url, userId);
  }
}
