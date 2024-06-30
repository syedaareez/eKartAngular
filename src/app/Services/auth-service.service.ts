import { Injectable, inject } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  loggedInFlag:boolean;

  loginflagchangesubject=new Subject<any>();

  login() {
    localStorage.setItem('loggedin', 'true');
    this.loginflagchangesubject.next(true);
    console.log('Logged in successfully!');
  }

  logout() {
    localStorage.setItem('loggedin', 'false');
    this.loginflagchangesubject.next(false);
    console.log('Logged out successfully!');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedin') === 'true';
  }
}
