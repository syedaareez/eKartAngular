import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  authservice=inject(AuthServiceService)
  router=inject(Router);

  logout(){
    this.authservice.logout();
    this.router.navigate(['Login']);
  }

}

