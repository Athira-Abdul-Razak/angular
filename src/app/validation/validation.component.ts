import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-validation',
  template: `<li *ngIf="control.invalid && (control.dirty || control.touched  || submitted)" class="text-danger">
   {{name}} is required.
</li> `
})

export class ValidationComponent {
  @Input() control: AbstractControl;
  @Input() submitted: boolean;
  @Input() name: string;


  constructor() { }
}
