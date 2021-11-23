import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
  error: null;

  constructor(private formBuilder: FormBuilder) {
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
      this.updateBookForm.emit(this.bookForm.value);
    } else {
      this.submitted = true;
    }
  }

  cancelForm() {
    this.cancelEvent.emit(true);
  }

}
