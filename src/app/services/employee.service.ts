import { Injectable } from '@angular/core';
import { IEmployee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: IEmployee[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      position: 'Frontend Developer',
      mobile: '9876543210',
      address: '123 Main Street, City',
      dob: '1992-04-15',
      doj: '2020-01-10',
      married: 'No'
    },
    {
      id: 2,
      name: 'Bob Smith',
      position: 'UI/UX Designer',
      mobile: '9876543211',
      address: '456 Market Road, City',
      dob: '1990-06-20',
      doj: '2019-07-01',
      married: 'Yes'
    },
    {
      id: 3,
      name: 'Charlie Brown',
      position: 'Project Manager',
      mobile: '9876543212',
      address: '789 Industrial Area, City',
      dob: '1988-02-28',
      doj: '2018-05-14',
      married: 'Yes'
    }
  ];

  employeeDetail(): IEmployee {
    return {
      id: 0,
      name: '',
      position: '',
      mobile: '',
      address: '',
      dob: '',
      doj: '',
      married: ''
    };
  }
  getEmployees(): IEmployee[] {
    return this.employees;
  }

  getEmployeeById(id: number): IEmployee | undefined {
    return this.getEmployees().find(e => e.id === id);
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(e => e.id !== id);
  }

  updateEmployee(updated: IEmployee) {
    const index = this.employees.findIndex(e => e.id === updated.id);
    if (index > -1) {
      this.employees[index] = { ...updated };
    }
  }

  generateEmployeeId(): number {
    return this.employees.length ? Math.max(...this.employees.map(e => e.id)) + 1 : 1;
  }

  addEmployee(emp: IEmployee) {
    this.employees.push(emp);
  }
}
