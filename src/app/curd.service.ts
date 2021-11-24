import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CountryService {
  countryStateUrl = ' https://pod2-dlp.fayastage.com:7004/api/m/country_state_list';
  profieFormUrl = ' https://reqres.in/api/users/2';
  employeeUrl = 'https://retoolapi.dev/sFlOCx/intern_task';

  constructor(private http: HttpClient) { }

  getUrl() {
    return this.http.get(this.countryStateUrl);
  } //countrystate

  getEmployee(params: HttpParams) {
    return this.http.get(this.employeeUrl, { params });
  }

  onView(id: any) {
    return this.http.get(`${this.employeeUrl}/${id}`);
  }

  getEmployeeDetailById(id:number) {
    return this.http.get(`${this.employeeUrl}/${id}`);

  }

   addPostEmployee(postData: object) {
    return this.http.post('https://retoolapi.dev/sFlOCx/intern_task', postData);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.employeeUrl}/${id}`);
  }

  putUrl(putData: object) {
    return this.http.put(this.profieFormUrl, putData);
  } //profile

  putEmployee(id: number, data: object) {
    return this.http.put(`${this.employeeUrl}/${id}`, data);
  }

  postUrl(postData: object) {
    return this.http.post(this.profieFormUrl, postData);
  } // profile

}