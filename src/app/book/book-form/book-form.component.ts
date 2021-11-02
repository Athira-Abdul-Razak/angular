import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})

export class BookFormComponent implements OnChanges {
  @Output() updateBookForm = new EventEmitter<any>();
  @Output() cancelEvent = new EventEmitter<any>();
  @Output() updateEvent = new EventEmitter<any>();
  @Input() row: any;
  @Input() popupName: string;
  submitted: boolean;
  bookForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.bookForm = this.formBuilder.group({
      'title': ['', [Validators.required]],
      'author': ['', Validators.required],
      'publisher': ['', Validators.required],
      'genre': ['', Validators.required],
      'price': ['', Validators.required]
    });
  }

  ngOnChanges() {
    if (this.row) {
      this.bookForm.setValue(this.row);
    }
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.updateBookForm.emit(this.bookForm.value);
      this.bookForm.reset();

    } else {
      this.submitted = true;
      this.bookForm.reset();
    }
  }

  cancel() {
    this.cancelEvent.emit(true);
  }

}
