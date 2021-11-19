import { Component, OnChanges, Input } from '@angular/core';
import { CountryService } from '../curd.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnChanges {
  error: null;
  isConfirmationOpen: boolean;
  @Input() selectedIndex: number;
  employee: any = {};

  constructor(private dataservice: CountryService) { }

  ngOnChanges() {
    console.log(this.selectedIndex);
    this.getEmployeeById(this.selectedIndex);
  }

  getEmployeeById(id: number) {
    this.dataservice.getEmployeeById(id).subscribe(data => {
      this.employee = data;
      console.log(this.employee);
    }, error => {
      console.error('error caught in component');
      this.error = error;
      throw error;
    });
  }
}

