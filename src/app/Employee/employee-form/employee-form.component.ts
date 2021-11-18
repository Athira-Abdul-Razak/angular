import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../../curd.service';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})

export class EmployeeFormComponent implements OnChanges {
  @Output() cancelEvent = new EventEmitter<any>();
  @Output() updateBookForm = new EventEmitter<any>();
  @Input() titleName: string;
  @Input() bookValue: any;
  bookForm: FormGroup;
  submitted: boolean;
  putData:object
  error: null;

  constructor(private formBuilder: FormBuilder,private dataservice: CountryService) {
    this.bookForm = this.formBuilder.group({
      'id': '',
      'employee_name': ['', [Validators.required]],
      'employee_experiance': ['', Validators.required],
      'employee_designation': ['', Validators.required],
      'status': ['', Validators.required],
    });
   }

  ngOnChanges() {
    if (this.bookValue) {
      this.bookForm.setValue(this.bookValue);
    }
  }

  onSubmit() {
    if (this.bookForm.valid) {
      console.log(this.bookForm,'bookfor');
      this.updateBookForm.emit(this.bookForm.value);
    } else {
      this.submitted = true;
    }
  }

  cancel() {
    this.cancelEvent.emit(true);
  }

}
