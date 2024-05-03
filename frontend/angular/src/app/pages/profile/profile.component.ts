import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileForm = new FormGroup({
    fullName: new FormControl(),
    email: new FormControl(),
    document: new FormControl(),
    password: new FormControl(),
    role: new FormControl(),
    department: new FormControl(),
    type: new FormControl("COMMON")
  })

  constructor(){
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
