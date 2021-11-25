import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RegisterFormComponent } from './address-form/register-form.component';
import { ShippingComponent } from './shipping/shipping.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BookTableComponent } from './book/book-table/book-table.component';
import { StreetAddressFormComponent } from './street-address-form/street-address-form.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { EmployeeTableComponent } from './Employee/employee-table/employee-table.component';
import { ViewUrlComponent } from './Employee/view-details/view-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';




const routes: Routes = [
  {
    path: 'contact-form',
    component: ContactFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '', redirectTo: '/sign-in',
     pathMatch: 'full'
   },


  {
    path: 'sign-in',
    component: LoginComponent

  },
  {
    path: 'register-form',
    component: RegisterFormComponent,
    // canActivate: [AuthGuardService],

  },
  {
    path: 'shipping-form',
    component: ShippingComponent,
    canActivate: [AuthGuardService],

  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService],

  },
  {
    path: 'book-table',
    component: BookTableComponent,
    canActivate: [AuthGuardService],

  },
  {
    path: 'street-address-form',
    component: StreetAddressFormComponent,
    canActivate: [AuthGuardService],

  },
  {
    path: 'profile-form',
    component: ProfileFormComponent,
    canActivate: [AuthGuardService],

  },

  {
    path: 'employee-table',
    children: [
      {
        path: '',
        component: EmployeeTableComponent,
        canActivate: [AuthGuardService],

      },
      {
        path: ':id',
        component: ViewUrlComponent,
        canActivate: [AuthGuardService],

      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }