import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-validation',
  template: `<li *ngIf="control.invalid && (control.dirty || control.touched || submitted)" class="text-danger">
   {{name}} is required.
</li>
<li *ngIf="control.errors?.email  && (control.dirty || control.touched || submitted)" class="text-danger"> Enter a valid {{name}} address.</li>
<li *ngIf="control.errors?.pattern  && (control.dirty || control.touched || submitted)" class="text-danger"> Enter a valid {{name}}.</li>`
})

export class ValidationComponent {
  @Input() control: AbstractControl;
  @Input() submitted: boolean;
  @Input() name: string;

  constructor() { }
}
