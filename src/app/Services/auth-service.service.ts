import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  login() {
    localStorage.setItem('loggedin', 'true');
    console.log('Logged in successfully!');
  }

  logout() {
    localStorage.setItem('loggedin', 'false');
    console.log('Logged out successfully!');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedin') === 'true';
  }
}
