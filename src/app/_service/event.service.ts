import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Event} from '../_model/event';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  readonly apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getEvents(): Observable<Event[]> {
    const url = this.apiUrl + '/events';
    return this.http.get<Event[]>(url);
  }

  add(eventCreate: Event): Observable<Event> {
    const url = this.apiUrl + '/events';
    return this.http.post<Event>(url, eventCreate);
  }

}
