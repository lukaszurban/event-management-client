import {DataSource} from '@angular/cdk/collections';
import {Event} from '../_model/event';
import {Observable} from 'rxjs';
import {EventService} from '../_service/event.service';

export class EventsDataSource extends DataSource<Event> {

  constructor(private eventService: EventService) {
    super();
  }

  connect(): Observable<Event[]> {
    return this.eventService.getEvents();
  }

  disconnect() {
  }
}
