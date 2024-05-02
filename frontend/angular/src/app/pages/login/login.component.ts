import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loading: boolean = false
  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })

  constructor(private authService: AuthService, private userService: UserService){
    userService.findAll().subscribe(all => console.log(all))
  }

  login(){
    console.log(this.loginForm.value.email, this.loginForm.value.password)
    this.authService.login(this.loginForm.value.email!, this.loginForm.value.password!)
  }

  loginAsADM() {
    this.loading = true
    this.userService.createUser({
      fullName: "Administrator User",
      email: "admin@example.com",
      password: "123",
      document: "123456789987",
      role: "HR Admin",
      department: "Human Resources",
      type: "ADM"
    }).subscribe(value => {
      this.loading = false
      this.authService.login(value.email, value.email)
    })
  }
}
