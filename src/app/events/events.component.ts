import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';
import {EventService} from '../_service/event.service';
import {EventsDataSource} from './events-datasource';
import {AddEventComponent} from './add-event/add-event.component';
import {UserService} from '../_service/user.service';
import {EditEventComponent} from './edit-event/edit-event.component';
import {Event} from '../_model/event';
import {User} from '../_model/user';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('search') search: ElementRef;

  @Input()
  loggedUser: User;
  isAdmin: boolean;

  dataSource = new EventsDataSource(this.eventService);
  displayedColumns = ['name', 'description', 'presence'];

  constructor(private eventService: EventService,
              private userService: UserService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loggedUser = this.userService.getLoggedUser();
    this.isAdmin = this.userService.isAdmin();
    if (this.isAdmin) {
      this.displayedColumns.push('edit', 'delete');
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddEventComponent, {
      width: '600px'
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.eventService.add(result.data)
        .subscribe(() => this.refresh());
    });
  }

  edit(event: Event): void {
    let dialogRef = this.dialog.open(EditEventComponent, {
      width: '600px',
      data: {
        event: event
      }
    });

    dialogRef.componentInstance.event.subscribe((result) => {
      if (this.formChanged(result.data, event)) {
        this.eventService.edit(result.data)
          .subscribe(() => this.refresh());
      }
    });
  }

  delete(deleteEvent: Event): void {
    this.eventService.delete(deleteEvent.id)
      .subscribe(() => this.refresh());
  }

  markPresence(event: Event) {
    this.userService.addUsersEvent(this.loggedUser.id, event.id)
      .subscribe(() => this.refresh());
  }

  isPresence(event: Event): boolean {
    if (!this.loggedUser) {
      return false;
    }
    return this.loggedUser.events
      .map(event => event.id)
      .some(id => id === event.id);
  }

  isUserPresent(user: User, eventId: number) {
    return user.events
      .map(event => event.id)
      .some(id => id === eventId);
  }

  refresh() {
    this.dataSource = new EventsDataSource(this.eventService);
  }

  private formChanged(formEvent: any, event: Event) {
    if (formEvent.id === event.id &&
      formEvent.name === event.name &&
      formEvent.description === event.description &&
      formEvent.date === event.date &&
      formEvent.location === event.location) {
      return false;
    }
    return true;
  }
}






