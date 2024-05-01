import { Component } from '@angular/core';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  title: string = "Tile extend to demonstrate the event created"
  host: string = "Host"
  date: string = "2024-05-06"
  start: string = "13:00:00"
  end: string = "15:00:00"

}
