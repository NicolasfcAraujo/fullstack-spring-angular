import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';

@Pipe({
  name: 'filterMember',
  standalone: true
})
export class FilterMemberPipe implements PipeTransform {

  transform(members: User[], name: string, role: string, department: string): User[] {
    return members.filter(member => {
      const hasName = member.fullName.toLowerCase().includes(name.toLowerCase());
      const hasRole = member.role.toLowerCase().includes(role.toLowerCase());
      const hasDepartment = member.department.toLowerCase().includes(department.toLowerCase());
  
      return hasName && hasRole && hasDepartment
    })
  }

}
