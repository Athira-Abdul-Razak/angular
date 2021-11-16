import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../curd.service';
@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})

export class ProfileFormComponent implements OnInit {
  profileForm: FormGroup;
  submitted: boolean;
  putData: FormGroup;

  constructor(private fb: FormBuilder, private dataservice: CountryService) { }

  ngOnInit(): void {
    this.createForm();
  }

  update(patchData: any) {
    this.dataservice.patchUrl(patchData).subscribe(responseData => {
      console.log(responseData);
    });
  }

  Edit(putData: any) {
    this.dataservice.putUrl(putData).subscribe(responseData => {
      console.log(responseData);
    });
  }

  createForm() {
    this.profileForm = this.fb.group({
      'name': ['', Validators.required],
      'job': ['', Validators.required],
    });
  }

  postProfile(postData: object) {
    this.submitted = true;
    if (this.profileForm.valid) {
      this.dataservice.postUrl(postData).subscribe(responseData => {
        console.log(responseData);
      });
    }
  }

}
