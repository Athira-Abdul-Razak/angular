import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class FormComponent  {
    public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    contactForm = this.fb.group({
    contacts: this.fb.array([this.createContact()])
  });

 constructor(private fb: FormBuilder) {}
    get contacts() {
    return this.contactForm.get('contacts') as FormArray;
  }
 addContacts() {
    this.contacts.push(this.createContact());
  }
 deleteContact(i: number) {
    this.contacts.removeAt(i);
  }
 createContact(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required,Validators.minLength(10)]],
    });
  }
 onSubmit() {
    console.log(this.contactForm.value);
  }
}















function createContact() {
  throw new Error('Function not implemented.');
}

