import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ErrorMessageComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  hasTestAdmin: boolean = false
  loading: boolean = false
  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })

  constructor(private authService: AuthService, private userService: UserService){
    userService.findAll().subscribe(all => {
      this.hasTestAdmin = all.filter(user => user.email == "admin@example.com").length > 0
    })
  }

  login(){
    this.authService.login(this.loginForm.value.email!, this.loginForm.value.password!)
  }

  loginAsADM() {
    if (this.hasTestAdmin) {
      this.authService.login("admin@example.com", "123")
    } else {
      this.loading = true
      this.userService.createUser({
        fullName: "Administrator User",
        email: "admin@example.com",
        password: "123",
        document: "123456789987",
        role: "HR Admin",
        department: "Human Resources",
        type: "ADM"
      })
      .subscribe({
        next: value => {
          this.loading = false
          this.authService.login(value.email, value.password)
        }
      })
    }
  }

}
