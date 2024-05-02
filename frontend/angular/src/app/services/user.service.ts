import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../interfaces/user';
import { UserDTO } from '../interfaces/user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<User[]>(`${environment.api}/users`)
  }

  findUser(id: string) {
    return this.http.get<User>(`${environment.api}/users/${id}`)
  }

  createUser(args: UserDTO) {
    return this.http.post<User>(`${environment.api}/users`, {
      fullName: args.fullName,
      email: args.email,
      document: args.document,
      password: args.password,
      role: args.role,
      department: args.department,
      type: args.type
    })
  }

  updateUser(args: UserDTO, id: string) {
    return this.http.patch<User>(`${environment.api}/users/${id}`, {
      fullName: args.fullName,
      email: args.email,
      document: args.document,
      password: args.password,
      role: args.role,
      department: args.department,
      type: args.type
    })
  }

  deleteUser(id: string) {
    return this.http.delete<string>(`${environment.api}/users/${id}`)
  }
}
