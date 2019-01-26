import {Event} from './event';


export interface User {
  id?: number;
  login?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  roles?: string[];
  events?: Event[];
  token?: string;
}
