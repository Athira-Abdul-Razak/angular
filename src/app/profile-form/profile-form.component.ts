import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  profileForm: FormGroup;
  submitted: boolean;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.profileForm = this.fb.group({
      'name': ['', Validators.required],
      'job': ['', Validators.required],
    });
  }

  postProfile(postData: any) {
    this.submitted = true;
    if (this.profileForm.valid) {
      this.http.post('https://reqres.in/api/users', postData).subscribe(responseData => {
        console.log(responseData);
      });
    }
  }

}
