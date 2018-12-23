import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsComponent} from './events/events.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {path: 'events', component: EventsComponent },
  {path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
