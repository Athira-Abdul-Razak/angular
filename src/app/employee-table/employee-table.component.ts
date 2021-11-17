import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../curd.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private formBuilder: FormBuilder,private dataservice: CountryService,private modalService: NgbModal) {
    this.bookForm = this.formBuilder.group({
      'employee_name': ['', [Validators.required]],
      'employee_experiance': ['', Validators.required],
      'employee_designation': ['', Validators.required],
      'status': ['', Validators.required],
    });
  }

  onAdd(content: any) {
    this.selectedItem = null;
    this.showPopup(content);
    this.titleName = 'Add Employee';
  }

  onEdit(content: any,putData: object,item: any) {
    this.selectedItem = item;
    this.showPopup(content);
    this.titleName = 'Edit Employee';
    this.dataservice.putEmployee(putData).subscribe(responseData => {
      console.log(responseData);
    });
  }

  showPopup(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
      this.closePopup = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closePopup = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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

  view() {
    this.dataservice.getView().subscribe(data => {
      console.log(data);
      this.employeeTable = data;
    }, error => {
      console.error('error caught in component');
      this.error = error;
      throw error;
    });
  }

  delete() {
    this.dataservice.deleteEmployee().subscribe((data): void => {
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
}