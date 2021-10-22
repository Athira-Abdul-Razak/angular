import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomValidation } from '../custom-validation/custom-validation.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean;

  ngOnInit(): void {
    this.createForm();
  }

  constructor(private fb: FormBuilder) { }

  createForm() {
    this.loginForm = this.fb.group({
      'Email': ['', [Validators.required, CustomValidation.emailValidator]],
      'Username': ['', [Validators.required, CustomValidation.invalidUserName]],
      'Password': ['', Validators.required],
    });
  }

  get Email() {
    return this.loginForm.get('Email');
  }

  get Username() {
    return this.loginForm.get('Username');
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm.value);
  }

}