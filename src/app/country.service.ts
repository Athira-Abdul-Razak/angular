import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class CountryService {
  countryStateUrl = ' https://pod2-dlp.fayastage.com:7004/api/m/country_state_list';

  constructor(private http: HttpClient) { }

  getUrl() {
    return this.http.get(this.countryStateUrl).pipe();
  }
}
