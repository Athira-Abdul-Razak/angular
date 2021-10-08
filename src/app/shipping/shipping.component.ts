import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})

export class ShippingComponent implements OnInit {
  shippingForm: FormGroup;
  submitted: boolean;
  methodList = [
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
      'shipping_account_number': [{ value: '', disabled: true }, Validators.required],
      'is_shipping_override': [false,]
    });
  }

  onCheckboxChange(e: any) {
    if (e.target.checked) {
      this.shippingForm.get('shipping_cost').disable();
    }
    else {
      this.shippingForm.get('shipping_cost').enable();
    }
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.shippingForm.value);
  }

  onShippingMethodChange() {
    if (this.shippingForm.get('shipping_method').value === 'UGTP') {
      this.shippingForm.get('shipping_account_number').enable();
    }
    else {
      this.shippingForm.get('shipping_account_number').disable();
    }

  }

}