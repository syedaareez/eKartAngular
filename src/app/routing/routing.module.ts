import { AuthServiceService } from './../Services/auth-service.service';
import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ProductsComponent } from '../products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';
import { LoginComponent } from '../login/login.component';
import { CartComponent } from '../cart/cart.component';
import { authGuard } from '../auth.guard';


const routes:Routes=[
  {path:"",redirectTo:"Home",pathMatch:'full'},
  {path:"Home",component:HomeComponent},
  {path:"About",component:AboutComponent},
  {path:"Contact",component:ContactComponent},
  {path:"Products",component:ProductsComponent},
  {path:"Cart",component:CartComponent,canActivate:[authGuard]},
  {path:"Login",component:LoginComponent},
  {path:"**",component:NotfoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
