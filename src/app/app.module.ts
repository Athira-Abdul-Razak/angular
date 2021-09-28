import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './contactform/contactform.component';
import { AddressformComponent } from './addressform/addressform.component';
import { BiilingComponent } from './biiling/biiling.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AddressformComponent,
    BiilingComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, NgbModule,
    TextMaskModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  }
