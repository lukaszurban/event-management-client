import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../_model/user';
import {environment} from '../../environments/environment';
import {Event} from '../_model/event';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  public userEmitter: EventEmitter<User> = new EventEmitter();

  readonly apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.userEmitter = new EventEmitter();
  }

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

  addUsersEvent(userId: number, eventId: number): Observable<Event> {
    const url = this.apiUrl + '/users/' + userId + '/mark-presence';
    return this.http.post(url, eventId);
  }

  isUserLoggedIn(): boolean {
    if(localStorage.getItem('token') != null) {
      return true;
    }
    else {
      return false;
    }
  }

  public emitUser(user: User) {
    this.user = user;
    this.userEmitter.emit(user);
  }

  public getLoggedUser(): User {
    return this.user;
  }

  public hasRole(role: string): boolean {
    if (this.user && this.user.roles != null) {
      return this.user.roles.some(authority => authority === role);
    }
  }

  public isAdmin(): boolean {
    return this.hasRole('ROLE_ADMIN');
  }
}
