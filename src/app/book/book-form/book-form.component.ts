import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PricePipe } from 'src/app/pipes/price.pipe';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})

export class BookFormComponent implements OnChanges {
  @Output() updateBookForm = new EventEmitter<any>();
  @Output() cancelEvent = new EventEmitter<any>();
  @Input() bookValue: any;
  @Input() titleName: string;
  submitted: boolean;
  bookForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private pricePipe: PricePipe) {
    this.bookForm = this.formBuilder.group({
      'title': ['', [Validators.required]],
      'author': ['', Validators.required],
      'publisher': ['', Validators.required],
      'genre': ['', Validators.required],
      'price': ['', Validators.required]
    });
  }

  ngOnChanges() {
    if (this.bookValue) {
      this.bookForm.setValue(this.bookValue);
    }
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.bookForm.get('price').setValue(this.pricePipe.transform(this.bookForm.get('price').value));
      this.updateBookForm.emit(this.bookForm.value);
    } else {
      this.submitted = true;
    }
  }

  cancel() {
    this.cancelEvent.emit(true);
  }
}