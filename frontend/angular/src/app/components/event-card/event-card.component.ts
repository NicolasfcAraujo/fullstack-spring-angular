import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  @Output() itemDeleted = new EventEmitter<string>()
  @Input() title: string = "Tile extend to demonstrate the event created"
  @Input() host: string = "Host"
  @Input() date: Date = new Date()
  @Input() start: Date = new Date()
  @Input() end: Date = new Date()
  @Input() id: string = ""
  isADM: boolean = localStorage.getItem("type") == "ADM"

  constructor(private eventService: EventService, private router: Router){}

  delete(){
    this.eventService.deleteEvent(this.id)
      .subscribe(() => {
        this.itemDeleted.emit(this.id)
      })
  }

}
