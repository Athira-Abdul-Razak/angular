import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { AppRoutingModule } from './app-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AddressFormComponent } from './address-form/address-form.component';

import { BillingFormComponent } from './address-form/billing-form/billing-form.component';

import { ShippingFormComponent} from './address-form/shipping-form/shipping-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    AddressFormComponent,
    BillingFormComponent,
    ShippingFormComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, NgbModule,
    TextMaskModule,NgSelectModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}