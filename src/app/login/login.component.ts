import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authservice:AuthServiceService=inject(AuthServiceService);
  router=inject(Router);

  login() {
    this.authservice.login();
    this.router.navigate(['Cart'])
  }

}
