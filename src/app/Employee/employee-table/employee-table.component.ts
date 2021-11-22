import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../curd.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})

export class EmployeeTableComponent implements OnInit {
  error: null;
  employeeTable: any;
  selectedEmployeeDetails: any;
  titleName: string;
  submitted: boolean;
  selectedEmployeeId: number;
  employeeFormOpen: boolean;
  params: HttpParams;
  EmployeeDetailView: boolean;

  constructor(private dataservice: CountryService) { }

  onAdd() {
    this.selectedEmployeeDetails = null;
    this.titleName = 'Add Employee';
    this.employeeFormOpen = true;
  }

  onEdit(item: any) {
    this.selectedEmployeeDetails = item;
    this.selectedEmployeeId = item.id;
    this.titleName = 'Edit Employee';
    this.employeeFormOpen = true;
  }

  onStatusChanged(event: any) {
    this.params = this.params.delete('status');
    if (event.target.value !== '') {
      this.params = this.params.append('status', event.target.value);
    }
    this.getEmployee();
  }

  delete(id: number, employee: string) {
    if (confirm('Are you sure to delete ' + employee)) {
      this.dataservice.deleteEmployee(id).subscribe((data): void => {
        this.getEmployee();
      });
    }
  }

  onView(item: any) {
    this.selectedEmployeeId = item.id;
    this.EmployeeDetailView = true;
  }

  ngOnInit(): void {
    this.params = new HttpParams();
    this.getEmployee();
  }

  getEmployee() {
    this.dataservice.getEmployee(this.params).subscribe(data => {
      this.employeeTable = data;
    }, error => {
      this.error = error;
      throw error;
    });
  }

  onSubmit(value: any) {
    this.submitted = true;
    if (this.selectedEmployeeDetails) {
      this.dataservice.putEmployee(this.selectedEmployeeId, value).subscribe(responseData => {
        this.getEmployee();
      }, error => {
        this.error = error;
        throw error;
      });
      this.employeeFormOpen = false;
    } else {
      this.dataservice.addPostEmployee(value).subscribe(responseData => {
        this.getEmployee();
      }, error => {
        this.error = error;
        throw error;
      });
      this.employeeFormOpen = false;
    }
  }
}