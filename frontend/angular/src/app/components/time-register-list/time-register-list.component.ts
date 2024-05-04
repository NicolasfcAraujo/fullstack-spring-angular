import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TimeRegisterService } from '../../services/time-register.service';
import { TimeRegister } from '../../interfaces/time-register';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-time-register-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-register-list.component.html',
  styleUrl: './time-register-list.component.css'
})
export class TimeRegisterListComponent implements OnDestroy, OnInit {

  @Input() userId!: string
  timeRegisters: TimeRegister[] = []
  timeRegisterSubscription!: Subscription

  constructor(private timeRegisterService: TimeRegisterService){
    
  }

  ngOnInit(): void {
    this.timeRegisterSubscription = this.timeRegisterService.findAllByUser(this.userId)
      .subscribe(value => {
        this.timeRegisters = value
      })
  }

  ngOnDestroy(): void {
    this.timeRegisterSubscription.unsubscribe()
  }
}
