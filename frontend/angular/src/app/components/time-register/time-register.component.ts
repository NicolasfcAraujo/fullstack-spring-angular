import { Component } from '@angular/core';

@Component({
  selector: 'app-time-register',
  standalone: true,
  imports: [],
  templateUrl: './time-register.component.html',
  styleUrl: './time-register.component.css'
})
export class TimeRegisterComponent {
  date: String
  hour: String

  constructor(){
    const today: Date = new Date()
    const clientTZ: number = today.getTimezoneOffset()
    const clientDate: Date = new Date()

    clientDate.setHours(today.getHours() - clientTZ / 60)

    this.date = clientDate.toISOString().split("T")[0]
    this.hour = clientDate.toISOString().split("T")[1].split(".")[0]
  }
}
