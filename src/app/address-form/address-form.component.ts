import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})

export class AddressFormComponent implements OnInit {
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.fb.group({
      'contact_information': this.fb.group({
        'first_name': ['', Validators.required],
        'last_name': ['', Validators.required],
        'email': ['', Validators.required],
        'phone': ['', Validators.required],
      }),
      'billing_address': this.initAddressForm(),
      'shipping_address': this.initAddressForm()
    });
  }

  initAddressForm() {
    return this.fb.group({
      name: ['', [Validators.required]],
      address1: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phone: ['', [Validators.required]],


    });
  }

  onSubmit() {
    console.log(this.registerForm);
  }

}