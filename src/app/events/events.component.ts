import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {EventService} from '../_service/event.service';
import {EventsDataSource} from './events-datasource';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new EventsDataSource(this.eventService);
  displayedColumns = ['name', 'description'];

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
  }
}






