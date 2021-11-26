import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Router, RouterModule, Routes } from '@angular/router';

import { RegisterFormComponent } from '../address-form/register-form.component';
import { ShippingComponent } from '../shipping/shipping.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { BookTableComponent } from '../book/book-table/book-table.component';
import { StreetAddressFormComponent } from '../street-address-form/street-address-form.component';
import { ProfileFormComponent } from '../profile-form/profile-form.component';
import { EmployeeTableComponent } from '../Employee/employee-table/employee-table.component';
import { ViewUrlComponent } from '../Employee/view-details/view-details.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuardService } from '../auth-guard.service';
// import { TasksComponent } from '../tasks/tasks.component';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}
