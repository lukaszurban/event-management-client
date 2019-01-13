import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';
import {EventService} from '../_service/event.service';
import {EventsDataSource} from './events-datasource';
import {AddEventComponent} from './add-event/add-event.component';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('search') search: ElementRef;

  dataSource = new EventsDataSource(this.eventService);
  displayedColumns = ['name', 'description'];

  constructor(private eventService: EventService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
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

  refresh() {
    this.dataSource = new EventsDataSource(this.eventService);
  }
}






