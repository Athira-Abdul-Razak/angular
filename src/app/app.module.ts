import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { AppRoutingModule } from './app-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RegisterFormComponent } from './address-form/register-form.component';
import { AddressFormComponent } from './address-form/address-form/address-form.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ValidationComponent } from './shared/app-validation/app-validation.component';
import { ValidationDirective } from './validation.directive';
import { LoginFormComponent } from './login-form/login-form.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookTableComponent } from './book/book-table/book-table.component';
import { PricePipe } from './pipes/price.pipe';
import { StreetAddressFormComponent } from './street-address-form/street-address-form.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    RegisterFormComponent,
    AddressFormComponent,
    ShippingComponent,
    ValidationComponent,
    ValidationDirective,
    LoginFormComponent,
    BookFormComponent,
    BookTableComponent,
    PricePipe,
    StreetAddressFormComponent,
    ProfileFormComponent,

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, NgbModule,
    TextMaskModule,NgSelectModule, HttpClientModule,
    ],
  providers: [PricePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}