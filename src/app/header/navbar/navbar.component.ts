import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  loggedInFlag:Boolean=false;
  checkInitialValue:Boolean;

  authservice=inject(AuthServiceService)
  router=inject(Router);

  logout(){
    this.authservice.logout();
    this.router.navigate(['Login']);
  }

  ngOnInit() {
    this.checkInitialValue=JSON.parse(localStorage.getItem('loggedin')||'false')
    this.loggedInFlag=this.checkInitialValue;
    this.authservice.loginflagchangesubject.subscribe((flag)=>{
      this.loggedInFlag=flag;
    })
  }

}

