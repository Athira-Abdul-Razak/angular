import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingForm: FormGroup;
  submitted = false;

  MethodList = [
    { code: 'UGTP', name: 'UPS Ground Third Party' },
    { code: 'UG', name: 'UPS Ground' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.shippingForm = this.fb.group({
      'shipping_method': ['', Validators.required],
      'shipping_cost': ['', Validators.required],
      'shipping_account_number': ['', Validators.required],
      'is_shipping_override': [false, Validators.required]

    });
  }

  onCheckboxChange(e: any) {
    if (e.target.checked) {
      this.shippingForm.get('is_shipping_override').setValue(true);
      this.shippingForm.get('shipping_cost').disable();
    }
    else {
      this.shippingForm.get('is_shipping_override').setValue(false);
      this.shippingForm.get('shipping_cost').enable();
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.shippingForm.get('shipping_method').value === 'UGTP') {
      this.shippingForm.get('shipping_account_number').enable();
    }
    else {
      this.shippingForm.get('shipping_account_number').disable();
    }
    console.log(this.shippingForm.value);

  }
}