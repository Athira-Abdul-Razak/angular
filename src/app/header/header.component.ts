import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  logout() {
    this.auth.logout();
  }

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.auth.isLoggedIn;
  }
}
