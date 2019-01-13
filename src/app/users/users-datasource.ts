import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {User} from '../_model/user';
import {UserService} from '../_service/user.service';

export class UsersDataSource extends DataSource<User> {


  constructor(private userService: UserService) {
    super();
  }

  connect(): Observable<User[]> {
    return this.userService.getUsers();
  }

  disconnect() {
  }

}
