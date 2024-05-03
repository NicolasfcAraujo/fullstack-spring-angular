import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-member',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.css'
})
export class AddMemberComponent {
  
  addMemberForm = new FormGroup({
    fullName: new FormControl(""),
    email: new FormControl(""),
    document: new FormControl(""),
    password: new FormControl(""),
    role: new FormControl(""),
    department: new FormControl(""),
    type: new FormControl("COMMON")
  })

  constructor(private userService: UserService, private router: Router){}

  createUser(){
    this.userService.createUser({
      fullName: this.addMemberForm.value.fullName as string,
      email: this.addMemberForm.value.email as string,
      document: this.addMemberForm.value.document as string,
      password: this.addMemberForm.value.password as string,
      role: this.addMemberForm.value.role as string,
      department: this.addMemberForm.value.department as string,
      type: this.addMemberForm.value.type as "ADM" | "COMMON"
    }).subscribe(() => {
      this.router.navigateByUrl("/team")
    })
  }
}
