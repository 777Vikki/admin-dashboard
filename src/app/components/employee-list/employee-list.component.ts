import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';
import { Router, RouterModule } from '@angular/router';
import { IEmployee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  imports: [NgFor, RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {
employees: IEmployee[] = [];

  constructor(private empService: EmployeeService,
    private router: Router) {}

  ngOnInit() {
    this.employees = this.empService.getEmployees();
  }

  showDetails(emp: any) {
    this.router.navigate(['/employee', emp.id]);
  }

  editEmployee(emp: any) {
  this.router.navigate(['/employee/edit', emp.id]);
}

  deleteEmployee(id: number) {
    const confirmDelete = confirm('Are you sure you want to delete this employee?');
    if (confirmDelete) {
      this.empService.deleteEmployee(id);
      this.employees = this.empService.getEmployees();
    }
  }
}
