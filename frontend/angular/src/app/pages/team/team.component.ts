import { Component, OnInit } from '@angular/core';
import { EmployeeCardComponent } from '../../components/employee-card/employee-card.component';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, EmployeeCardComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnInit {

  members: User[] = []
  $members: Observable<User[]>

  constructor(private userService: UserService) {
    
    this.$members = userService.findAll()
  }

  ngOnInit(): void {
    this.$members
      .pipe(

      )
      .subscribe(value => {
        this.members = value
      })
  }
}
