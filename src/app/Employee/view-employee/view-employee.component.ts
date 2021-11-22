import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { CountryService } from '../../curd.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnChanges {
  error: null;
  @Input() selectedEmployeeId: number;
  @Output() cancelEvent = new EventEmitter<any>();
  employee: any = {};

  constructor(private dataservice: CountryService) { }

  ngOnChanges() {
    console.log(this.selectedEmployeeId);
    this.getEmployeeById(this.selectedEmployeeId);
  }

  getEmployeeById(id: number) {
    this.dataservice.getEmployeeById(id).subscribe(data => {
      this.employee = data;
    }, error => {
      console.error('error caught in component');
      this.error = error;
      throw error;
    });
  }

  cancelView() {
    this.cancelEvent.emit(true);
  }
}

