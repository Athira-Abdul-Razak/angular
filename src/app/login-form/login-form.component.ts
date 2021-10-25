import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomValidation } from '../shared/custom-validator/custom-validator.component';

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
      'Username': ['', [Validators.required, CustomValidation.noWhiteSpace]],
      'Password': ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

}