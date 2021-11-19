import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../../../curd.service';
@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})

export class EmployeeTableComponent implements OnInit {
  error: null;
  employeeTable: any ;
  content: any
  bookForm: FormGroup;
  selectedItem: any;
  titleName: string;
  submitted: boolean;
  selectedIndex: number;
  isConfirmationOpen:boolean;
  params: HttpParams;
  isOpen:boolean;

  constructor(private formBuilder: FormBuilder,private dataservice: CountryService) {}

  onAdd() {
    this.selectedItem = null;
    this.titleName = 'Add Employee';
    this.isConfirmationOpen=true;
  }

  onEdit(item:any) {
    this.selectedItem = item;
    this.selectedIndex = item.id;
    this.titleName = 'Edit Employee';
    this.isConfirmationOpen=true;
  }

  onStatusChanged(event: any) {
    console.log(event.target.value);
    this.params = this.params.delete('status');
    if (event.target.value !== '' ) {
      this.params = this.params.append('status', event.target.value);
    }

    this.getEmployee();
  }

  delete(id:number) {
    this.dataservice.deleteEmployee(id).subscribe((data): void => {
      this.getEmployee();

    });
  }

  getId(item:any) {
    this.selectedIndex = item.id;
    console.log(this.selectedIndex);
    this.isOpen=true;
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
      this.isConfirmationOpen=false;
    } else {
      this.dataservice.addPostEmployee(value).subscribe(responseData => {
        console.log(responseData);
        this.getEmployee();
      });
      this.isConfirmationOpen=false;
    }
  }

  cancel() {
    this.isConfirmationOpen = false;
  }
}