import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation',
  template: `<li *ngIf="control.invalid && (control.dirty || control.touched  || submitted)" class="text-danger">
  please enter your {{name}}.
</li>`
})
export class ValidationComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() submitted: boolean;
  @Input() name: string;



  constructor() { }

  ngOnInit(): void {
    console.log(this.control);
    console.log(this.submitted);
  }

}
// './validation.component.html',
  // styleUrls: ['./validation.component.css']
