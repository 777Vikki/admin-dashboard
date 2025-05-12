import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee } from '../../models/employee.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-employee-detail',
  imports: [NgIf, RouterModule],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss'
})
export class EmployeeDetailComponent {
  employee?: IEmployee;

  constructor(private router: Router, private route: ActivatedRoute, private empService: EmployeeService) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employee = this.empService.getEmployeeById(id);
  }
}
