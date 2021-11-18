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
  closePopup: string;
  content: any
  bookForm: FormGroup;
  selectedItem: any;
  titleName: string;
  submitted: boolean;
  putData: object;
  postData: object
  selectedIndex: number;
  isConfirmationOpen:boolean;

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

  filter() {
    this.dataservice.getFilter().subscribe(data => {
      console.log(data);
      this.employeeTable = data;
    }, error => {
      console.error('error caught in component');
      this.error = error;
      throw error;
    });
  }

  delete(id:number) {
    this.dataservice.deleteEmployee(id).subscribe((data): void => {
      console.log(data);
      this.employeeTable = data;
    }, error => {
      console.error('error caught in component');
      this.error = error;
      throw error;
    });
  }

  ngOnInit(): void {
    this.dataservice.get().subscribe(data => {
      console.log(data);
      this.employeeTable = data;
    }, error => {
      console.error('error caught in component');
      this.error = error;
      throw error;
    });
  }

  onSubmit(value:any) {
    console.log(value,'hi');
    this.submitted = true;
    if (this.selectedItem) {
      this.dataservice.putEmployee(this.selectedIndex,value).subscribe(responseData => {
        console.log(responseData);
      }, error => {
        console.error('error caught in component');
        this.error = error;
        throw error;
      });
    } else {
      this.dataservice.addPost(value).subscribe(responseData => {
        console.log(responseData);
      });
    }
  }

  cancel() {
    this.isConfirmationOpen = false;
  }
}