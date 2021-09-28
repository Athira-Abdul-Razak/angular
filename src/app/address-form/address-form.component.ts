import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  addressForm: FormGroup;
  ngOnInit() {
    this.addressForm = new FormGroup({
      'firstname': new FormControl(null),
      'lastname': new FormControl(null),
      'email': new FormControl(null),
      'phone': new FormControl(null),
    });
  }
  onSubmit() {}


}