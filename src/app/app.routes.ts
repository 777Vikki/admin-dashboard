import { Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },
    {
        path: 'dashboard',
        canActivate: [authGuard],
        loadComponent: () =>
            import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: 'employee/:id',
        canActivate: [authGuard],
        loadComponent: () =>
            import('./pages/edit-employee/edit-employee.component').then(m => m.EditEmployeeComponent)
    },
    {
        path: 'employee/edit/:id',
        canActivate: [authGuard],
        loadComponent: () =>
            import('./pages/edit-employee/edit-employee.component').then(m => m.EditEmployeeComponent)
    },
    {
        path: 'add-employee',
        canActivate: [authGuard],
        loadComponent: () =>
            import('./pages/add-employee/add-employee.component').then(m => m.AddEmployeeComponent)
    },
];
