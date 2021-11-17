import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../curd.service';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  @Output() cancelEvent = new EventEmitter<any>();
  @Output() updateBookForm = new EventEmitter<any>();
  @Input() titleName: string;
  bookForm: FormGroup;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder,private dataservice: CountryService) {
    this.bookForm = this.formBuilder.group({
      'employee_name': ['', [Validators.required]],
      'employee_experiance': ['', Validators.required],
      'employee_designation': ['', Validators.required],
      'status': ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.updateBookForm.emit(this.bookForm.value);
    } else {
      this.submitted = true;
    }
  }

  postProfile(postData: object) {
    if (this.bookForm.valid) {
      this.updateBookForm.emit(this.bookForm.value);
      this.dataservice.addPost(postData).subscribe(responseData => {
        console.log(responseData);
      });
    }
  }

  cancel() {
    this.cancelEvent.emit(true);
  }

}
