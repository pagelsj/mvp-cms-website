import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserNavigationList } from '../../data/index';

@Component({
  selector: 'app-user-navigation',
  templateUrl: './user-navigation.component.html',
  styleUrls: ['./user-navigation.component.scss']
})
export class UserNavigationComponent {
  public authenticated: boolean;
  public navList = UserNavigationList();
  public navigation;

  constructor(
    private router: Router
  ) {
    this.authenticated = sessionStorage['user_token'];

    if(!this.authenticated) {
      this.navigation = this.navList.unauthenticated;
    } else {
      this.navigation = this.navList.authenticated;
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
