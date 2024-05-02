import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
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
        retry(1)
      )
      .subscribe(value => {
        this.authorize = true
        this.router.navigateByUrl("")
      })
  }

  logout() {
    this.authorize = false 
    this.router.navigateByUrl("/login")
  }
}
