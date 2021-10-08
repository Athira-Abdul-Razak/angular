import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
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
