import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../curd.service';
@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})

export class EmployeeTableComponent implements OnInit {
  error: null;
  employeeTable: any ;
  selectedItem: any;
  titleName: string;
  submitted: boolean;
  selectedIndex: number;
  employeeFormOpen:boolean;
  params: HttpParams;
  isConfirmationOpen:boolean;

  constructor(private dataservice: CountryService) {}

  onAdd() {
    this.selectedItem = null;
    this.titleName = 'Add Employee';
    this.employeeFormOpen=true;
  }

  onEdit(item:any) {
    this.selectedItem = item;
    this.selectedIndex = item.id;
    this.titleName = 'Edit Employee';
    this.employeeFormOpen=true;
  }

  onStatusChanged(event: any) {
    console.log(event.target.value);
    this.params = this.params.delete('status');
    if (event.target.value !== '' ) {
      this.params = this.params.append('status', event.target.value);
    }

    this.getEmployee();
  }

  delete(id:number,employee:string) {
    if (confirm('Are you sure to delete ' + employee)) {
      this.dataservice.deleteEmployee(id).subscribe((data): void => {
        this.getEmployee();
      });
    }
  }

  getId(item:any) {
    this.selectedIndex = item.id;
    console.log(this.selectedIndex);
    this.isConfirmationOpen=true;
  }

  ngOnInit(): void {
    this.params = new HttpParams();
    this.getEmployee();
     }

  getEmployee() {
    this.dataservice.getEmployee(this.params).subscribe(data => {
      this.employeeTable = data;
    }, error => {
      console.error('error caught in component');
      this.error = error;
      throw error;
    });
  }

  onSubmit(value:any) {
    this.submitted = true;
    if (this.selectedItem) {
      this.dataservice.putEmployee(this.selectedIndex,value).subscribe(responseData => {
        console.log(responseData);
        this.getEmployee();
      }, error => {
        console.error('error caught in component');
        this.error = error;
        throw error;
      });
      this.employeeFormOpen=false;
    } else {
      this.dataservice.addPostEmployee(value).subscribe(responseData => {
        console.log(responseData);
        this.getEmployee();
      });
      this.employeeFormOpen=false;
    }
  }

  cancel() {
    this.isConfirmationOpen = false;
  }
}