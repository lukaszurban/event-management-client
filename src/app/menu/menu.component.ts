import {Component, Input, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {UserService} from '../_service/user.service';
import {AuthenticationService} from '../_service/authentication.service';
import {User} from '../_model/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Input()
  loggedUser: User;
  isAdmin: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router,
              private userService: UserService,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.userService.userEmitter.subscribe(user => {
      this.loggedUser = user;
      this.isAdmin = this.userService.isAdmin();
      // if (!user) {
      //   this.loggedUser = this.userService.getLoggedUser();
      // }
    });
  }

  logout(): void {
   this.authService.logout();
  }

}
