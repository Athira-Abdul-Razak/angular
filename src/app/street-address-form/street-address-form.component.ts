import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-street-address-form',
  templateUrl: './street-address-form.component.html',
  styleUrls: ['./street-address-form.component.css']
})

export class StreetAddressFormComponent implements OnInit {
  streetForm: FormGroup;
  submitted: boolean;
  countryStateList: any;
  loading: boolean;


  constructor(private fb: FormBuilder, private dataservice: CountryService) {
  }

  ngOnInit(): void {

    this.createForm();
  }

  getCountryStateList() {
    this.loading = true;
    this.dataservice.getUrl().subscribe(data => {
      this.countryStateList = data;
      this.loading = false;
      console.log(this.countryStateList,'hi');
    });
  }

  createForm() {
    this.streetForm = this.fb.group({
      'street-address': ['', Validators.required],
      'street-address-2': ['', Validators.required],
      'city': ['', Validators.required],
      'state': ['', Validators.required],
      'country': ['', Validators.required],
      'zip': ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.streetForm.valid) {
      console.log(this.streetForm.value);
    }
  }
}
