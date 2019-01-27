import { Injectable } from '@angular/core';
import {User} from '../_model/user';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoginUser} from '../_model/loginUser';
import {environment} from '../../environments/environment';
import {UserService} from './user.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  readonly apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient,
              private userService: UserService,
              private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(loginUser: LoginUser) {
    const url = this.apiUrl + '/auth';
    this.http.post<User>(url, loginUser)
      .subscribe((response: any) => {
        // if (response) {
          const token: string = response.token;
          this.setToken(token);
          const user: User = response.user;
        this.userService.emitUser(user);
        this.router.navigate(['/events']);
        // }
      });
  }

  register(user: User): Observable<User> {
    const url = this.apiUrl + '/users';
    return this.http.post<User>(url, user);
  }

  logout() {
    localStorage.removeItem('token');
    this.userService.emitUser(null);
    this.router.navigate(['/login']);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
}
