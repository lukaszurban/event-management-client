import {Event} from '@angular/router';

export interface User {
  id?: number;
  login?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  roles?: string[];
  events?: Event[];
}
