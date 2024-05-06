import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TimeRegister } from '../interfaces/time-register';
import { environment } from '../../environments/environment';
import { TimeRegisterDTO } from '../interfaces/time-register-dto';
import { map } from 'rxjs';
import { TimeRegisterComplete } from '../interfaces/time-register-complete';

@Injectable({
  providedIn: 'root'
})
export class TimeRegisterService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<TimeRegister[]>(`${environment.api}/time-registers`)
  }

  findAllByUser(id: string) {
    return (
      this.http.get<TimeRegisterComplete[]>(`${environment.api}/time-registers`)
        .pipe(
          map((timeRegisters) => {
            return timeRegisters.map((item): TimeRegister => {
              return {
                clockIn: item.clockIn,
                clockOut: item.clockOut,
                createdAt: item.createdAt,
                id: item.id,
                userId: item.user.id
              }
            }).filter(timeRegister => timeRegister.userId == id)
          })
        )
    )
  }

  findTimeRegister(id: string) {
    return this.http.get<TimeRegister>(`${environment.api}/time-registers/${id}`)
  }

  createTimeRegister(args: TimeRegisterDTO) {
    return this.http.post<TimeRegister>(`${environment.api}/time-registers`, {
      clockIn: args.clockIn,
      clockOut: args.clockOut,
      userId: args.userId
    })
  }

  updateTimeRegister(args: TimeRegisterDTO, id: string) {
    return this.http.patch<TimeRegister>(`${environment.api}/time-registers/${id}`, {
      clockIn: args.clockIn,
      clockOut: args.clockOut,
      userId: args.userId
    })
  }

  deleteTimeRegister(id: string) {
    return this.http.delete<string>(`${environment.api}/time-registers/${id}`)
  }

  getTodayTimeRegister(all: TimeRegister[]) {
    const today = new Date().toISOString().split("T")[0]
    return all.filter(timeRegister => timeRegister.clockIn.includes(today))
  }
}
