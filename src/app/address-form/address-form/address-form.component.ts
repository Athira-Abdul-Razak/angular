import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})

export class AddressFormComponent implements OnInit {
  countryList = [
    { code: 'I', name: 'India' },
    { code: 'USA', name: 'United States Of America' }
  ];
  stateList = [
    { code: 'AR', name: 'Arizona' },
    { code: 'AK', name: 'Alaska' }
  ]

  selectedCountry: any;
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  submitted = false;
  @Input() formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.formGroup);
  }

  onChangeCountry(value: any) {
    this.selectedCountry = value;
  }

}