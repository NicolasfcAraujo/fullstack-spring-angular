import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {
  fullName: string = "Member Full Name"
  role: string = "Member"
  department: string = "Company"

  
}
