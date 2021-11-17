import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CountryService {
  countryStateUrl = ' https://pod2-dlp.fayastage.com:7004/api/m/country_state_list';
  profieFormUrl = ' https://reqres.in/api/users/2';

  constructor(private http: HttpClient) { }

  getUrl() {
    return this.http.get(this.countryStateUrl);
  }

  get() {
    return this.http.get('https://retoolapi.dev/sFlOCx/intern_task');
  }

  getFilter() {
    return this.http.get('https://retoolapi.dev/sFlOCx/intern_task?status=true');
  }

  getView() {
    return this.http.get('https://retoolapi.dev/sFlOCx/intern_task');
  }

  addPost(postData: object) {
    return this.http.post('https://retoolapi.dev/sFlOCx/intern_task', postData);
  }

  deleteEmployee() {
    return this.http.delete('https://retoolapi.dev/sFlOCx/intern_task//<id>');
  }

  putUrl(putData: object) {
    return this.http.put(this.profieFormUrl, putData);
  }

  putEmployee(putData: object) {
    return this.http.put('https://retoolapi.dev/sFlOCx/intern_task/', putData);
  }

  postUrl(postData: object) {
    return this.http.post(this.profieFormUrl, postData);
  }

}


