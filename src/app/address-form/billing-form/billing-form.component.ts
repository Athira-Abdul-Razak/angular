import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.css']
})

export class BillingFormComponent implements OnInit {
  @Input() RegisterFormValue: string;
  forms:FormGroup;

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
  @Input() registerForm: FormGroup;
  billingForm: FormGroup;
  submitted = false;
  parent: any;
  FormGroup: any;
  fb: any;

  constructor(private formBuilder: FormBuilder) { }

  get f() { return this.registerForm.controls; }

   form = '';

  ngOnInit() {
    this.forms = this.parent.forms;
    if (this. RegisterFormValue) {
      this.FormGroup = this.forms.get(this.RegisterFormValue) as FormGroup;
    }

    this.FormGroup.addControl('name',new FormControl('',Validators.required));
    this.FormGroup.addControl('name',new FormControl('',Validators.required));
    this.FormGroup.addControl('name',new FormControl('',Validators.required));
    this.FormGroup.addControl('name',new FormControl('',Validators.required));
    this.FormGroup.addControl('name',new FormControl('',Validators.required));

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