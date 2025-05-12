import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee } from '../../models/employee.model';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-add-employee',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent implements OnInit {
   employeeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private empService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      dob: ['', Validators.required],
      doj: ['', Validators.required],
      married: ['', Validators.required]
    });
  }

  addEmployee() {
    if (this.employeeForm.valid) {
      const newEmployee: IEmployee = {
        ...this.employeeForm.value,
        id: this.empService.generateEmployeeId()
      };
      this.empService.addEmployee(newEmployee);
      this.router.navigate(['/dashboard']);
    }
  }
}
