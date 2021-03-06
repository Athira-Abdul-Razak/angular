import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RegisterFormComponent } from './address-form/register-form.component';
import { ShippingComponent } from './shipping/shipping.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BookTableComponent } from './book/book-table/book-table.component';
import { StreetAddressFormComponent } from './street-address-form/street-address-form.component';


const routes: Routes = [{ path: 'Contact-Form', component: ContactFormComponent },
{ path: 'Register-Form', component: RegisterFormComponent },
{ path: 'Shipping-Form', component: ShippingComponent },
{ path: 'Login-Form', component: LoginFormComponent },
{ path: 'Book-Table', component: BookTableComponent },
{ path: 'Street-Address-Form', component: StreetAddressFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }