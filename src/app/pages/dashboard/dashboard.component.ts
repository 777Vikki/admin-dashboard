import { Component } from '@angular/core';
import { EmployeeListComponent } from '../../components/employee-list/employee-list.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [EmployeeListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
  constructor(private authService: AuthService, private router: Router) {}
  
  logout() {
    this.authService.logout();
    this.router.navigate(["/sign-in"]);
  }
}
