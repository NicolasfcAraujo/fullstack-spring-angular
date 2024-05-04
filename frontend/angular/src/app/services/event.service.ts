import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { EventComplete } from '../interfaces/event-complete';
import { EventDTO } from '../interfaces/event-dto';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<EventComplete[]>(`${environment.api}/events`)
  }

  findEvent(id: string) {
    return this.http.get<EventComplete>(`${environment.api}/events/${id}`)
  }

  createEvent(args: EventDTO) {
    return this.http.post<EventComplete>(`${environment.api}/events`, args)
  }

  updateEvent(args: EventDTO, id: string) {
    return this.http.patch<EventComplete>(`${environment.api}/events/${id}`, args)
  }

  deleteEvent(id: string){
    return this.http.delete<void>(`${environment.api}/events/${id}`)
  }
}
