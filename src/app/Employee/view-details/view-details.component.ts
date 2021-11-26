import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { curdService } from 'src/app/curd.service';
@Component({
  selector: 'app-view-url',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})

export class ViewUrlComponent implements OnInit {
  employeeId: any;
  employee: any;
  error: null;

  constructor(private dataservice: curdService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    this.getEmployeeById(this.employeeId);
  }

  getEmployeeById(id: Number) {
    this.dataservice.getEmployeeDetailById(this.employeeId).subscribe(data => {
      this.employee = data;
    }, error => {
      console.error('error caught in component');
      this.error = error;
      throw error;
    });
  }
}