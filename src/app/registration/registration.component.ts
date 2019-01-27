import { Component, OnInit } from '@angular/core';
import {User} from '../_model/user';
import {LoginService} from '../_service/login.service';
import {Router} from '@angular/router';
import {Event} from '../_model/event';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../_service/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  model: User = {};
  private registerForm: FormGroup;
  private login: FormControl;
  private firstName: FormControl;
  private lastName: FormControl;
  private email: FormControl;
  private password: FormControl;

  constructor(private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  register(): void {
    // this.loginService.register(this.model)
    this.authService.register(this.registerForm.value)
      .subscribe((res) => console.log(res),
        null,
        () => this.router.navigate(['/login', {successRegister: true}]));
  }

  initForm(): void {
    this.login = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.firstName = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.lastName = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.email = new FormControl('', [Validators.required, Validators.minLength(5), Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(3)]);

    this.registerForm = new FormGroup({
      login: this.login,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    });
  }

  getUsernameErrorMessage(): String {
    return this.login.hasError('required') ? 'You must enter a username' :
      this.login.hasError('minlength') ? 'Username must have at least 3 characters' :
        '';
  }

  getFirstNameErrorMessage(): String {
    return this.firstName.hasError('required') ? 'You must enter a first name' :
      this.firstName.hasError('minlength') ? 'First name must have at least 3 characters' :
        '';
  }

  getLastNameErrorMessage(): String {
    return this.lastName.hasError('required') ? 'You must enter a last name' :
      this.lastName.hasError('minlength') ? 'Last name must have at least 3 characters' :
        '';
  }

  getEmailErrorMessage(): String {
    return this.login.hasError('required') ? 'You must enter a email' :
      this.email.hasError('minlength') ? 'Email must have at least 3 characters' :
        this.email.hasError('email') ? 'Incorrect email' :
        '';
  }

  getPasswordErrorMessage(): String {
    return this.password.hasError('required') ? 'You must enter a password' :
      this.password.hasError('minlength') ? 'Password must have at least 3 characters' :
        '';
  }

}
