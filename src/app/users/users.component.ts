import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {UserService} from '../_service/user.service';
import {UsersDataSource} from './users-datasource';
import {User} from '../_model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new UsersDataSource(this.userService);
  displayedColumns = ['data', 'contact', 'delete'];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  delete(user: User) {
    console.log(user.email);
    this.userService.delete(user.id)
      .subscribe(() => this.refresh());
  }

  refresh() {
    this.dataSource = new UsersDataSource(this.userService);
  }

}
