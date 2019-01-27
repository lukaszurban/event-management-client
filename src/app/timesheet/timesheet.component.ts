import {Component, OnInit} from '@angular/core';
import {UsersDataSource} from '../users/users-datasource';
import {UserService} from '../_service/user.service';
import {EventsDataSource} from '../events/events-datasource';
import {EventService} from '../_service/event.service';
import {User} from '../_model/user';
import {Event} from '../_model/event';
import {Observable} from 'rxjs';
import * as moment from 'moment';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {

  dataSourceUsers = new UsersDataSource(this.userService);
  dataSourceEvents = new EventsDataSource(this.eventService);
  displayedColumns = ['user', 'date'];
  users: User[] = [];
  events: Event[] = [];
  dataSource = new UsersDataSource(this.userService);

  constructor(private userService: UserService,
              private eventService: EventService,
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'check-circle',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/check_circle.svg'));
    iconRegistry.addSvgIcon(
      'uncheck-circle',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/uncheck_circle.svg'));
  }

  ngOnInit() {
    this.getUsers();
    this.getEvents();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => {
        events.map(e => e.date = moment(e.date).format('DD-MM-YYYY'));
        this.events = events;
      });
  }

  isUserPresent(user: User, eventId: number) {
    return user.events
      .map(event => event.id)
      .some(id => id === eventId);
  }

}
