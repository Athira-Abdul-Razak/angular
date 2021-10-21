import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { CustomValidation } from './custom-validation';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  emailpattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  loginForm: FormGroup;
  submitted: boolean;

  ngOnInit(): void {
    this.createForm();
  }
  constructor(private fb: FormBuilder) { }
  createForm() {
    this.loginForm = this.fb.group({
      'Email': ['', [Validators.required,CustomValidation,Validators.pattern(this.emailpattern)]],
      'Username': ['', Validators.required],
      'Password': [ '', Validators.required],
    });
}

get Email() {
  return this.loginForm.get('Email');
}

onSubmit() {
  this.submitted = true;
  console.log(this.loginForm.value);
}

}