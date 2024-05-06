import { Component, OnInit } from '@angular/core';
import { EmployeeCardComponent } from '../../components/employee-card/employee-card.component';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FilterMemberPipe } from '../../pipes/filter-member.pipe';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, EmployeeCardComponent, ReactiveFormsModule, FilterMemberPipe],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnInit {

  members: User[] = []
  $members: Observable<User[]>
  filterForm = new FormGroup({
    name: new FormControl(""),
    role: new FormControl(""),
    department: new FormControl("")
  })

  constructor(private userService: UserService) {
    this.$members = userService.findAll()
  }

  ngOnInit(): void {
    this.$members
      .subscribe(value => {
        this.members = value
      })
  }

  filterMembers(member: User) {
    if (member.fullName.toLowerCase().includes(this.filterForm.value.name!.toLowerCase())) {
      return true
    }

    if (member.role.toLowerCase().includes(this.filterForm.value.role!.toLowerCase())) {
      return true
    }

    if (member.department.toLowerCase().includes(this.filterForm.value.name!.toLowerCase())) {
      return true
    }

    return false
  }
}
