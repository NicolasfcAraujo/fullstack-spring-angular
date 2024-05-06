import { Component } from '@angular/core';
import { TimeRegisterComponent } from '../../components/time-register/time-register.component';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { EventService } from '../../services/event.service';
import { EventComplete } from '../../interfaces/event-complete';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, TimeRegisterComponent, EventCardComponent, ReactiveFormsModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {

  users: User[] = []
  events: EventComplete[] = []
  selectedEvent: EventComplete | undefined
  selectedEventId: string | null = null
  isADM: boolean = localStorage.getItem("type") == "ADM"
  isAdd: boolean = false
  eventForm = new FormGroup({
    title: new FormControl(""),
    eventStart: new FormControl(""),
    eventEnd: new FormControl(""),
  })
  participants: string[] = []

  constructor(private eventService: EventService, private userService: UserService){
    userService.findAll()
      .subscribe(value => {
        this.users = value.sort((a, b) => {
          if (a.department < b.department) {
            return -1;
          }
          if (a.department > b.department) {
            return 1;
          }
          return 0;
        })
      })
    eventService.findAll()
      .subscribe(value => {
        this.events = value
      })
  }

  openAddEvent() {
    this.isAdd = true
  }

  closeAddEvent() {
    this.isAdd = false
  }

  changeParticipants(id: string){
    if (!this.participants.includes(id)) {
      this.participants = [
        ...this.participants,
        id
      ]
    } else {
      this.participants = this.participants.filter(item => item != id)
    }
  }

  addEvent(){
    this.eventService.createEvent({
      title: this.eventForm.value.title!,
      eventStart: this.localDate(new Date(this.eventForm.value.eventStart!)),
      eventEnd: this.localDate(new Date(this.eventForm.value.eventEnd!)),
      hostId: localStorage.getItem("id")!,
      participantsIds: this.participants
    }).subscribe(value => {
      this.events = [
        ...this.events,
        value
      ]
      this.closeAddEvent()
    })
  }

  updateEvents(id: string) {
    this.events = this.events.filter(item => item.id != id)
    this.closeDetails()
  }

  openDetails(eventId: string) {
    this.selectedEvent = this.events.find(event => event.id == eventId)
  }

  closeDetails() {
    this.selectedEvent = undefined
  }

  localDate(date: Date){
    const clientTZ: number = date.getTimezoneOffset()
    const clientDate: Date = date

    clientDate.setHours(date.getHours() - clientTZ / 60)

    return clientDate
  }
}
