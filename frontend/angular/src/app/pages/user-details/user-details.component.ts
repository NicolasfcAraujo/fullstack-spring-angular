import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TimeRegisterListComponent } from '../../components/time-register-list/time-register-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TimeRegisterListComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  userId: string
  loading: boolean = false
  detailsForm = new FormGroup({
    fullName: new FormControl("Full Name"),
    email: new FormControl("example@example.com"),
    document: new FormControl("123456789"),
    password: new FormControl("123"),
    role: new FormControl("Member"),
    department: new FormControl("Department"),
    type: new FormControl("COMMON")
  })

  constructor(private userService: UserService, private route: ActivatedRoute){
    this.userId = route.snapshot.paramMap.get("id") as string
    userService.findUser(route.snapshot.paramMap.get("id") as string).subscribe(value => {
      this.detailsForm.patchValue({
        fullName: value.fullName,
        email: value.email,
        document: value.document,
        password: value.password,
        role: value.role,
        department: value.department,
        type: value.type
      })
    })
  }

  editMember() {
    this.loading = true
    this.userService.updateUser(
      {
        fullName: this.detailsForm.value.fullName as string,
        email: this.detailsForm.value.email as string,
        document: this.detailsForm.value.document as string,
        password: this.detailsForm.value.password as string,
        role: this.detailsForm.value.role as string,
        department: this.detailsForm.value.department as string,
        type: this.detailsForm.value.type as "ADM" | "COMMON"
      },
      this.route.snapshot.paramMap.get("id") as string
    ).subscribe(() => {
      this.loading = false
    })
  }
}
