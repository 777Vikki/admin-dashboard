import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;

  signIn(email: string, password: string): boolean {
    if(email && password) {
      this.isLoggedIn = true;
      localStorage.setItem("token", email + " - " + password);
      return true
    }
    // const user = localStorage.getItem('admin');
    // if (!user) return false;

    // const admin = JSON.parse(user);
    // if (admin.email === email && admin.password === password) {
    //   this.isLoggedIn = true;
    //   return true;
    // }
    return false;
  }

  signUp(email: string, password: string): void {
    this.isLoggedIn = true;
    localStorage.setItem("token", email + " - " + password);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn || localStorage.getItem("token")? true : false;
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.clear();
  }
}
