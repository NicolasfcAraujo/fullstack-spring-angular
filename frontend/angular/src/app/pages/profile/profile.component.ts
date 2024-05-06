import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TimeRegister } from '../../interfaces/time-register';
import { TimeRegisterService } from '../../services/time-register.service';
import { CommonModule } from '@angular/common';
import { TimeRegisterListComponent } from '../../components/time-register-list/time-register-list.component';
import { TimeRegisterComplete } from '../../interfaces/time-register-complete';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TimeRegisterListComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  userId: string = localStorage.getItem("id") as string
  timeRegisters: TimeRegister[] = []
  profileForm = new FormGroup({
    fullName: new FormControl(),
    email: new FormControl(),
    document: new FormControl(),
    password: new FormControl(),
    role: new FormControl(),
    department: new FormControl(),
    type: new FormControl("COMMON")
  })

  constructor(private timeRegisterService: TimeRegisterService){
    timeRegisterService.findAllByUser(localStorage.getItem("id") as string)
      .subscribe(value => {
        this.timeRegisters = value
      })

    this.profileForm.patchValue({
      fullName: localStorage.getItem("fullName"),
      email: localStorage.getItem("email"),
      document: localStorage.getItem("document"),
      password: localStorage.getItem("password"),
      role: localStorage.getItem("role"),
      department: localStorage.getItem("department"),
      type: localStorage.getItem("type")
    })
  }
}
