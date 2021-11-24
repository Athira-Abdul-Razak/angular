import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountryService } from 'src/app/curd.service';

@Component({
  selector: 'app-view-url',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})

export class ViewUrlComponent implements OnInit {
  employeeId: any;
  employee: any;
  error: null;

  constructor(private dataservice: CountryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap.get('id'));
    this.getEmployeeById(this.employeeId);
  }

  getEmployeeById(id: Number) {
    this.dataservice.getEmployeeDetailById(this.employeeId).subscribe(data => {
      this.employee = data;
      console.log(data);
    }, error => {
      console.error('error caught in component');
      this.error = error;
      throw error;
    });

  }

}
