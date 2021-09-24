import { Component, OnInit } from '@angular/core';

import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public myModel = ''
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  form: FormGroup;
  submitted=false;
  contactForm = this.fb.group({
  contacts: this.fb.array([this.createContact()])
  });

  
  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
  }
  get contacts() {
    return this.contactForm.get('contacts') as FormArray;
  }

  createContact(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required,Validators.minLength(10)]],
    });
  }
  addContacts() {
    this.contacts.push(this.createContact());
  }
  
  deleteContact(i: number) {
    this.contacts.removeAt(i)
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



 
  

  

  
  





