import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-biiling',
  templateUrl: './biiling.component.html',
  styleUrls: ['./biiling.component.css']
})
export class BiilingComponent implements OnInit {
  registerForm: FormGroup;
submitted = false;
constructor( private formBuilder: FormBuilder){}
//Add user form actions
get f() { return this.registerForm.controls; }
onSubmit() {
  console.log(this.registerForm.value);
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  //True if all the fields are filled
  if (this.submitted)
  {
    alert('Great!!');
  }

}
  ngOnInit() {
    //Add User form validations
    this.registerForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    address1: ['', [Validators.required]],
    address2: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    zip: ['', [Validators.required]],

    country: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    });
  }
}
