import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {
  submitted=false;
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  shipping = true;
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
      'name': ['', [Validators.required]],
      'address_1': ['', [Validators.required]],
      'address_2': ['', ],
      'city': ['', [Validators.required]],
      'state': ['', [Validators.required]],
      'zip': ['', [Validators.required]],
      'country': ['', [Validators.required]],
      'phone': ['', [Validators.required]],
    });
  }

  get billingAddressForm() {
    return this.registerForm.get('billing_address') as FormGroup;
  }
  get shippingAddressForm() {
    return this.registerForm.get('shipping_address') as FormGroup;
  }

  onCheckboxChange(e: any) {
    if (e.target.checked) {
      this.shipping = false;
      this.shippingAddressForm.setValue(this.billingAddressForm.value);
    }
    else {
      this.shipping = true;
      this.shippingAddressForm.reset();
    }
  }
  onSubmit() {
    this.submitted=true;
    console.log(this.registerForm.value);
  }
}