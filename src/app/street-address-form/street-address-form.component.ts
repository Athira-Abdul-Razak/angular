import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../curd.service';

@Component({
  selector: 'app-street-address-form',
  templateUrl: './street-address-form.component.html',
  styleUrls: ['./street-address-form.component.css']
})

export class StreetAddressFormComponent implements OnInit {
  streetForm: FormGroup;
  submitted: boolean;
  error: null;
  countryStateList: any = {
    'countries': [],
    'state': []
  };

  constructor(private fb: FormBuilder, private dataservice: CountryService) { }

  ngOnInit(): void {
    this.createForm();
    this.dataservice.getUrl().subscribe(data => {
      this.countryStateList = data;
    }, error => {
      console.error('error caught in component');
      this.error = error;
      throw error;
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
