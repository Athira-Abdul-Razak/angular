import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.css']
})

export class BillingFormComponent implements OnInit {
  countryList = [
    { code: 'I', name: 'India' },
    { code: 'USA', name: 'United States Of America' }
  ];
  stateList = [
    { code: 'AR', name: 'Arizona' },
    { code: 'AK', name: 'Alaska' }
  ]
  cityInfo: any[] = [];
  selectedCountry: any;
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  get f() { return this.registerForm.controls; }

  @Input() form: [];
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address1: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      website: ['', [Validators.required]],

    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.submitted) {
      alert('Great!!');
    }
  }

  onChangeCountry(value: any) {
    this.selectedCountry = value;
  }

}