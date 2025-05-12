import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee } from '../../models/employee.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-employee',
  imports: [NgIf, FormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.scss'
})
export class EditEmployeeComponent implements OnInit {
employee?: IEmployee;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private empService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.employee = this.empService.employeeDetail();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = this.empService.getEmployeeById(id);
    if (found) {
      this.employee = { ...found };
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

  updateEmployee() {
    if(this.employee)
      this.empService.updateEmployee(this.employee);
    this.router.navigate(['/dashboard']);
  }
}
