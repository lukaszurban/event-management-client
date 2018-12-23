import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './_modules/material/material.module';
import {HttpClientModule} from '@angular/common/http';
import {MainNavComponent} from './main-nav/main-nav.component';
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

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MenuComponent,
    EventsComponent,
    UsersComponent
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
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
