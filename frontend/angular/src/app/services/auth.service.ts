import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authorize: boolean = false

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    const $login = this.httpClient.post<User>(
      `${environment.api}/users/login`,
      {
        email,
        password
      }
    )

    $login
      .pipe(
        retry(2)
      )
      .subscribe(value => {
        localStorage.setItem("id", value.id)
        localStorage.setItem("fullName", value.fullName)
        localStorage.setItem("email", value.email)
        localStorage.setItem("document", value.document)
        localStorage.setItem("password", value.password)
        localStorage.setItem("role", value.role)
        localStorage.setItem("department", value.department)
        localStorage.setItem("type", value.type)
        this.authorize = true
        this.router.navigateByUrl("")
      })
  }

  logout() {
    localStorage.removeItem("id")
    localStorage.removeItem("fullName")
    localStorage.removeItem("email")
    localStorage.removeItem("document")
    localStorage.removeItem("password")
    localStorage.removeItem("role")
    localStorage.removeItem("department")
    localStorage.removeItem("type")
    this.authorize = false 
    this.router.navigateByUrl("/login")
  }

  isAdmin(){
    return localStorage.getItem("type") == "ADM"
  }
}
