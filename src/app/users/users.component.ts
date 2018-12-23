import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {EventsDataSource} from '../events/events-datasource';
import {UserService} from '../_service/user.service';
import {UsersDataSource} from './users-datasource';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new UsersDataSource(this.userService);
  displayedColumns = ['data', 'contact'];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
