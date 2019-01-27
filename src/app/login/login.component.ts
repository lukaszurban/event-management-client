import { Component, OnInit } from '@angular/core';
import {LoginService} from '../_service/login.service';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {AuthenticationService} from '../_service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private username: FormControl;
  private password: FormControl;

  constructor(private authService: AuthenticationService,
              private router: Router,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.initForm();
  }

  login() {
    this.authService.login(this.loginForm.value);
      // .subscribe(token => {
      //   console.log(token);
      //   localStorage.setItem('token', token);
      // },
      //   () => this.openNotification('Sign-up failed!'),
      //   () => this.router.navigate(['/events', {signin: true}])
      //   );
  }

  initForm(): void {
    this.username = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(3)])

    this.loginForm = new FormGroup({
     username: this.username,
      password: this.password
    });
  }


  getUsernameErrorMessage(): String {
    return this.username.hasError('required') ? 'You must enter a username' :
      this.username.hasError('minlength') ? 'Username must have at least 3 characters' :
        '';
  }

  getPasswordErrorMessage(): String {
    return this.password.hasError('required') ? 'You must enter a password' :
      this.password.hasError('minlength') ? 'Password must have at least 3 characters' :
        '';
  }

  openNotification(message: string) {
    this.snackBar.open(message, null, {
      duration: 3000,
    });
  }

}
