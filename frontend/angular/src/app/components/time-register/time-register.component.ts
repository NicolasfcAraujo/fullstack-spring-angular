import { Component, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { TimeRegister } from '../../interfaces/time-register';
import { CommonModule } from '@angular/common';
import { TimeRegisterService } from '../../services/time-register.service';

@Component({
  selector: 'app-time-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-register.component.html',
  styleUrl: './time-register.component.css'
})
export class TimeRegisterComponent implements OnDestroy {
  timeRegister: TimeRegister = {
    id: "",
    createdAt: "",
    clockIn: "",
    clockOut: "",
    userId: ""
  }
  hasClockIn: boolean = false
  hasClockOut: boolean = false
  date: string = ""
  hour: string = ""
  updateSubscription: Subscription

  constructor(private timeRegisterService: TimeRegisterService){
    this.updateHour()

    timeRegisterService.findAllByUser(localStorage.getItem("id") as string)
      .subscribe(value => {
        const todayTimeRegister = timeRegisterService.getTodayTimeRegister(value)
        if (todayTimeRegister.length > 0) {
          this.timeRegister = todayTimeRegister[0]
          this.hasClockIn = true 
          if (todayTimeRegister[0].clockIn != todayTimeRegister[0].clockOut) this.hasClockOut = true
        }
      })

    const $update = interval(1000)
    this.updateSubscription = $update
      .subscribe(() => {
        this.updateHour()
      })
  }

  ngOnDestroy(): void {
    this.updateSubscription.unsubscribe()
  }

  updateHour(){
    const today: Date = new Date()
    const clientTZ: number = today.getTimezoneOffset()
    const clientDate: Date = new Date()

    clientDate.setHours(today.getHours() - clientTZ / 60)

    this.date = clientDate.toISOString().split("T")[0],
    this.hour = clientDate.toISOString().split("T")[1].split(".")[0]
  }

  setClockIn() {
    this.timeRegisterService.createTimeRegister({
      userId: localStorage.getItem("id") as string,
      clockIn: `${this.date}T${this.hour}`,
      clockOut: `${this.date}T${this.hour}`
    }).subscribe(value => {
      this.hasClockIn = true
      this.timeRegister.clockIn = value.clockIn
    })
  }

  setClockOut() {
    this.timeRegisterService.updateTimeRegister(
      {
        userId: localStorage.getItem("id") as string,
        clockIn: this.timeRegister.clockIn,
        clockOut: `${this.date}T${this.hour}`
      },
      this.timeRegister.id
    ).subscribe(value => {
      this.hasClockOut = true
      this.timeRegister.clockOut = value.clockOut
    })
  }

}
