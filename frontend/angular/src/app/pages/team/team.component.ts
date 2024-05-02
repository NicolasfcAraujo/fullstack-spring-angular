import { Component } from '@angular/core';
import { EmployeeCardComponent } from '../../components/employee-card/employee-card.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [EmployeeCardComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

}
