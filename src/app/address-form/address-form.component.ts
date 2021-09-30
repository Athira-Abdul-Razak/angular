import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})

export class AddressFormComponent implements OnInit {
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  address: FormGroup;
  billingInformationData: FormGroup;
  shippingInformationData: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.address = this.fb.group({
      'contact_information': this.fb.group({
        'first_name': ['', Validators.required],
        'last_name': ['', Validators.required],
        'email': ['', Validators.required],
        'phone': ['', Validators.required],
      }),
      'billing_information': this.billingInformationData,
      'shipping_information': this.shippingInformationData
    });
  }

  onSubmit() {
    console.log(this.address);
  }

}