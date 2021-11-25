import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CustomValidation } from '../shared/custom-validator/custom-validator';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean;
  token:object;
    constructor(private fb: FormBuilder,private authService: AuthService, private router: Router) { }

  createForm() {
    this.loginForm = this.fb.group({
      'email': ['',[Validators.required, CustomValidation.emailValidator]],
      'password': ['', Validators.required],
    });
  }

  onSubmit(credentials: any) {
    this.submitted = true;
    if (this.loginForm.valid) {
      const creds = 'grant_type=password&password='
      + encodeURIComponent(credentials['password']) + '&username=' + encodeURIComponent(credentials['email']);
       this.authService.signIn(creds).subscribe(response => {
         console.log(response, 'response');
       localStorage.setItem('refresh_token',response.refresh_token);
       this.router.navigate(['/register-form']);
       }, error => {
         console.error('error caught in component', error);
       } );
    }
  }

  ngOnInit(): void {
    this.createForm();

  }

}
