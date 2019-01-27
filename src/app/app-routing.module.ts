import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsComponent} from './events/events.component';
import {UsersComponent} from './users/users.component';
import {TimesheetComponent} from './timesheet/timesheet.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LoginComponent
  // },
  {
    path: 'events',
    pathMatch: 'full',
    component: EventsComponent
  },
  {
    path: 'users',
    pathMatch: 'full',
    component: UsersComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'timesheet',
    pathMatch: 'full',
    component: TimesheetComponent
  },
  {
    path: 'register',
    pathMatch: 'full',
    component: RegistrationComponent
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
