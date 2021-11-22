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

const routes: Routes = [{ path: 'Contact-Form', component: ContactFormComponent },
{ path: 'register-form', component: RegisterFormComponent },
{ path: 'shipping-form', component: ShippingComponent },
{ path: 'login-form', component: LoginFormComponent },
{ path: 'book-table', component: BookTableComponent },
{ path: 'street-address-form', component: StreetAddressFormComponent },
{ path: 'profile-form', component: ProfileFormComponent },
{ path: 'employee-table', component: EmployeeTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }