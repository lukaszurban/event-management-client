import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsComponent} from './events/events.component';
import {UsersComponent} from './users/users.component';
import {TimesheetComponent} from './timesheet/timesheet.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'events', component: EventsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'timesheet', component: TimesheetComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
