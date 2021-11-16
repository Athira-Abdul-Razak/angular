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
    return this.http.get(this.countryStateUrl).pipe();
  }

  patchUrl(patchData: object) {
    return this.http.patch(this.profieFormUrl, patchData);
  }

  putUrl(putData: object) {
    return this.http.patch(this.profieFormUrl, putData);
  }

  postUrl(postData: object) {
    return this.http.post(this.profieFormUrl, postData);
  }

}


