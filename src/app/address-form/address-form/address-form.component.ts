import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  @Input() formGroup: FormGroup;
  @Input() submitted: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.formGroup);
  }

  onChangeCountry(value: any) {
    this.selectedCountry = value;
  }

}