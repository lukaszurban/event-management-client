import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './_modules/material/material.module';
import {HttpClientModule} from '@angular/common/http';
import {MenuComponent} from './menu/menu.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {EventsComponent} from './events/events.component';
import {UsersComponent} from './users/users.component';
import {AddEventComponent} from './events/add-event/add-event.component';
import {FormsModule} from '@angular/forms';
import {TimesheetComponent} from './timesheet/timesheet.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EventsComponent,
    UsersComponent,
    AddEventComponent,
    TimesheetComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddEventComponent
  ]
})
export class AppModule {
}
