import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-validation',
  template: `<li *ngIf="control.invalid && ( control.touched || submitted)" class="text-danger">
   {{name}} is required.
</li>
<li *ngIf="control.errors?.email  && (control.dirty || control.touched || submitted)" class="text-danger"> Enter a valid {{name}} address.</li>
<li *ngIf="control.errors?.pattern  && (control.dirty || control.touched || submitted)" class="text-danger"> Enter a valid {{name}}.</li>
<li *ngIf="control.errors?.invalidEmail  && (control.dirty || control.touched || submitted)" class="text-danger"> Enter a valid {{name}}. </li>
<li *ngIf="control.errors?.invalidUserName  && (control.dirty || control.touched || submitted)" class="text-danger">{{name}} cannot contain spaces.</li>`
})

export class ValidationComponent {
  @Input() control: AbstractControl;
  @Input() submitted: boolean;
  @Input() name: string;

  constructor() { }
}
