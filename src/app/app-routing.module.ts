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
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: 'tasks',
     canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: TasksComponent,
      },
      {
        path: 'employee-table',
        children: [
          {
            path: '',
            component: EmployeeTableComponent,

          },
          {
            path: ':id',
            component: ViewUrlComponent,
          }
        ]
      },
      {
        path: 'contact-form',
        component: ContactFormComponent,

      },
      {
        path: 'register-form',
        component: RegisterFormComponent,

      },
      {
        path: 'shipping-form',
        component: ShippingComponent,

      },
      {
        path: 'login-form',
        component: LoginFormComponent,

      },
      {
        path: 'book-table',
        component: BookTableComponent,
      },
      {
        path: 'street-address-form',
        component: StreetAddressFormComponent,
      },
      {
        path: 'profile-form',
        component: ProfileFormComponent,
      },
    ]
  },
  {
    path: '', redirectTo: '/sign-in',
    pathMatch: 'full',
  },
  {
    path: 'sign-in',
    component: LoginComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }