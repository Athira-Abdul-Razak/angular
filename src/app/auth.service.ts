import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl = 'https://pod1.salesonepro.com:8005/signin//token/';
  clientId = 'fU3kkI1Zc1gwGcs97b7dQYHzgeBS3THBKwKevZvh';
  secret = 'UuGGXMv2qC4ebKyKySRYoy1ITJd1eOn5EYXOaq6CmOuAUvcAUHeJp2sv1wTZfZGWxSVqfoQ1pwwgNGgX4UFmy0JfM814Rsppw4LPhrywAhlegmLU2xdakonFr1kfabXh';
  constructor(private http: HttpClient) { }

  signIn(creds: any) {
    const token = btoa(this.clientId + ':' + this.secret);
    let headers = new HttpHeaders().set('Authorization', 'Basic ' + token);
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(
     this.loginUrl, creds, { headers: headers}
    );
  }
}

