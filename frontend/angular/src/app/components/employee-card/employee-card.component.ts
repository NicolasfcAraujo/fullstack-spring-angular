import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {
  @Input() fullName: string = "Member Full Name"
  @Input() role: string = "Member"
  @Input() department: string = "Company"
  @Input() id: string = "" 

  constructor(private router: Router){}

  userDetails(){
    this.router.navigateByUrl(`/team/${this.id}`)
  }
}
