import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public myModel = ''
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  form: FormGroup;
  submitted=false;
  contactForm = this.fb.group({
  contacts: this.fb.array([this.createContact()])
  });

constructor(private fb: FormBuilder) {}
 get contacts() {
    return this.contactForm.get('contacts') as FormArray;
  }

  createContact(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required,Validators.min(3)]],
    });
  }
  addContacts() {
    this.contacts.push(this.createContact());
  }

  deleteContact(i: number) {
    this.contacts.removeAt(i);
  }

  get phone()
  {
    return this.contacts.get('phone');
  }

  onSubmit() {
    this.submitted=true;
    console.log(this.contactForm.value);
  }
}












