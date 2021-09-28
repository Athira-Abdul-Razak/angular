import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  contactForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initContactForm();
  }

  get contacts() {
    return this.contactForm.get('contacts') as FormArray;
  }

  initContactForm() {
    this.contactForm = this.fb.group({
      contacts: this.fb.array([this.createContact()])
    });
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
      phone: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

}















function createContact() {
  throw new Error('Function not implemented.');
}

